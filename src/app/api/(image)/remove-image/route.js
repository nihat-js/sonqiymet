import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function POST(req) {
    try {
        const data = await req.json();
        let imageURL = data.imageURL
        
        imageURL = imageURL.replace("/temporary-uploads/", "");
        imageURL = imageURL.replace(/[\/\\]/g, ''); 

        if (!imageURL) {
            return new NextResponse('Image name is required', { status: 400 });
        }

        const uploadDir = path.join(process.cwd(), 'public/temporary-uploads');
        const targetPath = path.join(uploadDir, imageURL);

        if (!fs.existsSync(targetPath)) {
            return new NextResponse('Image not found', { status: 404 });
        }

        fs.unlinkSync(targetPath);

        return new NextResponse(
            JSON.stringify({
                status: 'ok',
                message: 'Image deleted successfully'
            }),
            { status: 200 }
        );
    } catch (error) {
        return new NextResponse(
            JSON.stringify({
                status: 'error',
                message: error.message
            }),
            { status: 500 }
        );
    }
}