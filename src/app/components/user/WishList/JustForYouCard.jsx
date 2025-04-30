import { FaStar } from 'react-icons/fa6';

const JustForYouCard = ({
  image = '/images/common/no-image.jpg',
  name = 'No Name',
  price = '000',
  originalPrice = '2000',
  reviews = '',
}) => {
  return (
    <div className="p-4 flex flex-col gap-3 justify-between group w-full max-w-[300px] hover:shadow-md">
      {/* Image section */}
      <div
        className="relative h-46 bg-center bg-contain bg-no-repeat bg-gray-300 rounded"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Eye icon */}

        <i className="fa-regular fa-eye absolute top-[10px] right-[10px] cursor-pointer bg-white p-1 rounded-full text-black"></i>

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
      {/* Rating */}
      <div className="flex items-center gap-2">
        {[1, 2, 3, 4].map(index => (
          <div key={index}>
            <FaStar color="gold" />
          </div>
        ))}
        <p>{reviews}</p>
      </div>
    </div>
  );
};

export default JustForYouCard;
