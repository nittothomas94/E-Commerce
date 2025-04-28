'use client';

import { useState } from 'react';
import {
  FaChevronRight,
  FaChevronCircleDown,
  FaChevronDown,
} from 'react-icons/fa';
const ProductDivider = () => {
  const [clickItem, setClickItem] = useState('');

  return (
    <div className="relative border  lg:px-2 lg:border-r lg:pr-4 lg:border-gray-200">
      <ul
        className="flex justify-between lg:flex-col lg:gap-2 lg:w-50"
        onMouseLeave={() => setClickItem('')}
      >
        <li className="" onClick={() => setClickItem('womens-fashion')}>
          <button className="flex items-center justify-center p-2 gap-2  text-[13px] lg:w-full lg:justify-between hover:border border-gray-200 cursor-pointer">
            Women's Fashion
            {clickItem != 'womens-fashion' ? (
              <FaChevronRight />
            ) : (
              <FaChevronDown />
            )}
          </button>
          {clickItem == 'womens-fashion' ? (
            <div className="grid grid-cols-1 gap-3 absolute bg-white text-black p-3 shadow lg:w-[85%]">
              <div className="">
                <h4 className="font-bold text-gray-800 mb-2">Sarees</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>All Sarees</li>
                  <li>Silk Sarees</li>
                  <li>Banarasi Silk Sarees</li>
                  <li>Cotton Sarees</li>
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-bold text-gray-800 mb-2">Kurtis</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>All Kurtis</li>
                  <li>Anarkali Kurtis</li>
                  <li>Rayon Kurtis</li>
                  <li>Cotton Kurtis</li>
                </ul>
              </div>
            </div>
          ) : (
            ''
          )}
        </li>

        <li className="" onClick={() => setClickItem('mens-fashion')}>
          <button className="flex items-center justify-center p-2 gap-2 text-[13px] lg:w-full lg:justify-between hover:border border-gray-200 cursor-pointer">
            Men's fashion
            {clickItem != 'mens-fashion' ? (
              <FaChevronRight />
            ) : (
              <FaChevronDown />
            )}
          </button>
          {clickItem == 'mens-fashion' ? (
            <div className="grid grid-cols-1 gap-3 absolute bg-white text-black p-3 shadow lg:w-[85%]">
              <div className="">
                <h4 className="font-bold text-gray-800 mb-2">Top Wear</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>T-Shurts</li>
                  <li>shirt</li>
                  <li>T-Shurtcombos</li>
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="font-bold text-gray-800 mb-2">Bottom Wear</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Jeans</li>
                  <li>Cargos/Trousers</li>
                  <li>Dhothis/Lungies</li>
                </ul>
              </div>
            </div>
          ) : (
            ''
          )}
        </li>

        <li className="hidden">
          <button className="flex items-center justify-center p-2 gap-2 text-[13px] min-w-20 lg:w-full lg:justify-between hover:border border-gray-200 cursor-pointer">
            Electronics
          </button>
        </li>

        <li className="lg:hidden" onClick={() => setClickItem('all')}>
          <button className="flex items-center justify-center p-2 gap-2 text-[13px] min-w-20 lg:w-full lg:justify-between hover:border border-gray-200 cursor-pointer">
            All {clickItem != 'all' ? <FaChevronRight /> : <FaChevronDown />}
          </button>
          {clickItem == 'all' ? (
            <div className="grid grid-cols-1 gap-3 absolute bg-white text-black p-3 shadow px-3 right-3 lg:w-[85%] lg:left-0">
              <h4 className="font-bold text-gray-800 mb-2 md:hidden">
                Electronics
              </h4>
              <h4 className="font-bold text-gray-800 mb-2">
                Home & LifeStyile
              </h4>
              <h4 className="font-bold text-gray-800 mb-2">Medicine</h4>
              <h4 className="font-bold text-gray-800 mb-2">Sports & Outdoor</h4>
              <h4 className="font-bold text-gray-800 mb-2">Baby's & Toys</h4>
              <h4 className="font-bold text-gray-800 mb-2">Groceries & Pets</h4>
              <h4 className="font-bold text-gray-800 mb-2">Health & Beauty</h4>
            </div>
          ) : (
            ''
          )}
        </li>

        <li>
          <button className="hidden lg:flex items-center justify-center p-2 gap-2 text-[13px] min-w-20 lg:w-full lg:justify-between hover:border border-gray-200 cursor-pointer">
            Home & Lifestyil
          </button>
        </li>

        <li>
          <button className="hidden lg:flex items-center justify-center p-2 gap-2 text-[13px] min-w-20 lg:w-full lg:justify-between hover:border border-gray-200 cursor-pointer">
            Medicine
          </button>
        </li>

        <li>
          <button className="hidden lg:flex items-center justify-center p-2 gap-2 text-[13px] min-w-20 lg:w-full lg:justify-between hover:border border-gray-200 cursor-pointer">
            Sports & Outdoor
          </button>
        </li>

        <li>
          <button className="hidden lg:flex items-center justify-center p-2 gap-2 text-[13px] min-w-20 lg:w-full lg:justify-between hover:border border-gray-200 cursor-pointer">
            Baby's & Toys
          </button>
        </li>

        <li>
          <button className="hidden lg:flex items-center justify-center p-2 gap-2 text-[13px] min-w-20 lg:w-full lg:justify-between hover:border border-gray-200 cursor-pointer">
            Groceries & Pets
          </button>
        </li>

        <li>
          <button className="hidden lg:flex items-center justify-center p-2 gap-2 hover:border border-gray-200 cursor-pointer text-[13px] min-w-20 lg:w-full lg:justify-between">
            Health & Beauty
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ProductDivider;
