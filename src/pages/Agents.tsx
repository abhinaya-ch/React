import React from 'react';
import { Phone, Mail, Star, MapPin } from 'lucide-react';

const AGENTS = [
  {
    id: '1',
    name: 'John Doe',
    title: 'Senior Real Estate Agent',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    phone: '(555) 123-4567',
    email: 'john@example.com',
    location: 'Beverly Hills, CA',
    specialization: 'Luxury Properties',
    experience: '15+ years',
    rating: 4.9,
    reviews: 127,
  },
  {
    id: '2',
    name: 'Jane Smith',
    title: 'Property Investment Specialist',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    phone: '(555) 234-5678',
    email: 'jane@example.com',
    location: 'Manhattan, NY',
    specialization: 'Commercial Properties',
    experience: '12+ years',
    rating: 4.8,
    reviews: 98,
  },
  {
    id: '3',
    name: 'Michael Johnson',
    title: 'Residential Property Expert',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    phone: '(555) 345-6789',
    email: 'michael@example.com',
    location: 'Miami Beach, FL',
    specialization: 'Beachfront Properties',
    experience: '10+ years',
    rating: 4.7,
    reviews: 84,
  },
];

export default function Agents() {
  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Expert Agents</h1>
          <p className="text-lg text-gray-600">Meet our team of experienced real estate professionals</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AGENTS.map((agent) => (
            <div key={agent.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <img
                    src={agent.image}
                    alt={agent.name}
                    className="w-20 h-20 rounded-full"
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-900">{agent.name}</h3>
                    <p className="text-gray-600">{agent.title}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{agent.location}</span>
                  </div>

                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-1" />
                    <span className="font-semibold">{agent.rating}</span>
                    <span className="text-gray-600 ml-1">({agent.reviews} reviews)</span>
                  </div>

                  <div>
                    <p className="text-gray-600">Specialization:</p>
                    <p className="font-semibold">{agent.specialization}</p>
                  </div>

                  <div>
                    <p className="text-gray-600">Experience:</p>
                    <p className="font-semibold">{agent.experience}</p>
                  </div>

                  <div className="pt-4 space-y-2">
                    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition flex items-center justify-center">
                      <Phone className="h-4 w-4 mr-2" />
                      {agent.phone}
                    </button>
                    <button className="w-full border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition flex items-center justify-center">
                      <Mail className="h-4 w-4 mr-2" />
                      {agent.email}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}