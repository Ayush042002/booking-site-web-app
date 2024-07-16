"use client";

import React from 'react';
import { useRouter } from 'next/router';

const HomePage = () => {
  const router = useRouter();

  const handleSignUpClick = () => {
    router.push('/signup');
  };

  const handleMyAccountClick = () => {
    router.push('/myaccount');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="w-full bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="text-4xl font-bold text-blue-600">Book-It</div>
          <nav className="flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-bold">Hotels</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-bold">Flights</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-bold">Car</a>
          </nav>
          <div className="flex space-x-4">
            <button
              onClick={handleMyAccountClick}
              className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition"
            >
              My Account
            </button>
            <button
              onClick={handleSignUpClick}
              className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition"
            >
              Sign Up
            </button>
          </div>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center bg-cover bg-center bg-blur" style={{ backgroundImage: "url('/bg1.jpg')" }}>
        <h1 className="text-4xl font-bold mb-8 text-center mt-8" style={{ color: 'white' }}>Explore the World</h1>
        <p className="text-white text-center mb-8 font-bold">The best holiday destinations to travel to in 2023</p>
      </main>
    </div>
  );
};

export default HomePage;