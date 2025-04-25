import Link from 'next/link';

const LoginForm = () => {
  return (
    <div className="border-[1px] border-gray-100 h-110 flex flex-col justify-center gap-14 p-4 py-10 md:w-[50%] lg:w-[39%] lg:h-120">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Log in to Exclusive</h1>
        <p className="text-[20px]">Enter your details below</p>
      </div>

      <div className="flex flex-col gap-5">
        <input
          type="text"
          className="w-full border-b-2 border-gray-400 h-10"
          placeholder="Email or Phone Number"
        />
        <input
          type="text"
          className="w-full border-b-2 border-gray-400 h-10"
          placeholder="Password"
        />
      </div>

      <div className="flex  justify-between items-center mt-4">
        <button className="w-50 bg-red-400 p-2 hover:bg-blue-400 cursor-pointer">
          Login
        </button>

        <p className="text-red-500 underline cursor-pointer">
          Forgot Password?
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
