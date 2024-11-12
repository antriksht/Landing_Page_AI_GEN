import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="py-20 bg-white" id="contact-form">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Your Free Strategy Session</h2>
            <p className="text-xl text-gray-600">
              Take the first step towards transforming your digital presence
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <label className="block text-gray-700 font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <label className="block text-gray-700 font-medium mb-2">Annual Marketing Budget</label>
              <select
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Select Budget Range</option>
                <option value="<10k">Less than $10,000</option>
                <option value="10k-50k">$10,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value=">100k">More than $100,000</option>
                <option value="custom">Custom Budget</option>
              </select>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-lg transition-shadow"
            >
              Submit & Get Your Free Strategy Session
              <Send className="w-5 h-5" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};