"use client"

import Image from 'next/image'
import { Star, Heart } from 'lucide-react'
import React from 'react'

interface PhoneCardProps {
  id: string
  model: string
  brand: string
  price: number
  condition: string
  imageUrl: string
  images: string[]
  description: string
  ram: string
  storage: string
  color: string
}

// Inside PhoneCard component
const PhoneCard = ({ id, model, brand, price, condition, imageUrl, images, description,
  ram, storage, color }: PhoneCardProps) => {
  const [currentImage, setCurrentImage] = React.useState(imageUrl);

  return (
    <div
      className="phone-card"
      onMouseEnter={() => {
        // Set the current image to the first image in the array on hover
        setCurrentImage(images[0]);
      }}
      onMouseLeave={() => {
        // Reset to the default image when not hovering
        setCurrentImage(image);
      }}
    >
      <img src={currentImage} alt={name} />
      <h2>{name}</h2>
      <p>{price}</p>
      <p>{description}</p>
      <p>RAM: {ram}</p>
      <p>Storage: {storage}</p>
      <p>Color: {color}</p>
    </div>
  );
};

export default PhoneCard;