import ProductCard from '../ProductCard/ProductCard';
import Timer from '../Timer/timer';
import Arrow from '../Common/Arrow';
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
    <div className="w-full pt-6 lg:pb-20 flex flex-col gap-5">
      <div className="flex gap-3 h-10 items-center">
        <p className="h-full bg-red-700 w-3 rounded-r-[4px]"></p>
        <p className="text-[20px]">Today's</p>
      </div>

      <div className="flex justify-between w-full">
        <div className="flex gap-10">
          <h1 className="text-[22px] font-bold lg:text-[35px]">Flash Sails</h1>
          <span className="hidden sm:block">
            <Timer />
          </span>
        </div>
        <Arrow />
      </div>

      <span className="sm:hidden border">
        <Timer />
      </span>

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

// 'use client';

// import { useRouter } from 'next/navigation';
// import ViewAllProducts from '../ViewAllPrducts/ViewAllProducts';
// import ProductCardHome from '../ProductCardHome/ProductCardHome';
// import Timer from '../Timer/timer';

// const FlashSales = () => {
//   const router = useRouter();

//   return (
//     <div className="border py-8 flex flex-col items-center justify-between gap-10">
//       <div className="w-full flex flex-col gap-3">
//         <div className="border flex items-center gap-2">
//           <p className="h-10 w-5 bg-red-600 rounded-r-[5px]"></p>
//           <p className="text-red-500">Today's</p>
//         </div>
//         <div className="flex flex-col">
//           <div className="flex justify-between">
//             <h1 className="text-[20px] font-bold">Flash Sails</h1>
//             <p className="pr-2">arrows</p>
//             <div className="hidden">
//               <Timer />
//             </div>
//           </div>
//           <div className="">
//             <Timer />
//           </div>
//         </div>
//       </div>

//       <div className="flex gap-10 w-full items-center justify-center">
//         <ProductCardHome />
//         <ProductCardHome />
//       </div>
//       <div className="">
//         <ViewAllProducts butText="View All Products" />
//       </div>
//     </div>
//   );
// };

// export default FlashSales;
