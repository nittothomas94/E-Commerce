const WishListCard = ({
  image = '/images/common/no-image.jpg',
  name = 'No Name',
  price = '000',
  originalPrice = '2000',
}) => {
  return (
    <div className="p-4 flex flex-col justify-between group w-full max-w-[300px] hover:shadow-md">
      {/* Image section */}
      <div
        className="relative h-46 bg-center bg-contain bg-no-repeat bg-gray-300 rounded"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Delete icon */}
        <i className="fa-solid fa-trash absolute top-[10px] right-[10px] cursor-pointer bg-white p-1 rounded-full text-black"></i>

        {/* Add to Cart button, shown on hover */}
        <button className="hidden group-hover:flex absolute bottom-0 left-0 bg-black text-white w-full items-center justify-center gap-2 py-2 text-sm rounded-b">
          <i className="fa-solid fa-cart-shopping"></i> Add To Cart
        </button>
      </div>

      {/* Product info */}
      <h1 className="font-bold text-[15px] mt-2">{name}</h1>
      <div className="flex gap-2 text-sm">
        <p className="text-red-500">${price}</p>
        <p className="line-through text-gray-400">${originalPrice}</p>
      </div>
    </div>
  );
};

export default WishListCard;
