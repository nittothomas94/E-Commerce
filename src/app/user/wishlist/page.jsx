import WishListCard from '@/app/components/user/WishList/WishListCard';
import JustForYou from '@/app/components/user/WishList/JustForYouCard';

const WishList = () => {
  const wishlistItems = [
    {
      id: 1,
      name: 'Gucci duffle bag',
      price: 960,
      actualPrice: 1160,
      image: '/images/products/duffle-bag.png',
    },
    {
      id: 2,
      name: 'RGB liquid CPU Cooler',
      price: 1960,
      image: '/images/products/cpu-cooler.png',
    },
    {
      id: 3,
      name: 'GP11 Shooter USB Gamepad',
      price: 550,
      image: '/images/products/gamepad.png',
    },
    {
      id: 4,
      name: 'Quilted Satin Jacket',
      price: 750,
      image: '/images/products/jacket.png',
    },
  ];

  const JustForYouProducts = [
    {
      id: 1,
      image: '/images/products/auus-lap.png',
      name: 'ASUS FHD Gaming Laptop',
      price: '960',
      originalPrice: '1160',
      discount: '-35%',
      rating: 5,
      reviews: 65,
    },
    {
      id: 2,
      image: '/images/products/LCD-Gamming-minitor.png',
      name: 'IPS LCD Gaming Monitor',
      price: '1160',
      originalPrice: '',
      discount: '',
      rating: 5,
      reviews: 65,
    },
    {
      id: 3,
      image: '/images/products/gamepad.png',
      name: 'HAVIT HV-G92 Gamepad',
      price: '560',
      originalPrice: '',
      discount: 'NEW',
      rating: 5,
      reviews: 65,
    },
    {
      id: 4,
      image: '/images/products/gamming-keyboard.png',
      name: 'AK-900 Wired Keyboard',
      price: '200',
      originalPrice: '',
      discount: '',
      rating: 5,
      reviews: 65,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-white text-black p-3 lg:flex lg:items-center lg:justify-center">
      {/*  */}
      <div className="w-full mt-5 flex flex-col gap-10 lg:w-[1170px] 2xl:w-[1300px]">
        <div className="flex flex-col gap-10">
          <div className="flex justify-between items-center">
            <p className="text-[20px]">Wishlist(4)</p>
            <button className="px-10 py-3 border rounded-[5px] cursor-pointer hover:bg-blue-500 hover:text-white 2xl:px-[80px]">
              Move All To Bag
            </button>
          </div>

          {/* products wishlist */}
          <div className="w-full grid grid-cols-2 gap-3 p-3 py-8 sm:grid-cols-3 lg:flex justify-between lg:p-0 lg:py-5 2xl:gap-15">
            {wishlistItems.map(item => {
              return (
                <WishListCard
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  originalPrice={item.actualPrice}
                />
              );
            })}
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col gap-10">
          <div className="flex justify-between items-center">
            <div className="flex gap-3 h-10 items-center">
              <p className="h-full bg-red-700 w-3 rounded-r-[4px]"></p>
              <p className="text-[20px]">Just For You</p>
            </div>
            <button className="px-5 py-3 border rounded-[5px] cursor-pointer hover:bg-blue-500 hover:text-white lg:px-15">
              See All
            </button>
          </div>

          {/* products JustForYou */}
          <div className="w-full grid grid-cols-2 gap-3 p-3 py-8 sm:grid-cols-3 lg:flex justify-between lg:p-0 lg:py-5 2xl:gap-15">
            {JustForYouProducts.map(item => {
              return (
                <JustForYou
                  key={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  originalPrice={item.actualPrice}
                  reviews={item.reviews}
                />
              );
            })}
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default WishList;
