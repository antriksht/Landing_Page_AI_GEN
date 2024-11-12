import { motion } from 'framer-motion';
import { TrendingUp, Target, Wrench, Headphones } from 'lucide-react';

const features = [
  {
    icon: TrendingUp,
    title: 'Proven ROI Strategies',
    description: 'Data-driven approaches that deliver measurable results and maximize your marketing investment.'
  },
  {
    icon: Target,
    title: 'Campaign Management',
    description: 'Expert management of your digital campaigns across all platforms for optimal performance.'
  },
  {
    icon: Wrench,
    title: 'Advanced Tools',
    description: 'Cutting-edge marketing tools and technologies to stay ahead of the competition.'
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: '24/7 support from our experienced team of digital marketing professionals.'
  }
];

export const About = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Intelegencia?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We combine data analytics with creative strategies to deliver exceptional results for our clients.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-xl bg-gradient-to-br from-white to-purple-50 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};