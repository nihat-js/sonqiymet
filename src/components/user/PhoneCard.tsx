"use client"

import Image from "next/image"
import { useState } from "react"
import { Smartphone, MemoryStickIcon as Memory, HardDrive, Palette, Calendar, Heart } from "lucide-react"

interface PhoneProps {
  name: string
  brand: string
  ram: string
  storage: string
  color: string
  price: number
  condition: string
  publishedDate: string
  imageUrl: string
}

export default function PhoneCard({
  name,
  brand,
  ram,
  storage,
  color,
  price,
  condition,
  publishedDate,
  imageUrl,
}: PhoneProps) {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 mb-4">
        <Image src={imageUrl || "/placeholder.svg"} alt={name} layout="fill" objectFit="cover" className="rounded-md" />
      </div>
      <h2 className="text-lg font-semibold mb-2">
        {brand} {name}
      </h2>
      <div className="space-y-1 text-sm">
        <div className="flex items-center">
          <Memory className="w-4 h-4 mr-2 text-blue-500" />
          <span>RAM: {ram}</span>
        </div>
        <div className="flex items-center">
          <HardDrive className="w-4 h-4 mr-2 text-blue-500" />
          <span>Yaddaş: {storage}</span>
        </div>
        <div className="flex items-center">
          <Palette className="w-4 h-4 mr-2 text-blue-500" />
          <span>Rəng: {color}</span>
        </div>
        <div className="flex items-center">
          <Smartphone className="w-4 h-4 mr-2 text-blue-500" />
          <span>Vəziyyət: {condition}</span>
        </div>
        <div className="flex items-center">
          <Calendar className="w-4 h-4 mr-2 text-blue-500" />
          <span>Tarix: {publishedDate}</span>
        </div>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <span className="text-lg font-bold">{price} AZN</span>
        <button
          onClick={() => setIsLiked(!isLiked)}
          className={`p-2 rounded-full ${isLiked ? "bg-red-500 text-white" : "bg-gray-200 text-gray-600"}`}
        >
          <Heart className="w-5 h-5" />
        </button>
      </div>
      <button className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
        Müqayisə et
      </button>
    </div>
  )
}

