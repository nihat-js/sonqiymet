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
      imageUrl: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div>
      <CategoryNavbar />
      <div className="container mx-auto mt-8" style={{ maxWidth: '1200px' }}>
        <Navbar3 />
        {/* <AuthPanel /> */}
        <h1 className="text-center text-2xl font-bold mt-4">Available Phones</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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