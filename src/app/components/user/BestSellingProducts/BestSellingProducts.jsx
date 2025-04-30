import Button from '../Button/Button';
import ProductCard from '../ProductCard/ProductCard';

const BestSellingProducts = () => {
  const productItems = [
    {
      image: '/images/products/rain-cort.png',
      title: 'The north coat',
      price: '$260',
      oldPrice: '$360',
      rating: 4.5,
      reviews: 65,
    },
    {
      image: '/images/products/duffle-bag.png',
      title: 'Gucci duffle bag',
      price: '$960',
      oldPrice: '$1160',
      rating: 4.5,
      reviews: 65,
    },
    {
      image: '/images/products/cpu-cooler.png',
      title: 'RGB liquid CPU Cooler',
      price: '$160',
      oldPrice: '$170',
      rating: 4.5,
      reviews: 65,
    },
    {
      image: '/images/products/bookshelf.png',
      title: 'Small BookSelf',
      price: '$360',
      oldPrice: null,
      rating: 4.5,
      reviews: 65,
    },
  ];

  return (
    <div className="w-full py-12 lg:pb-20 flex flex-col gap-5">
      <div className="flex gap-3 h-10 items-center">
        <p className="h-full bg-red-700 w-3 rounded-r-[4px]"></p>
        <p className="text-[20px]">This Month</p>
      </div>

      <div className="flex justify-between w-full">
        <h1 className="text-[22px] font-bold lg:text-[35px]">
          Best Selling Products
        </h1>
        <Button text="All Products" />
      </div>

      <div className="w-full grid grid-cols-2 gap-3 p-3 py-8 sm:grid-cols-3 lg:flex justify-between lg:p-0 lg:py-5">
        {productItems.map((item, index) => {
          return (
            <ProductCard
              key={index}
              image={item.image}
              name={item.title}
              price={item.price}
              actualPrice={item.oldPrice}
              reviews={item.reviews}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BestSellingProducts;
