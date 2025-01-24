"use client"

import React, { useState } from 'react';
import Navbar from "@/components/user/Navbar";
import PhoneCard from "@/components/user/PhoneCard"; // Adjust the path as necessary
import Footer from '@/components/user/Footer';
import CategoryNavbar from '@/components/user/CategoryNavbar';
import PhoneFilter from '@/components/user/PhoneFilter';
import AuthPanel from '@/components/user/AuthPanel';
import Navbar3 from '@/components/user/Navbar3';
import QuickLinks2 from '@/components/user/QuickLinks';
const Home = () => {
  // Update the phones array to include additional properties
  const phones = [
    {
      name: "iPhone 12",
      brand: "Apple",
      ram: "4 GB",
      storage: "128 GB",
      color: "Qara",
      price: 1499,
      condition: "Yeni",
      publishedDate: "2023-05-15",
      imageUrl: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Galaxy S21",
      brand: "Samsung",
      ram: "8 GB",
      storage: "256 GB",
      color: "Mavi",
      price: 1699,
      condition: "Yeni",
      publishedDate: "2023-05-14",
      imageUrl: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Mi 11",
      brand: "Xiaomi",
      ram: "6 GB",
      storage: "128 GB",
      color: "Ağ",
      price: 999,
      condition: "Əla",
      publishedDate: "2023-05-13",
      imageUrl: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "P40 Pro",
      brand: "Huawei",
      ram: "8 GB",
      storage: "256 GB",
      color: "Qızılı",
      price: 1299,
      condition: "Yeni",
      publishedDate: "2023-05-12",
      imageUrl: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "iPhone SE",
      brand: "Apple",
      ram: "3 GB",
      storage: "64 GB",
      color: "Qırmızı",
      price: 799,
      condition: "Yaxşı",
      publishedDate: "2023-05-11",
      imageUrl: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Galaxy A52",
      brand: "Samsung",
      ram: "6 GB",
      storage: "128 GB",
      color: "Qara",
      price: 599,
      condition: "Yeni",
      publishedDate: "2023-05-10",
      imageUrl: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Redmi Note 10",
      brand: "Xiaomi",
      ram: "4 GB",
      storage: "64 GB",
      color: "Yaşıl",
      price: 399,
      condition: "Əla",
      publishedDate: "2023-05-09",
      imageUrl: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Nova 7i",
      brand: "Huawei",
      ram: "8 GB",
      storage: "128 GB",
      color: "Bənövşəyi",
      price: 549,
      condition: "Yeni",
      publishedDate: "2023-05-08",
      // imageUrl: "/placeholder.svg?height=300&width=300",
    },
  ]

  const brands = [
    {
      name: 'Apple',
      logo: 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202305010410',
    },
    {
      name: 'Samsung',
      logo: 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202305010410',

    },
    {
      name: 'Xiaomi',
      logo: 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202305010410',

    },
    {
      name: 'Huawei',
      logo: 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202305010410',

    },
    {
      name: 'OnePlus',
      logo: 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202305010410',
    },
  ];


  const [isWarningVisible, setIsWarningVisible] = useState(true);

  return (
    <div>
      <CategoryNavbar />
      <div className="container mx-auto mt-8">

        {isWarningVisible && (
          <div className="warning-for-upfront bg-yellow-200 border-l-4 border-yellow-600 text-yellow-800 p-4 my-4 rounded-lg shadow-md relative">
            <button
              className="absolute top-2 right-2 text-yellow-800 hover:text-yellow-600 transition-colors duration-300"
              onClick={() => setIsWarningVisible(false)}
            >
              &times; {/* Close icon */}
            </button>
            <h2 className="font-bold text-lg">Diqqət!</h2>
            <p className="mt-1">
              Zəhmət olmasa, öncədən ödəniş tələb edən insanlardan ehtiyatlı olun.
              Bu cür tələblərə cavab verməyin.
              Hər zaman satıcılarla görüşdükdən sonra alış-veriş etməyə çalışın.
            </p>
          </div>
        )}

        <QuickLinks2/>


        {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-8">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center justify-center h-24 bg-gray-100 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-2"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-10 w-10 object-contain" // Smaller logo size
              />
            </div>
          ))}
        </div> */}


        <Navbar3 />


        {/* <AuthPanel /> */}

        <div className='flex gap-2 items-start'>
          <div className='w-[250px]'>
            <PhoneFilter />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {phones.map((phone, index) => (
              <PhoneCard key={index} {...phone} />
            ))}
          </div>
        </div>

      </div>
      {/* <PhoneFilter /> */}
    </div >
  );
};

export default Home;