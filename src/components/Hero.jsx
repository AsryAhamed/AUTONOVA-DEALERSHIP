import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/src/assets/images/Hero.jpg')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-display mb-4 sm:mb-6 animate-slide-up leading-tight">
          Find Your Dream Car
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-2xl mx-auto animate-slide-up px-4" style={{ animationDelay: '0.2s' }}>
          Premium vehicles, unbeatable prices, and exceptional service at AutoNova
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up px-4" style={{ animationDelay: '0.4s' }}>
          <Link to="/cars" className="w-full sm:w-auto">
            <button className="btn-primary flex items-center justify-center space-x-2 w-full sm:w-auto">
              <span>Explore Cars</span>
              <ChevronRight size={20} />
            </button>
          </Link>
          <Link to="/contact" className="w-full sm:w-auto">
            <button className="btn-secondary w-full sm:w-auto">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;