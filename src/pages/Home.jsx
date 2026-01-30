import React from 'react';
import Hero from '../components/Hero';
import FeaturedCars from '../components/FeaturedCars';
import BrandLogos from '../components/BrandLogos';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero />

      {/* Featured Cars Section */}
      <FeaturedCars />

      {/* Brand Logos Section */}
      <BrandLogos />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
};

export default Home;