'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ReuseFrame = () => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed (ms)
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    responsive: [
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 1, // Show one slide on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="product-carousel container mx-auto py-8">
      <Slider {...settings}>
        <div className="product-slide p-4 flex justify-center">
          <div className="product-item bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="product1.jpg"
              alt="Product 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-lg font-semibold text-center">Product 1</p>
            </div>
          </div>
        </div>
        <div className="product-slide p-4 flex justify-center">
          <div className="product-item bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="product2.jpg"
              alt="Product 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-lg font-semibold text-center">Product 2</p>
            </div>
          </div>
        </div>
        <div className="product-slide p-4 flex justify-center">
          <div className="product-item bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="product3.jpg"
              alt="Product 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-lg font-semibold text-center">Product 3</p>
            </div>
          </div>
        </div>
        {/* Add more product slides as needed */}
      </Slider>
    </div>
  );
};

export default ReuseFrame;
