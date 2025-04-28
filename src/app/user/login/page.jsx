import LoginForm from '@/app/components/user/LoginForm/loginForm';

const Login = () => {
  return (
    <div className="flex py-20 items-center justify-center font-sans lg:justify-start xl:justify-center bg-white text-black">
      <div className="w-[84%] md:w-[100%] md:flex lg:w-[90%] lg:h-200 lg:justify-between lg:items-center xl:w-[1250px] xl:justify-center xl:gap-40">
        <img
          src="/images/SandL-img.png"
          alt="phone image"
          className="hidden md:block md:w-100 md:h-120 lg:h-150 lg:w-120 lg:object-cover"
        />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
