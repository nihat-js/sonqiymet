import React from 'react';
import Navbar from "@/components/user/Navbar";
import Footer from "@/components/user/Footer";
import PhoneCard from "@/components/user/PhoneCard"; // Adjust the path as necessary

const Listings = () => {
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
            <h1 className="text-center text-2xl font-bold mt-4">Available Phones</h1>
            <div className="flex flex-wrap justify-center">
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

export default Listings;