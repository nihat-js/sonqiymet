import React from 'react';
import Navbar from "@/components/user/Navbar";
import PhoneCard from "@/components/user/PhoneCard"; // Adjust the path as necessary
import Footer from '@/components/user/Footer';
import CategoryNavbar from '@/components/user/CategoryNavbar';
import PhoneFilter from '@/components/user/PhoneFilter';
import AuthPanel from '@/components/user/AuthPanel';
const Home = () => {
  const phones = [
    {
      image: 'path/to/image1.jpg',
      name: 'iPhone 12',
      price: '$699',
      description: 'A great phone with amazing features.',
    },
    {
      image: 'path/to/image2.jpg',
      name: 'Samsung Galaxy S21',
      price: '$799',
      description: 'A powerful phone with a stunning display.',
    },
    // Add more phone objects as needed
  ];

  return (
    <div>
      <Navbar />
      <CategoryNavbar />
      <PhoneFilter/>
      <AuthPanel/>
      <h1 className="text-center text-2xl font-bold mt-4">Available Phones</h1>
      <div className="flex flex-wrap gap-5 justify-center">
        {phones.map((phone, index) => (
          <PhoneCard
            key={index}
            image={phone.image}
            name={phone.name}
            price={phone.price}
            description={phone.description}
          />
        ))}

      </div>
      <Footer />
    </div>
  );
};

export default Home;