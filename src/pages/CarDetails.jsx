import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { carsData } from '../data/carsData';
import { ArrowLeft, Check, Phone, Mail } from 'lucide-react';

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = carsData.find((c) => c.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState('exterior');

  if (!car) {
    return (
      <div className="pt-24 pb-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Car not found</h2>
        <button onClick={() => navigate('/cars')} className="btn-primary mt-4">
          Back to Cars
        </button>
      </div>
    );
  }

  const images = [
    { id: 'exterior', label: 'Exterior', src: car.exteriorImage },
    { id: 'interior', label: 'Interior', src: car.interiorImage },
  ];

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/cars')}
          className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Cars</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-4">
              <div className="aspect-[4/3]">
                <img
                src={`/images/${selectedImage === 'exterior' ? car.exteriorImage : car.interiorImage}`}
                  alt={`${car.name} - ${selectedImage}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-2 gap-4">
              {images.map((image) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(image.id)}
                  className={`relative bg-white rounded-xl shadow-md overflow-hidden border-2 transition-all ${
                    selectedImage === image.id
                      ? 'border-primary'
                      : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <div className="aspect-[4/3]">
                    <img
                      src={`/images/${image.src}`}
                      alt={`${car.name} - ${image.label}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                    <span className="text-white text-sm font-semibold">
                      {image.label}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Car Information */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {/* Brand Badge */}
              <div className="inline-block bg-primary bg-opacity-10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {car.brand}
              </div>

              {/* Car Name */}
              <h1 className="text-4xl font-bold font-display text-secondary mb-2">
                {car.name}
              </h1>

              {/* Type and Year */}
              <p className="text-lg text-gray-600 mb-6">
                {car.type} • {car.year}
              </p>

              {/* Price */}
              <div className="bg-gradient-to-r from-primary to-red-600 text-white rounded-xl p-6 mb-6">
                <p className="text-sm opacity-90 mb-1">Starting from</p>
                <p className="text-4xl font-bold">{car.price}</p>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-xl font-bold font-display text-secondary mb-3">
                  Description
                </h3>
                <p className="text-gray-600 leading-relaxed">{car.description}</p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold font-display text-secondary mb-4">
                  Key Features
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {car.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-2 text-gray-700"
                    >
                      <div className="bg-primary bg-opacity-10 rounded-full p-1">
                        <Check size={16} className="text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button className="btn-primary flex items-center justify-center space-x-2">
                  <Phone size={18} />
                  <span>Call Now</span>
                </button>
                <button className="btn-secondary flex items-center justify-center space-x-2">
                  <Mail size={18} />
                  <span>Email Us</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;