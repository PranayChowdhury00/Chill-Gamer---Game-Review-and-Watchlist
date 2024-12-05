
import React from 'react';
import { motion } from 'framer-motion'; 

const GamingTips = () => {
  const tips = [
    { id: 1, title: 'Master Your Controls', content: 'Customize your game controls for a personalized experience.' },
    { id: 2, title: 'Level Up Faster', content: 'Focus on completing missions to earn more XP and level up quickly.' },
    { id: 3, title: 'Use Headphones for Sound', content: 'Immersive sound can give you an edge in combat games.' },
    { id: 4, title: 'Manage Inventory Efficiently', content: 'Keep only essential items in your inventory to avoid clutter.' },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Gaming Tips & Tutorials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip) => (
            <motion.div
              key={tip.id}
              className="card shadow-lg bg-white rounded-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{tip.title}</h3>
                <p className="text-gray-600">{tip.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamingTips;
