// pages/api/admin/createCarBrand.js
import prisma from '@/prisma';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, country, established } = req.body;

    try {
      const carBrand = await prisma.carBrand.create({
        data: {
          name,
          country,
          established: new Date(established),
        },
      });
      res.status(201).json(carBrand);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create car brand.' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
