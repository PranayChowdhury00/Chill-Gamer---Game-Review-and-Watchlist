
import React from 'react';
import { motion } from 'framer-motion'; 

const UpcomingReleases = () => {
  const games = [
    { id: 1, name: 'Game 1', releaseDate: 'March 25, 2024', imgUrl: 'https://i.ibb.co.com/2dvpCQF/pubg.jpg' },
    { id: 2, name: 'Game 2', releaseDate: 'April 10, 2024', imgUrl: 'https://i.ibb.co.com/M97sG4k/coc.jpg' },
    { id: 3, name: 'Game 3', releaseDate: 'May 5, 2024', imgUrl: 'https://i.ibb.co.com/fMC1rCK/combuat.jpg' },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Upcoming Game Releases</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => (
            <motion.div
              key={game.id}
              className="card shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={game.imgUrl}
                alt={game.name}
                className="w-full h-48 object-cover rounded-t-md"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{game.name}</h3>
                <p className="text-gray-600">Release Date: {game.releaseDate}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingReleases;
