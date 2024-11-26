import React, { useState } from 'react';
import { PROPERTIES } from '../data/properties';
import PropertyCard from '../components/PropertyCard';
import PropertyFilters from '../components/PropertyFilters';

export default function Rent() {
  const [filters, setFilters] = useState({
    type: '',
    priceRange: '',
    location: '',
  });

  // Simulate rental prices (70% of sale price annually)
  const rentalProperties = PROPERTIES.map(property => ({
    ...property,
    price: Math.round((property.price * 0.07) / 12), // Monthly rent
  }));

  const filteredProperties = rentalProperties.filter((property) => {
    if (filters.type && property.type !== filters.type) return false;
    if (filters.location && !property.location.toLowerCase().includes(filters.location.toLowerCase())) return false;
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      if (property.price < min || (max && property.price > max)) return false;
    }
    return true;
  });

  return (
    <div className="pt-16">
      <PropertyFilters filters={filters} setFilters={setFilters} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl text-gray-600">No properties match your criteria</h3>
          </div>
        )}
      </div>
    </div>
  );
}