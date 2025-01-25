import Ad from "@/src/database/sequelize/models/Ad";
import Like from "@/src/database/sequelize/models/Like";
import { NextResponse } from "next/server";

export async function POST(request, { params }) {

  let { id } = await params
  let adId = +id
  let userId = 1

  console.log({ id, userId })
  let isExists = await Ad.findOne({
    where: {
      id
    }
  })

  if (!isExists) {
    return NextResponse.json({
      error: true,
      message: 'Ad not found',
    })
  }

  let isLiked = await Like.findOne({
    where: {
      adId,
      userId
    }
  })

  if (isLiked) {
    return NextResponse.json({
      error: true,
      message: 'Ad already liked',
    })
  }

  await Like.create({
    adId,
    userId
  })

  return NextResponse.json({
    error: false,
    message: 'Ad liked'
  })
}