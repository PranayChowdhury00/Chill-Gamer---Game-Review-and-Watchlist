import React, { useState } from 'react';
import { motion } from 'framer-motion'; 
import { FaGamepad, FaUser, FaCalendarAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const blogPosts = [
    { 
      id: 1, 
      title: 'How to Master Your Gaming Skills', 
      author: 'John Doe', 
      date: 'January 5, 2025', 
      content: 'Gaming requires focus, practice, and the right mindset. Master your skills with these tips...', 
      description: 'Tips to improve your gaming...', 
      icon: <FaGamepad className="text-5xl text-gray-800 mb-4" />, 
      category: 'Tips', 
      views: 120 
    },
    { 
      id: 2, 
      title: 'Best Gaming Gear for 2025', 
      author: 'Jane Smith', 
      date: 'December 20, 2024', 
      content: '2025 promises exciting gaming releases and better gear. Check out our top picks for the year...', 
      description: 'Top gaming gear picks for 2025...', 
      icon: <FaUser className="text-5xl text-gray-800 mb-4" />, 
      category: 'Gear', 
      views: 200 
    },
    { 
      id: 3, 
      title: 'Upcoming Games to Watch in 2025', 
      author: 'Alex Johnson', 
      date: 'January 2, 2025', 
      content: '2025 is set to release some of the most anticipated games. Get the lowdown on what to expect...', 
      description: 'A preview of the top upcoming games...', 
      icon: <FaCalendarAlt className="text-5xl text-gray-800 mb-4" />, 
      category: 'News', 
      views: 85 
    }
  ];

  return (
    <section className="py-16 mb-5 rounded-xl bg-gray-500">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-extrabold text-white mb-8">Gaming Blog</h2>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Search blog posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 rounded-md w-1/2 text-gray-800"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase())).map((post) => (
            <motion.div
              key={post.id}
              className="card shadow-xl bg-white text-gray-800 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-6">
                {post.icon}
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  <span className="mr-4">{post.author}</span> 
                  <span>{post.date}</span>
                </p>
                <p className="text-gray-500 mb-4">{post.description}</p>
                <p className="text-white">{post.content}</p>

                <div className="flex justify-between mt-4">
                  <a href="#" className="text-blue-500">Read more</a>
                  <div className="flex space-x-2">
                    <FaFacebook className="text-blue-600" />
                    <FaTwitter className="text-blue-400" />
                    <FaInstagram className="text-pink-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
