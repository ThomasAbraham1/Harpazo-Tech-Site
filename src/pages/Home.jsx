import React from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';

const Home = () => {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      {/* Future sections will go here */}
    </main>
  );
};

export default Home;
