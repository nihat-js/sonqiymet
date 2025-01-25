import AutoModel from "@/src/database/sequelize/models/AutoModel";
import { NextResponse } from "next/server";

export async function POST(request, {params}) {

  const { id } = await params
  console.log(id)

  const models = await AutoModel.findAll({
    where: {
      brandId: +id
    },
    attributes: ['id', 'name', 'count', 'groupName']
  })

  return NextResponse.json({
    error: false,
    data: models
  });
}
