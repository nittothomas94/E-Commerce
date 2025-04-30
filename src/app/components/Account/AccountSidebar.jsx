const AccountSidebar = () => {
  return (
    <div className="w-full lg:w-[25%] bg-white rounded-md p-4 sm:p-5 lg:p-[5%] font-poppins flex flex-col gap-2">
      <div className="font-semibold text-black mb-1">Manage My Account</div>
      <button className="text-gray-500 font-medium text-left pl-2 sm:px-4 hover:text-red-600 transition cursor-pointer">
        My Profile
      </button>
      <button className="text-gray-400 text-left pl-2 sm:px-4 hover:text-red-500 transition cursor-pointer">
        Address Book
      </button>
      <button className="text-gray-400 text-left pl-2 sm:px-4 mb-4 hover:text-red-500 transition cursor-pointer">
        My Payment Options
      </button>

      <div className="font-semibold text-black mb-1">My Orders</div>
      <button className="text-gray-400 text-left pl-2 sm:px-4 hover:text-red-500 transition cursor-pointer">
        My Returns
      </button>
      <button className="text-gray-400 text-left pl-2 sm:px-4 mb-4 hover:text-red-500 transition cursor-pointer">
        My Cancellations
      </button>

      <div className="font-semibold text-black">My WishList</div>
    </div>
  );
};

export default AccountSidebar;
