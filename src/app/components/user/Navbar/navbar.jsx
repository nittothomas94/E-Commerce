import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="h-22 border-b-2 border-b-gray-300 flex items-center justify-center">
      <div className="flex items-center justify-between">
        <h1>Exclusive</h1>
        <div className="flex gap-2">
          <Link href="/">Home</Link>
          <Link href="/user/contact">Contact</Link>
          <Link href="/user/about">About</Link>
          <Link href="user/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
