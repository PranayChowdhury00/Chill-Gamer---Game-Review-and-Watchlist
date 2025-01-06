import React from 'react';
import { motion } from 'framer-motion'; 
import { FaTag, FaTrophy, FaStar } from 'react-icons/fa'; // Icons for promotional offers

const PromotionalOffers = () => {
  const offers = [
    {
      id: 1,
      title: 'Limited Time Offer!',
      description: 'Get 30% off on all gaming accessories. Hurry, offer ends soon!',
      icon: <FaTag className="text-5xl text-green-600 mb-4" />,
      offerDetails: 'Use code GAMER30 at checkout.',
      bgClass: 'bg-gradient-to-r from-green-500 to-teal-500'
    },
    {
      id: 2,
      title: 'Exclusive Bundle Deal!',
      description: 'Buy one gaming headset, get 1 month free premium subscription.',
      icon: <FaTrophy className="text-5xl text-yellow-500 mb-4" />,
      offerDetails: 'Limited stock available. Grab yours today!',
      bgClass: 'bg-gradient-to-r from-yellow-500 to-orange-600'
    },
    {
      id: 3,
      title: 'Double Reward Points!',
      description: 'Earn double reward points on every purchase this weekend.',
      icon: <FaStar className="text-5xl text-purple-600 mb-4" />,
      offerDetails: 'Points can be redeemed for future discounts.',
      bgClass: 'bg-gradient-to-r from-purple-500 to-indigo-600'
    }
  ];

  return (
    <section className="mb-8 ">
        <div className=" text-center">
            <h1 className='text-3xl font-bold'>PromotionalOffers</h1>
        </div>
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-extrabold text-white mb-8">Special Promotional Offers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <motion.div
              key={offer.id}
              className={`card shadow-xl ${offer.bgClass} text-white rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-6">
                {offer.icon} {/* Render the icon */}
                <h3 className="text-2xl font-semibold mb-4">{offer.title}</h3>
                <p className="text-lg mb-4">{offer.description}</p>
                <p className="font-bold">{offer.offerDetails}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionalOffers;
