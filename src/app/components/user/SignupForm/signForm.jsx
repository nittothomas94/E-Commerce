import { FcGoogle } from 'react-icons/fc';
import Link from 'next/link';

const SignupForm = () => {
  return (
    <div className="border-[1px] border-gray-100 h-115 flex flex-col justify-center gap-3 p-4 py-10 md:w-[50%] lg:w-[39%] lg:h-120">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Create an Account</h1>
        <p className="text-[20px]">Enter your details below</p>
      </div>

      <div className="flex flex-col gap-5">
        <input
          type="text"
          className="w-full border-b-2 border-gray-400 h-10"
          placeholder="Name"
        />
        <input
          type="text"
          className="w-full border-b-2 border-gray-400 h-10"
          placeholder="Name"
        />
        <input
          type="text"
          className="w-full border-b-2 border-gray-400 h-10"
          placeholder="Name"
        />
      </div>
      <div className="flex flex-col gap-5 mt-4">
        <button className="w-full bg-blue-400 p-2 hover:bg-blue-500 cursor-pointer">
          {' '}
          Create an Account
        </button>
        <button className="flex gap-2 items-center justify-center border border-gray-400 w-full rounded-[3px] p-2 hover:bg-blue-400 hover:text-white cursor-pointer">
          <FcGoogle />
          Signup with Google
        </button>
      </div>

      <p>
        Alrady have an account?
        <Link href="/user/login">
          <span className="text-blue-600 hover:underline cursor-pointer">
            Login
          </span>
        </Link>
      </p>
    </div>
  );
};

export default SignupForm;
