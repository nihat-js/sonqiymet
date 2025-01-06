import React from 'react';

interface PhoneCardProps {
  image: string;
  name: string;
  price: string;
  description: string;
}

function PhoneCard({ image, name, price, description }: PhoneCardProps) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
      <img className="w-full" src={image} alt={name} />
      <div className="p-4">
        <h2 className="font-bold text-xl">{name}</h2>
        <p className="text-gray-700">{description}</p>
        <p className="text-lg font-semibold">{price}</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          View Details
        </button>
      </div>
    </div>
  );
};

export default PhoneCard;