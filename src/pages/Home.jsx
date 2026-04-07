import React from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import ServicesNew from '../components/sections/ServicesNew';
import StatBar from '../components/sections/StatBar';
import SmoothScroll from '../components/layout/SmoothScroll';

const Home = () => {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-white">
        <Header />
        <Hero />
        <StatBar />
        <Services />
        <ServicesNew />
        {/* Future sections: Featured Work, Contact */}
      </main>
    </SmoothScroll>
  );
};

export default Home;
