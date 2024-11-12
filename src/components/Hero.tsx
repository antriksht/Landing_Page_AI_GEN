import { motion } from 'framer-motion';
import { ArrowRight, Send } from 'lucide-react';
import { useState, useEffect } from 'react';

const titles = [
  "We Transform",
  "We Scale",
  "We Create",
  "We Optimize",
  "We Help"
];

export const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const text = titles[titleIndex];
    const speed = isDeleting ? 50 : 100;

    if (!isDeleting && displayText === text) {
      setTimeout(() => setIsDeleting(true), 1000);
      return;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(text.substring(0, isDeleting ? displayText.length - 1 : displayText.length + 1));
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 flex items-center">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80')] bg-cover bg-center" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                {displayText}
              </span>
              <span className="animate-blink">|</span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-purple-100"
            >
              Your Digital Marketing Success with Data-Driven Strategies
            </motion.p>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Get Your Free Strategy Session</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-gray-900 focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                  <option value="" className="text-gray-900">Select Budget Range</option>
                  <option value="<10k" className="text-gray-900">Less than $10,000</option>
                  <option value="10k-50k" className="text-gray-900">$10,000 - $50,000</option>
                  <option value="50k-100k" className="text-gray-900">$50,000 - $100,000</option>
                  <option value=">100k" className="text-gray-900">More than $100,000</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
              >
                Get Started Now
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};