const CartSummary = ({ subtotal }) => {
  return (
    <div className="border p-6 rounded-lg w-full sm:w-[300px] lg:w-[350px]">
      <h3 className="text-lg font-semibold mb-4">Cart Summary</h3>
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>${subtotal}</span>
      </div>
      <div className="flex justify-between mb-4">
        <span>Shipping</span>
        <span>Free</span>
      </div>
      <hr className="mb-4" />
      <div className="flex justify-between font-bold text-lg mb-6">
        <span>Total</span>
        <span>${subtotal}</span>
      </div>
      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer">
        Checkout
      </button>
    </div>
  );
};

export default CartSummary;
