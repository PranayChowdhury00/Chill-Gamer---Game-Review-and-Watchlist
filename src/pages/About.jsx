import React from 'react';
import { FaUsers, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto text-center px-4">
        {/* About Section Header */}
        <h2 className="text-4xl font-extrabold text-black mb-12">About Us</h2>

        {/* Mission Section */}
        <motion.div
          className="bg-white p-10 rounded-lg shadow-xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">Our Mission</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            At Chill Gamer, we aim to provide a one-stop platform for gamers of all levels to discover the latest trends,
            expert tips, and reviews. Our goal is to enhance your gaming experience by offering insightful content that 
            helps you improve your skills and stay up-to-date with the gaming industry.
          </p>
        </motion.div>

        {/* Team, What We Do, Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Section */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-xl overflow-hidden hover:scale-105 transform transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FaUsers className="text-5xl text-gray-800 mb-6 mx-auto" />
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">Our Team</h4>
            <p className="text-gray-600">
              A passionate team of gamers, developers, and writers, we strive to deliver the best content for the gaming community. 
              We work together to bring you insightful and entertaining articles and tips.
            </p>
          </motion.div>

          {/* What We Do Section */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-xl overflow-hidden hover:scale-105 transform transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">What We Do</h4>
            <p className="text-gray-600">
              We provide expert tips, in-depth reviews, and the latest gaming news to keep you informed and entertained. 
              Whether you're a casual player or a competitive gamer, we have something for everyone.
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-xl overflow-hidden hover:scale-105 transform transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FaPhone className="text-5xl text-gray-800 mb-6 mx-auto" />
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h4>
            <p className="text-gray-600">
              Have any questions or feedback? Reach out to us, and we’ll get back to you promptly. We love hearing from fellow gamers!
            </p>
          </motion.div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-white mb-6">Get in Touch</h3>
          <p className="text-gray-900 mb-4 text-lg leading-relaxed">
            Interested in learning more about Chill Gamer or want to collaborate with us? Feel free to drop us a message—we are excited to connect with passionate gamers and gaming enthusiasts!
          </p>
          <a
            href="mailto:pranaychowdhury00@gmail.com"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
