import { Op } from "sequelize"

import { colors } from "@/src/data/auto"
import Ad from "@/src/database/sequelize/models/Ad"
import { NextResponse } from "next/server"

export async function POST(req : Request) {

    const {query, categoryId, brandId, modelId, colorId, fuelTypeId, mileageUnitId, priceFrom, priceTo, yearFrom, yearTo} = await req.json()

    let queryBuilder : any = {}

    if (categoryId){
        queryBuilder.categoryId = categoryId
    }

    if (brandId){
        queryBuilder.brandId = brandId
    }
    if (modelId){
        queryBuilder.modelId = modelId
    }

    if (colorId){
        queryBuilder.colorId = colorId
    }
    if (fuelTypeId){
        queryBuilder.fuelTypeId = fuelTypeId
    }
    if (mileageUnitId){
        queryBuilder.mileageUnitId = mileageUnitId
    }

    if (priceFrom){
        queryBuilder.price = {
            [Op.gte] : priceFrom
        }
    }
    if (priceTo) {
        queryBuilder.price = {
            ...(queryBuilder.price || {}),
            [Op.lte]: priceTo
        }
    }
    if (yearFrom) {
        queryBuilder.year = {
            [Op.gte]: yearFrom
        }
    }
    if (yearTo) {
        queryBuilder.year = {
            ...(queryBuilder.year || {}),
            [Op.lte]: yearTo
        }
    }

    let data = await Ad.findAll({
        where: queryBuilder
    })

    let words : string[] = query.split(" ")

    // words.forEach(word => {
        // let isColor = colors.find(color => color.name.toLowerCase() === word.toLowerCase())
        // let isBodyStyle = autoBodyStyles.find(bodyStyle => bodyStyle.name.toLowerCase() === word.toLowerCase())
    // })

    return NextResponse.json({message: "Success"})

}