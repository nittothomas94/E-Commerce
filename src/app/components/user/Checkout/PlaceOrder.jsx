import { useState } from 'react';

const PlaceOrder = () => {
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

  const [selectedOption, setSelectedOption] = useState('cash');

  const handleChange = value => {
    setSelectedOption(value);
  };

  return (
    <div className="w-full flex flex-col items-start justify-start gap-5 font-medium md:p-5 md:w-[80%] lg:w-[527px]">
      {cartData.map((item, index) => {
        return (
          <div
            className="w-full flex justify-between border mt-4 items-center px-3"
            key={index}
          >
            <div className="flex gap-3 items-center">
              <img src={item.image} alt="" className="size-22" />
              <h1>{item.name}</h1>
            </div>
            <h1>{item.price}</h1>
          </div>
        );
      })}

      <div className="w-full flex flex-col gap-4 mt-4 px-2">
        <div className="flex justify-between items-center">
          <p>Subtotal:</p>
          <p>$1750</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping:</p>
          <p>Free</p>
        </div>

        <div className="flex justify-between">
          <p>Total</p>
          <p>$1750</p>
        </div>
      </div>

      <div className="w-full p-4 flex flex-col gap-3">
        {/* Bank Option */}
        <label className="w-full flex items-center justify-between cursor-pointer space-x-3">
          <div className="flex gap-2 items-center">
            <input
              type="radio"
              name="payment"
              value="bank"
              checked={selectedOption === 'bank'}
              onChange={() => handleChange('bank')}
              className="form-radio h-5 w-5 text-black border-black"
            />
            <span className="text-lg font-medium">Bank</span>
          </div>
          <img src="/images/common/banks.png" alt="bank" />
        </label>

        {/* Cash on Delivery */}
        <label className="flex items-center cursor-pointer space-x-3">
          <input
            type="radio"
            name="payment"
            value="cash"
            checked={selectedOption === 'cash'}
            onChange={() => handleChange('cash')}
            className="form-radio h-5 w-5 text-black border-black"
          />
          <span className="text-lg font-medium">Cash on delivery</span>
        </label>
      </div>
    </div>
  );
};

export default PlaceOrder;
