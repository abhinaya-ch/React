import React from 'react';
import Hero from '../components/Hero';
import FeaturedProperties from '../components/FeaturedProperties';
import PropertyGrid from '../components/PropertyGrid';
import { PROPERTIES } from '../data/properties';

export default function Home() {
  const luxuryProperties = PROPERTIES.filter(p => p.category === 'luxury').slice(0, 3);
  const affordableProperties = PROPERTIES.filter(p => p.category === 'affordable').slice(0, 3);

  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedProperties />
      <PropertyGrid
        properties={luxuryProperties}
        title="Luxury Properties"
        description="Discover our exclusive collection of premium properties"
      />
      <PropertyGrid
        properties={affordableProperties}
        title="Affordable Homes"
        description="Find your perfect home within your budget"
      />
    </div>
  );
}