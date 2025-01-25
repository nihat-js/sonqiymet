// pages/api/protected.ts
import { NextApiRequest, NextApiResponse } from "next";
import { verifyToken } from "@/lib/verifyToken";

export default function handler(req, res) {
  const token = req.headers.authorization?.split(" ")[1]; // Expecting "Bearer <token>"

  if (!token) {
    return res.status(401).json({ error: "Token is required." });
  }

  try {
    const decoded = verifyToken(token);
    res.status(200).json({ message: "Access granted", user: decoded });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
}
