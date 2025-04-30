const NewArrival = () => {
  return (
    <div className="w-full py-12 lg:pb-20 flex flex-col gap-5">
      <div className="flex gap-3 h-10 items-center">
        <p className="h-full bg-red-700 w-3 rounded-r-[4px]"></p>
        <p className="text-[20px]">Categories</p>
      </div>

      <h1 className="text-[22px] font-bold lg:text-[35px]">New Arrival</h1>

      <div className="flex flex-col gap-2.5 md:flex-row">
        <img
          src="/images/common/playstation-5.png"
          alt="image"
          className="md:w-[50%]"
        />
        <div className="md:w-[50%] flex flex-col gap-3.5">
          <img src="/images/common/womens-colletions.png" alt="" />
          <div className="flex gap-3">
            <img
              src="/images/common/spekers.png"
              alt="speeker"
              className="w-[50%]"
            />
            <img
              src="/images/common/perfume.png"
              alt="perfume"
              className="w-[50%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrival;
