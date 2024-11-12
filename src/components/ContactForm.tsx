import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ContactInfo {
  name: string;
  email: string;
  phone: string;
}

interface ContactFormProps {
  contactInfo: ContactInfo;
  onContactInfoChange: (info: ContactInfo) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function ContactForm({ contactInfo, onContactInfoChange, onSubmit }: ContactFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Full Name *
        </label>
        <input
          type="text"
          required
          value={contactInfo.name}
          onChange={(e) => onContactInfoChange({ ...contactInfo, name: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-all duration-200"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Email Address *
        </label>
        <input
          type="email"
          required
          value={contactInfo.email}
          onChange={(e) => onContactInfoChange({ ...contactInfo, email: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-all duration-200"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Phone Number (Optional)
        </label>
        <input
          type="tel"
          value={contactInfo.phone}
          onChange={(e) => onContactInfoChange({ ...contactInfo, phone: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 transition-all duration-200"
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
      >
        Submit <ArrowRight className="ml-2 h-5 w-5" />
      </button>
    </form>
  );
}