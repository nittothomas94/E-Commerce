'use client';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { MdMenu, MdClose } from 'react-icons/md';
import { usePathname } from 'next/navigation';
import SearchBar from '../Common/SearchBar';

const SearchInput = dynamic(() => import('../SearchBar/SearchBar'), {
  ssr: false,
});

const Navbar = () => {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const linkStyle =
    'px-3 py-[3px] text-[15px] hover:border-b-3 border-red-600 hover:text-red-600 transition-all duration-50';

  const mobileLinkStyle =
    'block w-full text-lg py-3 px-4 border-b border-gray-200 hover:bg-gray-100';

  return (
    <>
      <div className="h-22 border-b-2 border-b-gray-300 bg-white text-black flex items-center justify-center lg:w-full">
        <div className="flex w-full justify-between md:w-[98%] lg:w-[1024px] lg:px-2 xl:w-[1100px]">
          <div className="w-fit flex items-center justify-between md:w-[60%] lg:pr-20">
            <h1 className="text-[25px] font-bold md:text-[28px]">Exclusive</h1>

            {/* desktop links */}
            <div className="hidden md:flex gap-2">
              <Link
                href="/"
                className={`${linkStyle} ${
                  pathname === '/' ? 'bg-red-600 text-white rounded-[3px]' : ''
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

          {/* right side */}
          <div className="flex items-center justify-center gap-6">
            <SearchBar />
            <div className="hidden md:flex gap-5">
              <Link href="/user/wishlist" className="cursor-pointer">
                <i className="material-icons">favorite</i>
              </Link>
              <Link href="/user/cart" className="cursor-pointer">
                <i className="material-icons">shopping_cart</i>
              </Link>
              <Link href="/user/account">
                <i
                  className={`material-icons ${
                    pathname === '/' ? 'invisible' : 'visible'
                  }`}
                >
                  person
                </i>
              </Link>
            </div>

            {/* mobile menu icon */}
            <MdMenu
              className="text-[28px] text-black md:hidden cursor-pointer"
              onClick={() => setSidebarOpen(true)}
            />
          </div>
        </div>
      </div>

      {/* overlay + sidebar */}
      <div
        className={`fixed top-0 right-0 z-40 w-full h-full bg-black/50 transition-opacity duration-300 ${
          sidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setSidebarOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 h-full w-[75%] max-w-xs bg-white shadow-lg transform transition-transform duration-300 ${
            sidebarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={e => e.stopPropagation()} // prevent closing when clicking inside the sidebar
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <MdClose
              className="text-2xl cursor-pointer text-gray-600"
              onClick={() => setSidebarOpen(false)}
            />
          </div>

          {/* Sidebar Links */}
          <nav className="flex flex-col px-4">
            <Link
              href="/"
              className={mobileLinkStyle}
              onClick={() => setSidebarOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/user/contact"
              className={mobileLinkStyle}
              onClick={() => setSidebarOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/user/about"
              className={mobileLinkStyle}
              onClick={() => setSidebarOpen(false)}
            >
              About
            </Link>
            <Link
              href="/user/signup"
              className={mobileLinkStyle}
              onClick={() => setSidebarOpen(false)}
            >
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
