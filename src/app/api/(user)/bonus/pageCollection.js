// pages/api/collectBonus.ts
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/prisma';
import { parseCookies } from 'nookies';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  const cookies = parseCookies({ req });
  const token = cookies.token;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Decode the token to get the userId
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    const userId = decoded.userId;

    // Get today's date in 'YYYY-MM-DD' format to check if bonus has already been collected
    const today = new Date();
    const dateStr = today.toISOString().split('T')[0]; // Format as 'YYYY-MM-DD'

    // Check if the user has already collected today's bonus
    const existingBonus = await prisma.dailyBonus.findUnique({
      where: {
        userId_date: {
          userId: userId,
          date: dateStr,
        },
      },
    });

    if (existingBonus) {
      return res.status(400).json({ error: 'You have already collected your bonus today.' });
    }

    // Record the user's bonus collection for today
    await prisma.dailyBonus.create({
      data: {
        userId,
        bonus: 20, // Fixed bonus of 20 stars
        date: today,
      },
    });

    return res.status(200).json({ message: 'Bonus collected successfully.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
}
