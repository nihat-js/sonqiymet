import Image from 'next/image'
import { Star, Heart } from 'lucide-react'

interface PhoneCardProps {
  id: string
  model: string
  brand: string
  price: number
  condition: string
  imageUrl: string
}

export default function PhoneCard({ id, model, brand, price, condition, imageUrl }: PhoneCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative h-48 w-full">
        <img
          src="https://placehold.co/600x400"
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          alt={`${brand} ${model}`}
          height={200}
        // layout="fill"
        // objectFit="cover"
        />
        <button className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-100">
          <Heart className="h-5 w-5 text-red-500" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{model}</h3>
        <p className="text-gray-600 text-sm mb-2">{brand}</p>
        <div className="flex justify-between items-center mb-2">
          <span className="text-blue-500 font-bold">${price}</span>
          <span className="text-sm text-gray-500">{condition}</span>
        </div>
        <div className="flex items-center">
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
          <Star className="h-4 w-4 text-gray-300 fill-current" />
          <span className="text-sm text-gray-500 ml-1">(4.0)</span>
        </div>
      </div>
    </div>
  )
}

