import { motion } from 'framer-motion';

const clients = [
  {
    logo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80',
    name: 'TechCorp',
    achievement: '300% ROI Increase',
    industry: 'Technology'
  },
  {
    logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80',
    name: 'GrowthStart',
    achievement: '250% Traffic Growth',
    industry: 'E-commerce'
  },
  {
    logo: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&q=80',
    name: 'StyleHub',
    achievement: '200% Conversion Rate',
    industry: 'Fashion'
  },
  {
    logo: 'https://images.unsplash.com/photo-1622937083436-ab7c7e5a7aaa?auto=format&fit=crop&q=80',
    name: 'HealthPlus',
    achievement: '400% Lead Generation',
    industry: 'Healthcare'
  },
  {
    logo: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80',
    name: 'EcoSmart',
    achievement: '150% Market Growth',
    industry: 'Sustainability'
  },
  {
    logo: 'https://images.unsplash.com/photo-1579389083395-4507e98b5b67?auto=format&fit=crop&q=80',
    name: 'FoodDelight',
    achievement: '350% Online Orders',
    industry: 'Food & Beverage'
  }
];

export const Clients = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Happy and Successful Clients</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our growing list of success stories and industry leaders
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{client.name}</h3>
                <p className="text-purple-600 font-semibold mb-2">{client.achievement}</p>
                <p className="text-gray-600">{client.industry}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};