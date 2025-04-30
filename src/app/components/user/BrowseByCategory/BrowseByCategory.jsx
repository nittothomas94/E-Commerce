'use client';

import Arrow from '../Common/Arrow';
import CatagroyCard from '../Common/CatagoryCard';
import { useState, useEffect } from 'react';

const BrowseByCategory = () => {
  const categoriesCardItems = [
    { icon: '/images/home/Category-CellPhone.png', label: 'Phones' },
    { icon: '/images/home/Category-Computer.png', label: 'Computers' },
    { icon: '/images/home/Category-SmartWatch.png', label: 'SmartWatch' },
    { icon: '/images/home/Category-CellPhone.png', label: 'Camera' },
    { icon: '/images/home/Category-Headphone.png', label: 'HeadPhones' },
    { icon: '/images/home/Category-Gamepad.png', label: 'Gaming' },
  ];

  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(6);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(2);
      }
      setStartIndex(0); // Reset to first page when screen size changes
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const handleNext = () => {
    if (startIndex + itemsPerPage < categoriesCardItems.length) {
      setStartIndex(prev => prev + itemsPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(prev => prev - itemsPerPage);
    }
  };

  const visibleItems = categoriesCardItems.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="w-full py-12 lg:pb-20 border-b border-gray-400 flex flex-col gap-5">
      <div className="flex gap-3 h-10 items-center">
        <p className="h-full bg-red-700 w-3 rounded-r-[4px]"></p>
        <p className="text-[20px]">Categories</p>
      </div>

      <div className="flex justify-between">
        <h1 className="text-[22px] font-bold lg:text-[35px]">
          Browse By Category
        </h1>
        <Arrow onPrev={handlePrev} onNext={handleNext} />
      </div>

      <div className="grid gap-4 w-full grid-cols-2 md:grid-cols-4 justify-items-center lg:flex lg:justify-between">
        {visibleItems.map((item, index) => (
          <CatagroyCard key={index} image={item.icon} text={item.label} />
        ))}
      </div>
    </div>
  );
};

export default BrowseByCategory;
