'use client';

import { useState } from 'react';
import CartItem from '@/app/components/user/cart/CartItem';
import CartSummary from '@/app/components/user/cart/CartSummary';

const cartData = [
  {
    id: 1,
    name: 'LCD Monitor',
    price: 650,
    quantity: 1,
    image: '/images/products/LCD-Gamming-minitor.png',
  },
  {
    id: 2,
    name: 'H1 Gamepad',
    price: 550,
    quantity: 2,
    image: '/images/products/gamepad.png',
  },
];

const CartPage = () => {
  const [cart, setCart] = useState(cartData);

  const handleQuantityChange = (id, newQty) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: parseInt(newQty) } : item
      )
    );
  };

  // Dynamically calculate subtotal
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-white text-black">
      <div className="w-[90%] mx-auto py-10 font-sans 2xl:w-[1200px]">
        <div className="flex flex-col gap-6 lg:items-start lg:justify-between xl:gap-20">
          <div className="flex-1 flex flex-col gap-4  w-full">
            {/* Column Headings */}
            <div className="hidden sm:grid grid-cols-[2fr_1fr_1fr_1fr] gap-4 text-gray-600 font-medium px-4 shadow-md p-3">
              <div>Product</div>
              <div>Price</div>

              <div>Quantity</div>

              <div>Subtotal</div>
            </div>

            {cart.map(item => (
              <CartItem
                key={item.id}
                item={item}
                onQuantityChange={handleQuantityChange}
              />
            ))}

            <div className="flex flex-col sm:flex-row gap-4 justify-between mt-4">
              <button className="border px-4 py-2 w-full sm:w-auto">
                Return To Shop
              </button>

              <button className="border px-4 py-2 w-full sm:w-auto">
                Return To Shop
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-between mt-4">
              <div className="flex flex-col h-30 sm:flex-row gap-2 w-full sm:w-auto sm:h-10">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="border px-3 py-2 w-full sm:w-[200px]"
                />
                <button className="bg-red-500 text-white px-4 py-2 cursor-pointer">
                  Apply Coupon
                </button>
              </div>

              <CartSummary subtotal={subtotal} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
