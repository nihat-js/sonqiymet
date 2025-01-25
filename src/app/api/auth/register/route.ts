import { safeParse } from "@/lib/SandParser";

import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma";
import { appConfig } from "@/lib/appConfig";

export async function POST(request: NextRequest) {
  const $request = await request.json()

  let result = await safeParse($request, {
    name: ["required", "string", { min: 2 }, { max: 100 }],
    email: ["required", "email"],
    password: ["required", "string", { min: 6 }, { max: 100 }],
  })

  if (result.error) {
    return NextResponse.json(
      { error: result.error },
      { status: 400 }
    );
  }

  let { phoneNumber, name, email, password } = $request


  let existingUser = await prisma.user.findFirst({ where: { email } })
  if (existingUser) {
    return NextResponse.json(
      { message: 'Email already in use' },
      { status: 400 }
    );
  }


  password = await bcrypt.hash(password, 10);
  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password,
    }
  });
  const jwtToken = jwt.sign(
    {
      userId: newUser.id,
      email: newUser.email
    },
    appConfig.JWT_SECRET,
    { expiresIn: '2w' }
  );




  const cookieStore = await cookies()
  cookieStore.set('token', jwtToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60,
  });

  return NextResponse.json({
    error: false,
    message: 'Uğurla qeydiyyatdan keçildi',
    data: {
      id: newUser.id,
      email: newUser.email,
    },
  });
}