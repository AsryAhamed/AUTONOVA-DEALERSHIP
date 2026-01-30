import React from 'react';
import { featuredCars } from '../data/carsData';

const FeaturedCars = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-secondary mb-4">
            Featured Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked selection of premium vehicles from world-renowned brands
          </p>
        </div>

        {/* Featured Cars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map((car) => (
            <div
              key={car.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover-lift cursor-pointer"
            >
              {/* Car Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={`/images/${car.image}`} 
                  alt={car.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <h3 className="text-white text-2xl font-bold font-display">
                  {car.name}
                </h3>
              </div>

              {/* Car Name (Default State) */}
              <div className="absolute bottom-0 left-0 right-0 bg-white p-4 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-xl font-bold font-display text-secondary text-center">
                  {car.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;