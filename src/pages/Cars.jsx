import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { carsData } from '../data/carsData';
import { Search, Filter } from 'lucide-react';

const Cars = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');

  // Get unique brands
  const brands = ['All', ...new Set(carsData.map((car) => car.brand))];

  // Filter cars based on search and brand
  const filteredCars = carsData.filter((car) => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrand === 'All' || car.brand === selectedBrand;
    return matchesSearch && matchesBrand;
  });

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-secondary mb-4">
            Browse Our Collection
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover your perfect vehicle from our extensive inventory
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by car name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Brand Filter */}
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none cursor-pointer bg-white"
              >
                {brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand === 'All' ? 'All Brands' : brand}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Cars Grid */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <Link key={car.id} to={`/car/${car.id}`}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover-lift group cursor-pointer">
                  {/* Car Image */}
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={`/src/assets/images/${car.mainImage}`}
                      alt={car.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Car Details */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-primary bg-primary bg-opacity-10 px-3 py-1 rounded-full">
                        {car.brand}
                      </span>
                      <span className="text-sm text-gray-500">{car.year}</span>
                    </div>
                    <h3 className="text-xl font-bold font-display text-secondary mb-2 group-hover:text-primary transition-colors">
                      {car.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{car.type}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">
                        {car.price}
                      </span>
                      <button className="text-primary font-semibold group-hover:translate-x-1 transition-transform">
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">No cars found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cars;