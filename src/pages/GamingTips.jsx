import React from 'react';
import { motion } from 'framer-motion'; 
import { FaGamepad, FaHeadphones, FaClipboardList, FaRocket } from 'react-icons/fa'; // Import icons

const GamingTips = () => {
  const tips = [
    { 
      id: 1, 
      title: 'Master Your Controls', 
      content: 'Customize your game controls for a personalized experience.',
      icon: <FaGamepad className="text-4xl text-gray-800 mb-4" />
    },
    { 
      id: 2, 
      title: 'Level Up Faster', 
      content: 'Focus on completing missions to earn more XP and level up quickly.',
      icon: <FaRocket className="text-4xl text-gray-800 mb-4" />
    },
    { 
      id: 3, 
      title: 'Use Headphones for Sound', 
      content: 'Immersive sound can give you an edge in combat games.',
      icon: <FaHeadphones className="text-4xl text-gray-800 mb-4" />
    },
    { 
      id: 4, 
      title: 'Manage Inventory Efficiently', 
      content: 'Keep only essential items in your inventory to avoid clutter.',
      icon: <FaClipboardList className="text-4xl text-gray-800 mb-4" />
    },
    // Adding two more tips
    { 
      id: 5, 
      title: 'Stay Updated on Patches', 
      content: 'Keep track of game patches to stay ahead of any changes that might affect your gameplay.',
      icon: <FaRocket className="text-4xl text-gray-800 mb-4" />
    },
    { 
      id: 6, 
      title: 'Join a Gaming Community', 
      content: 'Find a group of like-minded gamers to share tips, tricks, and experiences.',
      icon: <FaGamepad className="text-4xl text-gray-800 mb-4" />
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r bg-gray-500 mb-8 rounded-xl">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-extrabold text-white mb-8">Gaming Tips & Tutorials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip) => (
            <motion.div
              key={tip.id}
              className="card shadow-xl bg-white rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-6">
                {tip.icon} {/* Render the icon */}
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{tip.title}</h3>
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
