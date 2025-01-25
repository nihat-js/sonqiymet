import { safeParse } from "@/lib/SandParser";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { appConfig } from "@/lib/appConfig";


export async function POST(request : NextRequest) {

  let body:any = await request.json();

  let result = await safeParse(body, {
    email: ["required", "email"],
    password: ["required", "string", { min: 6 }, { max: 100 }],
  });

  if (result.error) {
    return NextResponse.json(
      { error: result.error },
      { status: 400 }
    );
  }

  let user = await prisma.user.findFirst({
    where: {
      email: body.email
    }
  });

  if (!user) {
    return NextResponse.json(
      { error: "User not found" },
      { status: 400 }
    );
  }

  let passwordMatch = await bcrypt.compare(body.password, user.password);
  if (!passwordMatch) {
    return NextResponse.json(
      { error: "Invalid password" },
      { status: 400 }
    );
  }

  let cookieStore = await cookies();
  let jwtToken = jwt.sign({
    id: user.id,
    email: user.email
  }, appConfig.JWT_SECRET, { expiresIn: '10d' });

  cookieStore.set('token', jwtToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 10 * 24 * 60 * 60, // 10 days
  });

  // console.log(jwtToken)

  return NextResponse.json({
    error: false,
    message: "Daxil olundu",
    data: {
      id: user.id,
      email: user.email,
      name: user.name,
    }
  })
  // return NextResponse.json(
  //   { message: "Login successful", 
  //     token: jwtToken },
  //   { status: 200 }
  // );

}