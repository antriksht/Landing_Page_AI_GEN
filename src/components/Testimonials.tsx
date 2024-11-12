import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    company: 'TechCorp',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    quote: 'Intelegencia transformed our digital presence. Our ROI increased by 300% within the first quarter.'
  },
  {
    name: 'Michael Chen',
    role: 'CEO',
    company: 'GrowthStart',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    quote: "The team's expertise in PPC and data analytics helped us scale our business beyond expectations."
  },
  {
    name: 'Emma Williams',
    role: 'E-commerce Manager',
    company: 'StyleHub',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    quote: 'Our conversion rates doubled after implementing their optimization strategies. Exceptional results!'
  }
];

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            See what our clients say about their experience with Intelegencia
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-8 relative"
          >
            <Quote className="w-12 h-12 text-purple-300 absolute -top-6 -left-6" />
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div>
                <p className="text-xl mb-4">{testimonials[current].quote}</p>
                <div>
                  <h4 className="font-semibold">{testimonials[current].name}</h4>
                  <p className="text-purple-200">
                    {testimonials[current].role} at {testimonials[current].company}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};