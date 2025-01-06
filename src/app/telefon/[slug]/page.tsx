import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Star, Shield, Truck } from 'lucide-react'

// This would typically come from a database or API
const phoneDetails = {
  id: '1',
  model: 'iPhone 12',
  brand: 'Apple',
  price: 599,
  condition: 'Good',
  imageUrl: '/placeholder.svg?height=600&width=600',
  description: 'This iPhone 12 is in good condition. It features a powerful A14 Bionic chip, 5G capability, and a stunning Super Retina XDR display.',
  specs: [
    { name: 'Display', value: '6.1" Super Retina XDR' },
    { name: 'Chip', value: 'A14 Bionic' },
    { name: 'Camera', value: 'Dual 12MP system' },
    { name: 'Battery', value: 'Up to 17 hours video playback' },
    { name: 'Storage', value: '128GB' },
  ],
}

export default function PhoneDetailsPage({ params }: { params: { id: string } }) {
  // In a real app, you'd fetch the phone details based on the id
  // const phone = await getPhoneDetails(params.id)
  const phone = phoneDetails

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/phones" className="flex items-center text-blue-500 hover:underline mb-6">
        <ArrowLeft className="mr-2" size={20} />
        Back to all phones
      </Link>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="relative h-96 w-full">
            <Image
              src={phone.imageUrl}
              alt={`${phone.brand} ${phone.model}`}
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{phone.model}</h1>
          <p className="text-xl text-gray-600 mb-4">{phone.brand}</p>
          <div className="flex items-center mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className={`h-5 w-5 ${star <= 4 ? 'text-yellow-400 fill-current' : 'text-gray-300 fill-current'}`} />
            ))}
            <span className="text-sm text-gray-500 ml-2">(4.0)</span>
          </div>
          <p className="text-2xl font-bold text-blue-500 mb-4">${phone.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-6">{phone.description}</p>
          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <h2 className="text-xl font-semibold mb-2">Specifications</h2>
            <ul className="space-y-2">
              {phone.specs.map((spec, index) => (
                <li key={index} className="flex justify-between">
                  <span className="text-gray-600">{spec.name}</span>
                  <span className="font-medium">{spec.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <button className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            Add to Cart
          </button>
          <div className="mt-6 space-y-4">
            <div className="flex items-center">
              <Shield className="h-5 w-5 text-green-500 mr-2" />
              <span className="text-sm text-gray-600">30-day warranty included</span>
            </div>
            <div className="flex items-center">
              <Truck className="h-5 w-5 text-blue-500 mr-2" />
              <span className="text-sm text-gray-600">Free shipping on orders over $500</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

