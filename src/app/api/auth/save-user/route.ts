// app/api/save-user/route.js
import admin from '@/lib/firbaseAdmin';
import { NextRequest, NextResponse } from 'next/server';
import { appConfig } from '@/lib/appConfig';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
    const { idToken } = await req.json(); // Use req.json() to parse the request body
    let provider = "google"
    let decodedUser
    try {
        decodedUser = await admin.auth().verifyIdToken(idToken);

        if (!decodedUser) {
            return NextResponse.json({ error: 'Invalid token' });
        }
        let user = await prisma.user.findFirst({ where: { email: decodedUser.email } });



        if (!user) {
            user = await prisma.user.create({
                data: {
                    name: decodedUser.name,
                    email: decodedUser.email,
                    // provider: provider
                }
            });
        }
        let data = {
            id: user.id,
            email: user.email,
            name: user.name,
            provider: provider
        }

        console.log(data)

        let jwtToken = jwt.sign(data, appConfig.JWT_SECRET, { expiresIn: '14days' });
        let cookiesStore = await cookies()
        cookiesStore.set('token', jwtToken, { httpOnly: true, secure: true, maxAge: 14 * 24 * 60 * 60 * 1000 });
        return NextResponse.json({ error: false, message: 'User data saved successfully', data: data });


    } catch (error : any) {
        return NextResponse.json({ error: error.message });
    }
}
