import React from 'react';
import { FaStar, FaGamepad } from 'react-icons/fa';
import { motion } from 'framer-motion';

const TopGames = () => {
  const games = [
    { 
      id: 1, 
      title: 'The Legend of Zelda: Tears of the Kingdom', 
      genre: 'Action-Adventure', 
      description: 'A groundbreaking action-adventure game where you explore a vast open world and solve puzzles.', 
      rating: 4.9, 
      image: 'https://c4.wallpaperflare.com/wallpaper/77/826/570/the-legend-of-zelda-the-legend-of-zelda-tears-of-the-kingdom-nintendo-nintendo-switch-link-hd-wallpaper-preview.jpg'
    },
    { 
      id: 2, 
      title: 'Minecraft', 
      genre: 'Sandbox', 
      description: 'A game where players can build and explore infinite worlds made up of blocks.', 
      rating: 4.8, 
      image: 'https://i.pinimg.com/736x/cb/d3/41/cbd34142d5cc761babe03d573d366fc6.jpg'
    },
    { 
      id: 3, 
      title: 'Cyberpunk 2077', 
      genre: 'RPG', 
      description: 'A futuristic open-world RPG set in the dystopian Night City.', 
      rating: 4.5, 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE7fnbR3L6e470dg1EQe-civYLKxpYPwgfWg&s'
    },
    { 
      id: 4, 
      title: 'Fortnite', 
      genre: 'Battle Royale', 
      description: 'A multiplayer game that combines construction and combat in a battle royale format.', 
      rating: 4.7, 
      image: 'https://m.media-amazon.com/images/M/MV5BMTZlMmIxM2EtN2Y4Zi00M2ZhLTk3NzgtNjJmZTU0MTQ3YjcwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'
    }
  ];

  return (
    <section className="py-16 mb-8 rounded-xl bg-gray-500">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-extrabold text-white mb-8">Top Games of 2025</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {games.map((game) => (
            <motion.div
              key={game.id}
              className="card shadow-xl bg-white rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img src={game.image} alt={game.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{game.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{game.genre}</p>
                <p className="text-gray-500 mb-4">{game.description}</p>
                <div className="flex items-center">
                  <FaStar className="text-yellow-500" />
                  <span className="ml-2 text-gray-800">{game.rating} / 5</span>
                </div>
                <a href="#" className="text-blue-500 mt-4 block">View Details</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopGames;
