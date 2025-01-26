import { NextRequest, NextResponse } from "next/server";

export async function GET(request  : NextRequest, { params } : any) {
  const { id } = params;
  console.log(id);
  return NextResponse.json({ message: "Hello World" });
}
