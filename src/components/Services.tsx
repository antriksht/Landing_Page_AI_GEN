import { motion } from 'framer-motion';
import { Search, BarChart, Share2, Target } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'PPC Campaigns',
    description: 'Strategic paid advertising campaigns that drive qualified traffic and maximize ROI.'
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Comprehensive SEO strategies to improve your organic visibility and rankings.'
  },
  {
    icon: BarChart,
    title: 'Conversion Optimization',
    description: 'Data-driven CRO techniques to turn visitors into valuable customers.'
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'Engaging social media strategies that build brand awareness and community.'
  }
];

export const Services = () => {
  return (
    <section className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital marketing solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};