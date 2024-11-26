import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PROPERTIES } from '../data/properties';
import { CreditCard, Building, User } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Checkout() {
  const { propertyId } = useParams();
  const navigate = useNavigate();
  const property = PROPERTIES.find(p => p.id === propertyId);
  const [step, setStep] = useState(1);

  if (!property) {
    return (
      <div className="pt-24 text-center">
        <h2 className="text-2xl text-gray-600">Property not found</h2>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      toast.success('Payment successful! Welcome to your new home!');
      navigate('/');
    }
  };

  return (
    <div className="pt-24 pb-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Steps */}
        <div className="flex justify-between mb-8">
          {[
            { icon: User, label: 'Personal Info' },
            { icon: Building, label: 'Property Details' },
            { icon: CreditCard, label: 'Payment' },
          ].map((s, i) => (
            <div
              key={i}
              className={`flex flex-col items-center ${
                i + 1 <= step ? 'text-blue-600' : 'text-gray-400'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                  i + 1 <= step ? 'bg-blue-100' : 'bg-gray-100'
                }`}
              >
                <s.icon className="w-6 h-6" />
              </div>
              <span className="text-sm">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <>
                <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    className="px-4 py-2 border rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    required
                    className="px-4 py-2 border rounded-lg"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  required
                  className="w-full px-4 py-2 border rounded-lg"
                />
              </>
            )}

            {step === 2 && (
              <>
                <h2 className="text-2xl font-bold mb-6">Property Details</h2>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold">{property.title}</h3>
                  <p className="text-gray-600">{property.location}</p>
                  <p className="text-blue-600 font-bold mt-2">
                    ${property.price.toLocaleString()}
                  </p>
                </div>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Address Line 1"
                    required
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Address Line 2"
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="City"
                      required
                      className="px-4 py-2 border rounded-lg"
                    />
                    <input
                      type="text"
                      placeholder="ZIP Code"
                      required
                      className="px-4 py-2 border rounded-lg"
                    />
                  </div>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <h2 className="text-2xl font-bold mb-6">Payment Information</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Card Number"
                    required
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                  <div className="grid grid-cols-3 gap-4">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      required
                      className="px-4 py-2 border rounded-lg"
                    />
                    <input
                      type="text"
                      placeholder="CVC"
                      required
                      className="px-4 py-2 border rounded-lg"
                    />
                    <input
                      type="text"
                      placeholder="ZIP Code"
                      required
                      className="px-4 py-2 border rounded-lg"
                    />
                  </div>
                </div>
              </>
            )}

            <div className="flex justify-between pt-6">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition ml-auto"
              >
                {step === 3 ? 'Complete Purchase' : 'Continue'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}