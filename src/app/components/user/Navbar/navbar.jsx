'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
const SearchInput = dynamic(() => import('../SearchBar/SearchBar'), {
  ssr: false,
});
import { useState } from 'react';

const Navbar = () => {
  const [login, setLogin] = useState(false);

  return (
    <div className="h-22 border-b-2 border-b-gray-300 flex items-center justify-between px-2">
      <div className="w-fit flex items-center justify-between border">
        <h1 className="text-[22px] font-bold">Exclusive</h1>
        <div className="hidden sm:flex gap-2">
          <Link href="/">Home</Link>
          <Link href="/user/contact">Contact</Link>
          <Link href="/user/about">About</Link>
          <Link href="/user/signup">Sign Up</Link>
        </div>
      </div>

      {/* left side of navbar */}

      <div className="flex items-center justify-center gap-6">
        <SearchInput />
        <div className="hidden sm:flex gap-5 ">
          <i className="material-icons">favorite</i>
          <i className="material-icons">shopping_cart</i>
          <i className={`material-icons ${login ? 'visible' : 'invisible'}`}>
            person
          </i>
        </div>

        <i className="material-icons">menu</i>
      </div>
    </div>
  );
};

export default Navbar;
