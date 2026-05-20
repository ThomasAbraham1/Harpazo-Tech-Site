import React from 'react';
import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import ServicesNew from '../components/sections/ServicesNew';
import StatBar from '../components/sections/StatBar';
import SmoothScroll from '../components/layout/SmoothScroll';
import StaggeredGrid from '../components/sections/StaggeredGrid';
import ClientsAndTestimonials from '../components/sections/ClientsAndTestimonials';
import Contact from '../components/sections/Contact';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <SmoothScroll>
      <main>
        <Header />
        <Hero />
        <StatBar />
        <Services />
        {/* <ServicesNew /> */}
        <StaggeredGrid />
        <ClientsAndTestimonials />
        <Contact />
      </main>
      <Footer />
    </SmoothScroll>
  );
};

export default Home;
