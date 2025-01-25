// import { sequelize } from "@/node-api/sequelize";
import { autoBodyStyles, colors, currencies, fuelTypes, mileageUnits, transmissionTypes, wheelDriveTypes } from "@/src/data/auto";
import { sequelize } from "@/src/database/sequelize/db";
import Advertisement from "@/src/database/sequelize/models/Ad";
import Auto from "@/src/database/sequelize/models/Auto";
import AutoBrand from "@/src/database/sequelize/models/AutoBrand";
import AutoModel from "@/src/database/sequelize/models/AutoModel";
import { safeParse, } from "@/src/lib/SandParser";
import { NextResponse } from "next/server";
import fs from "fs"
import path from "path";
import Ad from "@/src/database/sequelize/models/Ad";
import crypto from 'crypto';
import Media from "@/src/database/sequelize/models/Media";
import { config } from "@/src/lib/config";
import jwt from "jsonwebtoken"

// import { z } from 'zod';


function generateObfuscatedFolderName(adId) {
    let d = new Date()
    const uniqueString = String(adId);
    const hash = crypto.createHash('md5').update(uniqueString).digest('hex');
    const folderName = (d.getFullYear() % 100) + ((d.getMonth() + 1).toString().padStart(2, '0')) + d.getDate().toString().padStart(2, '0') +
        + d.getHours().toString().padStart(2, '0') + hash.substring(0, 7);
    return folderName;

}



export async function POST(req) {
    const data = await req.json();

    let cookies = await req.cookies;
    if (!cookies.get('token') || (await jwt.verify(cookies.get('token').value, config.JWTSecret) === null)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }


    let result = await safeParse(data, {
        brandId: ["required", "integer"],
        modelId: ["required", "integer"],
        bodyStyleId: ["required", "integer", { in: autoBodyStyles.map(item => item.id) }],
        year: ["required", "integer", { min: 1900 }, { max: new Date().getFullYear() }],

        mileage: ["required", "integer", { min: 0 }, { max: 99999999 }],
        mileageUnitId: ["required", "integer", { in: mileageUnits.map(item => item.id) }],
        colorId: ["required", "integer", { in: colors.map(item => item.id) }],
        price: ["required", "integer", { min: 0 }, { max: 10000000 }],
        currencyId: ["required", "integer", { in: currencies.map(item => item.id) }],

        fuelTypeId: ["required", "integer", { in: fuelTypes.map(item => item.id) }],
        wheelDriveTypeId: ["required", "integer", { in: wheelDriveTypes.map(item => item.id) }],
        transmissionTypeId: ["required", "integer", { in: transmissionTypes.map(item => item.id) }],
        engineSize: ["required", "integer", { min: 0 }, { max: 15000 }],
        horsePower: ["required", "integer", { min: 0 }, { max: 10000 }],

        seatsCount: ["required", "integer", { min: 0 }, { max: 15 }],
        cylindersCount: ["required", "integer", { min: 0 }, { max: 64 }],
        VIN: ["optional", "string", "max:255"],

        // features : ["optional", "array"],
        images: ["required", "array"],

        barter: ["required", "integer", { in: [0, 1] }],
        hasCasco: ["required", "integer", { in: [0, 1] }],

        description: ["optional", "string"],

        // isAccidentFree : ["required","integer", {in : [0,1]}],


        cityId: ["required", "integer", "exists:City,id"],
        contactName: ["required", "string", "max:255"],
        contactEmail: ["required", "email"],
        contactPhoneNumber: ["required", "number"],
        isWhatsappActive: ["required", "integer", { in: [0, 1] }],
    })

    if (result?.error) {
        return NextResponse.json(result)
    }


    let brand = await AutoBrand.findByPk(+data.brandId);
    if (!brand) return new Response("Brand not found", { status: 404 })

    let model = await AutoModel.findOne({
        where: {
            brandId: +data.brandId,
            id: +data.modelId
        }
    });
    if (!model) return new Response("Model not found", { status: 404 })




    let slug = brand.name.toLowerCase() + "-" + model.name.toLowerCase() + "-" + data.year + "-" + Math.floor(Date.now() / 1000).toString(36)
        + Math.random().toString(36).slice(2, 6)
    for (const image of data.images) {
        // let sanitizedImage = image.replace(/[^a-zA-Z0-9]/g, '');
        const fullPath = path.join(process.cwd(), 'public', 'temporary-uploads', image);
        console.log(fullPath)
        if (!fs.existsSync(fullPath)) {
            return new Response("Image not found", { status: 404 })
        }
    }

    let transaction = await sequelize.transaction();
    try {
        let ad = await Ad.create({
            userId: 1,
            categoryId: 1,
            price: data.price,
            currencyId: data.currencyId,
            viewsCount: 0,
            slug: slug,
            category: 1,
            level: 1,
            countryId: 1,
            cityId: data.cityId,
            contactPhoneNumber: data.contactPhoneNumber,
            contactEmail: data.contactEmail,
            contactName: data.contactName,
        },
            {
                transaction
            }
        )
        let mediaInsertData = []

        let folderName = generateObfuscatedFolderName(ad.id);
        fs.mkdirSync(
            path.join(process.cwd(), 'public', 'uploads', 'autos', folderName)
        )
        data.images.forEach((image, index) => {
            console.log({ image });
            fs.renameSync(
                path.join(process.cwd(), 'public', 'temporary-uploads', image),
                path.join(process.cwd(), 'public', 'uploads', 'autos', folderName, image)
            );

            mediaInsertData.push({
                adId: ad.id,
                path: path.join(folderName, image),
                rank: ++index
            })
        })
        await Media.bulkCreate(mediaInsertData, { transaction })


        // console.log({"aa" : ad.id})
        await Auto.create({
            adId: ad.id,
            brandId: brand.id,
            modelId: model.id,
            brandName: brand.name,
            modelName: model.name,

            year: data.year,
            mileage: data.mileage,
            mileageUnitId: data.mileageUnitId,
            colorId: data.colorId,
            fuelTypeId: data.fuelTypeId,
            wheelDriveTypeId: data.wheelDriveTypeId,
            transmissionTypeId: data.transmissionTypeId,
            engineSize: data.engineSize,
            horsePower: data.horsePower,
            seatsCount: data.seatsCount,
            cylindersCount: data.cylindersCount,
            VIN: data.VIN,
            bodyStyleId: data.bodyStyleId,
            contactPhoneNumber: data.contactPhoneNumber,
            contactEmail: data.contactEmail,
            isWhatsappActive: data.isWhatsappActive,
            barter: data.barter,
            hasCasco: data.hasCasco,
            description: data.description

        }, { transaction })


        await transaction.commit();

        return NextResponse.json({
            error: false,
            message: "Uğurla əlavə edildi",
            data: {
                id: ad.id,
                slug: ad.slug,
            }
        })
    }
    catch (error) {
        await transaction.rollback();
        return NextResponse.json({ error: "Server error", message: error.message })
    }
}