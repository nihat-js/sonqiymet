// app/api/upload-image/route.js

import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';  // Use crypto to generate random strings
import sharp from 'sharp';

// Helper function to generate a random string for the filename
const generateRandomFilename = () => {
  return crypto.randomBytes(16).toString('hex');  // Generate a random 16-byte string
};

export async function POST(req) {
  const formData = await req.formData();
  const imageFile = formData.get('image');

  if (!imageFile) {
    return new NextResponse('No image uploaded', { status: 400 });
  }

  const randomFilename = generateRandomFilename() + path.extname(imageFile.name); // Keep the original extension
  const uploadDir = path.join(process.cwd(), 'public/temporary-uploads');
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }


  const targetPath = path.join(uploadDir, randomFilename);

  const buffer = await imageFile.arrayBuffer();
  const watermarkText = 'AVTOBEH.COM';
  const transparency = 0.15;

  const { width, height } = await sharp(buffer).metadata();

  const svgWatermark = `
  <svg width="${width}" height="${height}">
    <style>
      .heavy { font: bold ${Math.min(width / 10, 60)}px sans-serif; fill: white; }
      .light { opacity: ${transparency}; }
    </style>
    <text x="50%" y="50%" class="heavy light" text-anchor="middle" dominant-baseline="middle">
      ${watermarkText}
    </text>
  </svg>
  `;
  const watermarkBuffer = Buffer.from(svgWatermark);
  const processedImage = await sharp(buffer)
    .composite([{ input: watermarkBuffer, gravity: 'center' }])
    .toBuffer();

  fs.writeFileSync(targetPath, Buffer.from(processedImage)); // Write the buffer to disk

  // Construct the URL for the uploaded image
  // const imageUrl = `/temporary-uploads/${randomFilename}`;

  // Return the response with the image URL
  return new NextResponse(
    JSON.stringify({
      status: 'ok',
      imageName: randomFilename
    }),
    { status: 200 }
  );
}
