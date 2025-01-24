import React from 'react';
import Navbar from "@/components/user/Navbar";
import PhoneCard from "@/components/user/PhoneCard"; // Adjust the path as necessary
import Footer from '@/components/user/Footer';
import CategoryNavbar from '@/components/user/CategoryNavbar';
import PhoneFilter from '@/components/user/PhoneFilter';
import AuthPanel from '@/components/user/AuthPanel';
import Navbar3 from '@/components/user/Navbar3';
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
      imageUrl: "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ]

  return (
    <div>
      <CategoryNavbar />
      <div className="container mx-auto mt-8" style={{ maxWidth: '1200px' }}>

        <div className="warning-for-upfront bg-yellow-200 border-l-4 border-yellow-600 text-yellow-800 p-4 my-4 rounded-lg shadow-md">
          <h2 className="font-bold text-lg">Diqqət!</h2>
          <p className="mt-1">
            Zəhmət olmasa, öncədən ödəniş tələb edən insanlardan ehtiyatlı olun.
            Bu cür tələblərə cavab verməyin.
            Hər zaman satıcılarla görüşdükdən sonra alış-veriş etməyə çalışın.
          </p>
        </div>


        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-8 gap-4 mt-8">
          <div className="flex items-center justify-center h-32 bg-gray-100 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src="https://upload.wikimedia.org/wikipedia/en/f/fa/Apple_logo_black.svg" alt="Apple" className="h-6 w-6" />
          </div>
          <div className="flex items-center justify-center h-32 bg-gray-100 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" alt="Samsung" className="h-6 w-6" />
          </div>
          <div className="flex items-center justify-center h-32 bg-gray-100 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/24/Xiaomi_logo.svg" alt="Xiaomi" className="h-6 w-6" />
          </div>
          <div className="flex items-center justify-center h-32 bg-gray-100 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Huawei_logo.svg" alt="Huawei" className="h-6 w-6" />
          </div>
          <div className="flex items-center justify-center h-32 bg-gray-100 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/OnePlus_Logo.svg" alt="OnePlus" className="h-6 w-6" />
          </div>
        </div>
        <Navbar3 />


        {/* <AuthPanel /> */}
        <h1 className="text-center text-2xl font-bold mt-4">Available Phones</h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {phones.map((phone, index) => (
            <PhoneCard key={index} {...phone} />
          ))}
        </div>
      </div>
      {/* <PhoneFilter /> */}
    </div >
  );
};

export default Home;