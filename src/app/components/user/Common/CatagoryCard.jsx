const CatagroyCard = ({ image, text }) => {
  return (
    <div className="border border-gray-400 rounded-[5px] flex flex-col items-center justify-center py-2 px-4 m-4 hover:bg-red-600 hover:text-white lg:p-8 lg:m-0">
      <img src={image} alt="image" className="w-20 h-18 lg:w-24 lg:h-22" />
      <p>{text}</p>
    </div>
  );
};

export default CatagroyCard;
