const TopHeader = () => {
  return (
    <div className="bg-black text-white flex items-center justify-center h-30 sm:h-25 lg:h-14 relative">
      <div className="w-fit flex items-center justify-between gap-2 sm:gap-8">
        <p className="text-[15px] w-[70%] border border-gray-700 p-2 sm:w-[80%] sm:p-5 md:text-[18px] md:p-4 md:w-fit lg:text-[15px] lg:p-2 lg:gap-0 hover:border-gray-500 hover:shadow-lg hover:shadow-cyan-500/50">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <button className="border p-4 border-gray-700 md:text-[20px] lg:p-1.5 lg:text-[15px] md:hover:cursor-pointer hover:border-gray-500 hover:shadow-lg hover:shadow-cyan-500/50">
          ShopNow
        </button>
      </div>

      <div className="hidden lg:block absolute top-3 lg:right-10">
        <select className="bg-black text-white p-2 rounded">
          <option value="volvo">English</option>
          <option value="saab">Hindi</option>
          <option value="opel">Malayalam</option>
          <option value="audi">Arabic</option>
        </select>
      </div>
    </div>
  );
};

export default TopHeader;
