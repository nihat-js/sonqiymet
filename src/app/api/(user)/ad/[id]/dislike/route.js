import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  console.log(id);
  return NextResponse.json({ message: "Hello World" });
}
