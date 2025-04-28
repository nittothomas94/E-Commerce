'use client';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { MdMenu } from 'react-icons/md'; // Material Design menu icon
import { useState } from 'react';
import { usePathname } from 'next/navigation';

//
const SearchInput = dynamic(() => import('../SearchBar/SearchBar'), {
  ssr: false,
});

const Navbar = () => {
  const linkStyle =
    'px-3 py-[3px] text-[15px] hover:border-b-3 border-red-600 hover:text-red-600 transition-all duration-50';

  const pathname = usePathname();

  return (
    <div className="h-22 border-b-2 border-b-gray-300 flex items-center justify-center lg:w-full">
      <div className="flex w-full justify-between md:w-[98%] lg:w-[1024px] lg:px-2 xl:w-[1100px]">
        <div className="w-fit flex items-center justify-between md:w-[60%] lg:pr-20">
          <h1 className="text-[25px] font-bold md:text-[28px]">Exclusive</h1>

          {/* links  */}
          <div className="hidden md:flex gap-2">
            <Link
              href="/"
              className={`${linkStyle} ${
                pathname === '/' ? 'bg-red-600 text-white rounded-[3px] ' : ''
              }`}
            >
              Home
            </Link>

            <Link
              href="/user/contact"
              className={`${linkStyle} ${
                pathname === '/user/contact'
                  ? 'bg-red-600 text-white rounded-[3px]'
                  : ''
              }`}
            >
              Contact
            </Link>

            <Link
              href="/user/about"
              className={`${linkStyle} ${
                pathname === '/user/about'
                  ? 'bg-red-600 text-white rounded-[3px]'
                  : ''
              }`}
            >
              About
            </Link>

            <Link
              href="/user/signup"
              className={`${linkStyle} ${
                pathname === '/user/signup'
                  ? 'bg-red-600 text-white rounded-[3px]'
                  : ''
              }`}
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* left side of navbar */}

        <div className="flex items-center justify-center gap-6">
          <SearchInput />
          <div className="hidden md:flex gap-5 ">
            <i className="material-icons">favorite</i>
            <i className="material-icons">shopping_cart</i>
            <i
              className={`material-icons ${
                pathname == '/' ? 'invisible' : 'visible'
              }`}
            >
              person
            </i>
          </div>
          <MdMenu className="text-[28px] text-black md:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
