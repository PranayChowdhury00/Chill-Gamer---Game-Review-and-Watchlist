import React from "react";
import { motion } from "framer-motion";

const UpcomingReleases = () => {
  const games = [
    {
      id: 1,
      name: "Game 1",
      releaseDate: "March 25, 2024",
      imgUrl: "https://i.ibb.co/2dvpCQF/pubg.jpg",
    },
    {
      id: 2,
      name: "Game 2",
      releaseDate: "April 10, 2024",
      imgUrl: "https://i.ibb.co/M97sG4k/coc.jpg",
    },
    {
      id: 3,
      name: "Game 3",
      releaseDate: "May 5, 2024",
      imgUrl: "https://i.ibb.co/fMC1rCK/combuat.jpg",
    },
  ];

  return (
    <section className="mb-8">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-extrabold text-white mb-8">
          Upcoming Game Releases
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {games.map((game) => (
            <div className=" ">
              <motion.div
                key={game.id}
                className="bg-gray-500 shadow-xl  p-5 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={game.imgUrl}
                  alt={game.name}
                  className="w-full h-56 object-cover rounded-t-lg hover:translate-y-1 "
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-200 mb-3">
                    {game.name}
                  </h3>
                  <p className="text-gray-300">
                    Release Date: {game.releaseDate}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingReleases;
