// pages/api/getUser.ts
import { parseCookies } from 'nookies';
import jwt from 'jsonwebtoken';
import prisma from '@/prisma';  // Assuming Prisma Client is initialized in `lib/prisma.ts`

export default async function handler(req, res) {
  const cookies = parseCookies({ req });
  const token = cookies.token;
  
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');

    const user = await prisma.user.findUnique({
      where: {
        id: decoded.userId,
      },
    });

    if (user) {
      // Prepare the response data with the user fields
      const responseUser = {
        id: user.id,
        name : user.name,
        email: user.email,
        avatar: user.avatar || '/default-avatar.png',
        bonus: user.bonus || 0,
        balance: user.balance || 0,
      };

      return res.status(200).json(responseUser);
    } else {
      return res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
