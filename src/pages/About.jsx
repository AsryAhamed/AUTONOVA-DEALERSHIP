import React from 'react';
import { Award, Users, Target, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, label: 'Happy Customers', value: '10,000+' },
    { icon: Award, label: 'Years Experience', value: '15+' },
    { icon: Target, label: 'Cars Sold', value: '25,000+' },
    { icon: Heart, label: 'Customer Satisfaction', value: '98%' },
  ];

  return (
    <div className="pt-24 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-secondary mb-4">
            About AutoNova
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in finding the perfect vehicle for over 15 years
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16 rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="/images/Entrance.jpg"
            alt="AutoNova Entrance"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover-lift"
            >
              <div className="inline-block bg-primary bg-opacity-10 rounded-full p-4 mb-4">
                <stat.icon className="text-primary" size={32} />
              </div>
              <p className="text-3xl font-bold text-secondary mb-2">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold font-display text-secondary mb-6">
              Our Story
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Founded in 2008, AutoNova has been at the forefront of providing quality
              vehicles and exceptional customer service. What started as a small family
              business has grown into one of the most trusted car dealerships in the region.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our mission is simple: to help every customer find their perfect vehicle
              while providing transparent pricing, comprehensive warranties, and
              outstanding after-sales support.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe in building long-term relationships with our customers, which is
              why over 70% of our business comes from referrals and repeat customers.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/images/Cars Lined Up.jpg"
              alt="Cars Lined Up"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/Team.jpg"
                alt="AutoNova Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold font-display text-secondary mb-6">
                Meet Our Team
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our team of experienced professionals is dedicated to making your car
                buying experience smooth and enjoyable. From sales consultants to service
                technicians, every member of the AutoNova family is committed to
                excellence.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We invest heavily in training and development to ensure our team stays
                up-to-date with the latest automotive technologies and industry best
                practices.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-primary bg-opacity-10 rounded-full p-2 mt-1">
                    <Award className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">Certified Experts</h4>
                    <p className="text-gray-600 text-sm">
                      All our staff are professionally trained and certified
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-primary bg-opacity-10 rounded-full p-2 mt-1">
                    <Heart className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary">Customer First</h4>
                    <p className="text-gray-600 text-sm">
                      Your satisfaction is our top priority
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;