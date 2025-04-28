'use client';

import { useRouter } from 'next/navigation';
import ViewAllProducts from '../ViewAllPrducts/ViewAllProducts';
import ProductCardHome from '../ProductCardHome/ProductCardHome';
import Timer from '../Timer/timer';

const FlashSales = () => {
  const router = useRouter();

  return (
    <div className="border py-8 flex flex-col items-center justify-between gap-10">
      <div className="w-full flex flex-col gap-3">
        <div className="border flex items-center gap-2">
          <p className="h-10 w-5 bg-red-600 rounded-r-[5px]"></p>
          <p className="text-red-500">Today's</p>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <h1 className="text-[20px] font-bold">Flash Sails</h1>
            <p className="pr-2">arrows</p>
            <div className="hidden">
              <Timer />
            </div>
          </div>
          <div className="">
            <Timer />
          </div>
        </div>
      </div>

      <div className="flex gap-10 w-full items-center justify-center">
        <ProductCardHome />
        <ProductCardHome />
      </div>
      <div className="">
        <ViewAllProducts butText="View All Products" />
      </div>
    </div>
  );
};

export default FlashSales;
