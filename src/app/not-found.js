'use client';

import { useRouter } from 'next/navigation';
import Button from './components/user/Button/Button';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col gap-5 justify-center items-center text-center p-8 bg-white text-black">
      <h1 className="text-4xl font-bold sm:text-5xl lg:text-7xl">
        404 Not Found
      </h1>
      <p className="mt-4 text-gray-700">
        Your visited page not found. You may go home page.
      </p>

      <Button text="Back To Home" onClick={() => router.push('/')} />
    </div>
  );
}
