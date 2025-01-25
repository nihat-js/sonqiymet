"use client"

import Image from "next/image"
import { useState } from "react"
import { Smartphone, MemoryStickIcon as Memory, HardDrive, Palette, Calendar, Heart, Scale, Battery } from "lucide-react"

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
  const percentage = 80
  const [isLiked, setIsLiked] = useState(false)

  const [showImagePointers, setShowImagePointers] = useState(false)
  const [activeImage, setActiveImage] = useState(0)

  return (
    <div className="bg-white rounded-lg shadow-md hover:scale-105
    hover:shadow-lg tqeransition-shadow duration-300 "
      style={{ width: '100%', }} >
      <div className="image-wrapper relative" onMouseEnter={() => setShowImagePointers(true)}
        onMouseLeave={() => setShowImagePointers(false)} >
        <div className="h-[250px]">
          <img style={{ width: '100%', height: '100%', objectFit: "cover" }}
            src={"https://i.pinimg.com/736x/cb/2a/d0/cb2ad0bbc24149758f88797d22b54ab7.jpg"}
            alt={name} className="   " />
        </div>
        <div className="image-pointers  absolute bottom-2 left-1/2 h-20
        transform -translate-x-1/2 ">
          <div className="relative bottom-0 flex gap-1">
            {
              [0, 1, 2, 3].map((i) => (
                <div className=""
                  onMouseEnter={() => setActiveImage(i)}
                  key={i}
                >
                  <button className={`bg-gray-300 w-3 h-2  text-white rounded-full
                 hover:bg-obsidian transition-colors duration-300
                 
                ${showImagePointers ? 'opacity-100' : 'opacity-0'}
                ${showImagePointers && activeImage === i ? 'bg-obsidian' : ''}
                `}
                  >
                  </button>
                </div>
              ))
            }
          </div>
        </div>
        <div className="absolute right-2  top-2 transform  flex items-center gap-1 text-white text-sm" >
          <div className="flex items-center gap-1  bg-blue-500 hover:bg-blue-600 py-1 px-2 rounded-full  transition duration-300
            cursor-pointer
          ">
            <Battery className=" w-4 h-4" />
            <span className="text-xs font-semibold text-white">{percentage}%</span>
          </div>
        </div>
      </div>

      <div className="properties p-2">
        <div className="properties flex mt-1 justify-between items-center  border-gray-300">
          <div className="flex  w-4/5 ">
            <span className="text-[20px]  text-obsidian font-bold   ">{price} ₼</span>
          </div>
          <div className="w-1/5 flex justify-end">
            <div className="  border-gray-300 p-1  hover:cursor-pointer hover:bg-gray-300 transition-colors duration-300 ">
              <Scale className="w-4 h-4 text-black-500 cursor-pointer" />
            </div>
            <div className="  border-gray-300 p-1 hover:cursor-pointer hover:bg-red-500 transition-colors duration-300 ">
              <Heart className="w-4 h-4 text-black-500 cursor-pointer" />
            </div>
          </div>
        </div>
        <h2 className="text-[17px] font-semibold mt-2 text-primary mb-2">
          {brand} {name}
        </h2>
        <div className="text-sm leading-5">
          <div className="flex items-center gap-1 flex-wrap">
            <span className="underline cursor-pointer hover:scale-95 " > {ram}/{storage}</span>
            <span className="underline cursor-pointer hover:scale-95" >{color}</span>
          </div>
          <div className="flex items-end">
            <span className="text-gray-500" > Bakı, Dünən 23:05 </span>
          </div>
        </div>
      </div>

    </div >
  )
}

