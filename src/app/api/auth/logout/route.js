import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  let cookiesStore = await cookies();
  cookiesStore.delete('token')

  return NextResponse.json({
    error: false,
  });

}