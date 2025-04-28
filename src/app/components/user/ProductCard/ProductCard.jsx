import { FaStar } from 'react-icons/fa6';

const ProductCard = ({
  name = 'No Name',
  price = 'Not added',
  actualPrice = '1000',
  image = '/images/common/no-image.jpg',
}) => {
  return (
    <div className="h-fit border border-red-900 w-50 flex flex-col gap-2">
      {/* imgage and icons */}
      <div
        className="w-full h-40 border bg-cover bg-center relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        <p className="bg-red-700 text-white w-fit px-3 py-1 rounded-[10px] absolute top-2 left-2">
          -40%
        </p>

        <p className="absolute top-2 right-2 bg-white size-6 flex items-center justify-center rounded-[10px]">
          <i className="fa-regular fa-heart"></i>
        </p>
        <p className="absolute top-10 right-2 bg-white size-6 flex items-center justify-center rounded-[10px]">
          <i className="fa-regular fa-eye"></i>
        </p>
      </div>

      {/* Proudct details */}
      <h1 className="text-[20px] font-semibold">${name}</h1>

      <div className="flex gap-1">
        <p className="text-red-500">{price}</p>
        <p className="text-gray-400 line-through">${actualPrice}</p>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        {[1, 2, 3, 4].map(index => {
          return (
            <div className="" key={index}>
              <FaStar color="gold" />
            </div>
          );
        })}

        <p>(88)</p>
      </div>
    </div>
  );
};

export default ProductCard;
