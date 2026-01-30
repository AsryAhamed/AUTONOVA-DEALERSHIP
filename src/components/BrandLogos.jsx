import React from 'react';
import { brands } from '../data/carsData';

const BrandLogos = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-secondary mb-4">
            Trusted Brands
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We partner with the world's leading automotive manufacturers
          </p>
        </div>

        {/* Logos Grid - 2 columns mobile, 3 columns tablet, 4 columns desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center p-6 md:p-8 bg-white rounded-xl shadow-md hover-lift cursor-pointer group transition-all duration-300"
            >
              <img
                src={`/images/${brand.logo}`}
                alt={brand.name}
                className="w-full h-16 md:h-20 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;