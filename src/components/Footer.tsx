import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <button
            onClick={scrollToTop}
            className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center gap-2 hover:bg-gray-100 transition-colors"
          >
            Get Started Now
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </motion.div>

        <div className="flex justify-center gap-6 mb-12">
          {[
            { Icon: Facebook, href: '#' },
            { Icon: Twitter, href: '#' },
            { Icon: Linkedin, href: '#' },
            { Icon: Instagram, href: '#' }
          ].map(({ Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.2 }}
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </div>

        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Intelegencia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};