'use client';

import BillingDetailsForm from '@/app/components/user/Checkout/BillingDetailsForm';
import PlaceOrder from '@/app/components/user/Checkout/PlaceOrder';
const Checkout = () => {
  return (
    <div className="min-h-screen w-full flex 2xl:justify-center bg-white text-black">
      <div className="p-3 w-full flex flex-col gap-10 lg:px-[7%] 2xl:px-20 2xl:w-[1400px] border">
        <p className="text-[15px]">
          <span className="text-gray-500">
            Account / My Account / Product / View Cart /{' '}
          </span>
          Checkout
        </p>

        <h1 className="font-medium text-[22px]">Billing Details</h1>
        <div className="flex flex-col gap-10 md:items-center md:flex-row md:justify-between 2xl:w-[1200px]">
          <BillingDetailsForm />
          <PlaceOrder />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
