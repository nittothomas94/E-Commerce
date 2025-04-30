const Button = ({ text }) => {
  return (
    <button className="bg-red-600 text-white px-10 py-2 lg:px-15 cursor-pointer">
      {text}
    </button>
  );
};

export default Button;
