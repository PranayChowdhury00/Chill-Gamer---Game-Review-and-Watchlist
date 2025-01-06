import React from 'react';
import slider1 from '/public/slider1.webp';
import slider2 from '/public/slider2.webp';
import slider3 from '/public/banner3.webp';

const Banner = () => {
  return (
    <div className="carousel w-full mt-8">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img src={slider1} className="w-full h-96 object-cover rounded-lg shadow-lg" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle bg-gray-800 text-white">❮</a>
          <a href="#slide2" className="btn btn-circle bg-gray-800 text-white">❯</a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img src={slider2} className="w-full h-96 object-cover rounded-lg shadow-lg" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle bg-gray-800 text-white">❮</a>
          <a href="#slide3" className="btn btn-circle bg-gray-800 text-white">❯</a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img src={slider3} className="w-full h-96 object-cover rounded-lg shadow-lg" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle bg-gray-800 text-white">❮</a>
          <a href="#slide1" className="btn btn-circle bg-gray-800 text-white">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
