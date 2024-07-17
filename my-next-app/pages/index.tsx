"use client";

import React from 'react';
import { useRouter } from 'next/router';

const HomePage: React.FC = () => {
  const router = useRouter();

  const handleSignUpClick = () => {
    router.push('/signup');
  };

  const handleMyAccountClick = () => {
    router.push('/myaccount');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 overflow-auto">
      <header className="w-full bg-white shadow-md">
        <div className="container mx-auto flex flex-wrap justify-between items-center py-4 px-6">
          <div className="text-2xl font-bold text-black">One Stop Service</div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <div className="flex items-center border border-gray-300 rounded px-4 py-2">
              <span className="text-gray-700">Margao, Goa</span>
            </div>
            <div className="flex items-center border border-gray-300 rounded px-4 py-2">
              <input type="text" placeholder="Search for 'Kitchen'" className="outline-none" />
            </div>
            <button
              onClick={handleMyAccountClick}
              className="border border-gray-300 text-gray-700 px-4 py-2 rounded transform transition-transform duration-300 hover:scale-105 hover:bg-blue-100"
            >
              My Account
            </button>
            <button
              onClick={handleSignUpClick}
              className="border border-gray-300 text-gray-700 px-4 py-2 rounded transform transition-transform duration-300 hover:scale-105 hover:bg-blue-100"
            >
              Sign Up
            </button>
          </div>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center w-full flex-1 text-center bg-white">
        <h1 className="text-4xl font-bold mt-8">Home services at your doorstep</h1>
        <div className="flex flex-col md:flex-row mt-8 w-full max-w-6xl">
          <div className="flex-1 p-4">
            <h2 className="text-2xl font-bold mb-4">What are you looking for?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-100 p-4 rounded shadow">
                <img src="/women massage.jpg" alt="Women's Salon & Spa" className="w-full h-32 object-cover rounded mb-2 transform transition-transform duration-300 hover:scale-105" />
                <p className="font-bold">Women's Salon & Spa</p>
              </div>
              <div className="bg-gray-100 p-4 rounded shadow">
                <img src="/mens massage.jpg" alt="Men's Salon & Massage" className="w-full h-32 object-cover rounded mb-2 transform transition-transform duration-300 hover:scale-105" />
                <p className="font-bold">Men's Salon & Massage</p>
              </div>
              <div className="bg-gray-100 p-4 rounded shadow">
                <img src="/appliance repair.jpg" alt="AC & Appliance Repair" className="w-full h-32 object-cover rounded mb-2 transform transition-transform duration-300 hover:scale-105" />
                <p className="font-bold">AC & Appliance Repair</p>
              </div>
              <div className="bg-gray-100 p-4 rounded shadow">
                <img src="/pest control.jpg" alt="Cleaning & Pest Control" className="w-full h-32 object-cover rounded mb-2 transform transition-transform duration-300 hover:scale-105" />
                <p className="font-bold">Cleaning & Pest Control</p>
              </div>
              <div className="bg-gray-100 p-4 rounded shadow">
                <img src="/bathroom cleaning.jpg" alt="Weekly Bathroom Cleaning" className="w-full h-32 object-cover rounded mb-2 transform transition-transform duration-300 hover:scale-105" />
                <p className="font-bold">Weekly Bathroom Cleaning</p>
              </div>
              <div className="bg-gray-100 p-4 rounded shadow">
                <img src="/carpenter.jpg" alt="Electrician, Plumber & Carpenter" className="w-full h-32 object-cover rounded mb-2 transform transition-transform duration-300 hover:scale-105" />
                <p className="font-bold">Electrician, Plumber & Carpenter</p>
              </div>
            </div>
          </div>
          <div className="flex-1 p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <img src="/service 1.jpg" alt="Service 1" className="w-full h-64 object-cover rounded shadow" />
              <img src="/service 2.jpg" alt="Service 2" className="w-full h-64 object-cover rounded shadow" />
              <img src="/service 3.jpg" alt="Service 3" className="w-full h-64 object-cover rounded shadow" />
              <img src="/carpenter.jpg" alt="Service 4" className="w-full h-64 object-cover rounded shadow" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full flex-1 text-center bg-white mt-8">
          <div className="flex space-x-8">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">4.8</span>
              <span className="text-gray-500">Service Rating</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold">5M+</span>
              <span className="text-gray-500">Customers Globally</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-gray-100 p-4 rounded shadow">
              <img src="/service 1.jpg" alt="Service 1" className="w-full h-32 object-cover rounded mb-2" />
              <p className="font-bold">Save on electricity bills with power saver AC service</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded transform transition-transform duration-300 hover:scale-105">Book now</button>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow">
              <img src="/service 2.jpg" alt="Service 2" className="w-full h-32 object-cover rounded mb-2" />
              <p className="font-bold">Shine your bathroom deserves</p>
              <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded transform transition-transform duration-300 hover:scale-105">Book now</button>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow">
              <img src="/service 3.jpg" alt="Service 3" className="w-full h-32 object-cover rounded mb-2" />
              <p className="font-bold">Galti reh gayi toh painting free</p>
              <button className="mt-2 bg-gray-500 text-white px-4 py-2 rounded transform transition-transform duration-300 hover:scale-105">Book now</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;