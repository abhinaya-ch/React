import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Phone, Mail, DollarSign } from 'lucide-react';
import { PROPERTIES } from '../data/properties';
import toast from 'react-hot-toast';

export default function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = PROPERTIES.find(p => p.id === id);

  if (!property) {
    return (
      <div className="pt-24 text-center">
        <h2 className="text-2xl text-gray-600">Property not found</h2>
      </div>
    );
  }

  const handleBuyNow = () => {
    navigate(`/checkout/${property.id}`);
  };

  const handleContactAgent = () => {
    toast.success('Agent will contact you shortly!');
  };

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Property Images */}
          <div className="space-y-4">
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
              <img
                src={property.imageUrl}
                alt={property.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                  <img
                    src={property.imageUrl}
                    alt={`${property.title} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Property Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{property.location}</span>
              </div>
            </div>

            <div className="flex items-center justify-between py-4 border-y border-gray-200">
              <div className="flex items-center">
                <DollarSign className="h-6 w-6 text-blue-600" />
                <span className="text-2xl font-bold text-blue-600">
                  ${property.price.toLocaleString()}
                </span>
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                {property.category}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-4 py-4">
              <div className="flex items-center">
                <Bed className="h-5 w-5 mr-2 text-gray-600" />
                <span>{property.beds} beds</span>
              </div>
              <div className="flex items-center">
                <Bath className="h-5 w-5 mr-2 text-gray-600" />
                <span>{property.baths} baths</span>
              </div>
              <div className="flex items-center">
                <Square className="h-5 w-5 mr-2 text-gray-600" />
                <span>{property.sqft} sqft</span>
              </div>
            </div>

            <div className="prose prose-blue">
              <h3 className="text-xl font-semibold mb-2">Description</h3>
              <p className="text-gray-600">{property.description}</p>
            </div>

            {/* Agent Information */}
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-4">Property Agent</h3>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Agent"
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <p className="font-semibold">John Doe</p>
                  <div className="flex space-x-4 text-sm text-gray-600">
                    <span className="flex items-center">
                      <Phone className="h-4 w-4 mr-1" />
                      (555) 123-4567
                    </span>
                    <span className="flex items-center">
                      <Mail className="h-4 w-4 mr-1" />
                      john@example.com
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleBuyNow}
                className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Buy Now
              </button>
              <button
                onClick={handleContactAgent}
                className="flex-1 border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition"
              >
                Contact Agent
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}