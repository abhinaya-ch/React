import React from 'react';
import { Search } from 'lucide-react';

interface PropertyFiltersProps {
  filters: {
    type: string;
    priceRange: string;
    location: string;
  };
  setFilters: React.Dispatch<React.SetStateAction<{
    type: string;
    priceRange: string;
    location: string;
  }>>;
}

export default function PropertyFilters({ filters, setFilters }: PropertyFiltersProps) {
  return (
    <div className="bg-white shadow-lg py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Location"
              value={filters.location}
              onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex-1">
            <select
              value={filters.type}
              onChange={(e) => setFilters(prev => ({ ...prev, type: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Property Type</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
            </select>
          </div>
          <div className="flex-1">
            <select
              value={filters.priceRange}
              onChange={(e) => setFilters(prev => ({ ...prev, priceRange: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Price Range</option>
              <option value="0-300000">Under $300,000</option>
              <option value="300000-600000">$300,000 - $600,000</option>
              <option value="600000-1000000">$600,000 - $1,000,000</option>
              <option value="1000000-999999999">$1,000,000+</option>
            </select>
          </div>
          <button
            onClick={() => setFilters({ type: '', priceRange: '', location: '' })}
            className="px-6 py-3 text-blue-600 hover:bg-blue-50 rounded-lg transition"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
}