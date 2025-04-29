import { products } from '@/constants/products/products';

const Cart = () => {
  return (
    <div className="min-h-screen p-3 flex flex-col gap-10 py-10">
      <p>
        <span className="text-gray-500">Home / </span> Cart
      </p>

      {/* parent div */}
      <div className="w-full border min-h-[700px]">
        {/* 2 childs */}
        <div className="min-h-30 border">
          1
          <div className="">
            1.1
            <div className="grid grid-cols-4 grid">
              <h1>Product</h1>
              <h1>Price</h1>
              <h1>Quanity</h1>
              <h1>Subtotal</h1>
            </div>
          </div>
          <div className="">1.2</div>
        </div>
        <div className="min-h-30 border">2</div>
      </div>
    </div>
  );
};

export default Cart;
