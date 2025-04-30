const CartItem = ({ item, onQuantityChange }) => {
  return (
    <div className="sm:grid grid-cols-[2fr_1fr_1fr_1fr] items-center gap-4 shadow-md p-4 rounded-lg">
      {/* Product (2fr) */}
      <div className="flex items-center gap-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 object-contain bg-gray-200 p-3 rounded-md"
        />
        <h3 className="font-semibold text-lg">{item.name}</h3>
      </div>

      {/* Price (1fr) */}
      <p className="text-gray-600">${item.price}</p>

      {/* Quantity (1fr) */}
      <div>
        <select
          value={item.quantity}
          onChange={e => onQuantityChange(item.id, e.target.value)}
          className="border px-2 py-1"
        >
          {[1, 2, 3, 4].map(qty => (
            <option key={qty} value={qty}>
              {qty}
            </option>
          ))}
        </select>
      </div>

      {/* Subtotal (1fr) */}
      <p className="font-medium">${item.price * item.quantity}</p>
    </div>
  );
};

export default CartItem;
