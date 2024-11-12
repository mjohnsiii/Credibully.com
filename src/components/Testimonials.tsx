import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "Thanks to CrediBully's DIY course, I raised my credit score by 150 points in just 6 months!",
    author: "Sarah Johnson",
    role: "Small Business Owner",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    content: "The credit mastery e-book changed my understanding of credit. Now I'm confidently building my financial future.",
    author: "Michael Chen",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  },
  {
    content: "The worksheets and templates made tracking my credit repair journey so much easier. Highly recommended!",
    author: "Lisa Rodriguez",
    role: "Healthcare Professional",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  }
];

export default function Testimonials() {
  return (
    <div className="bg-brand-cream py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-brand-gray sm:text-4xl">
            What Our Students Say
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Real results from real people
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2">
              <div className="p-8">
                <div className="relative h-12">
                  <Star className="absolute h-12 w-12 text-brand-secondary opacity-50" />
                </div>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {testimonial.content}
                </p>
                <div className="mt-6 flex items-center">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={testimonial.image}
                    alt={testimonial.author}
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-brand-gray">{testimonial.author}</h4>
                    <p className="text-gray-500">{testimonial.role}</p>
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