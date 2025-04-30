import Button from '@/app/components/user/Button/Button';

const EditProfileForm = () => {
  return (
    <div className="w-full lg:w-[70%] bg-white shadow-md rounded-md p-4 sm:p-5 lg:p-[5%] flex flex-col gap-6 font-poppins mx-auto">
      <h2 className="text-xl sm:text-2xl font-medium text-[#DB4444]">
        Edit Profile
      </h2>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col w-full">
          <label className="text-gray-600 text-sm">First Name</label>
          <input
            type="text"
            placeholder="Md"
            className="h-10 border border-gray-300 rounded-md px-3 bg-[#F5F5F5]"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-600 text-sm">Last Name</label>
          <input
            type="text"
            placeholder="Rimel"
            className="h-10 border border-gray-300 rounded-md px-3 bg-[#F5F5F5]"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col w-full">
          <label className="text-gray-600 text-sm">Email</label>
          <input
            type="email"
            placeholder="rimel1111@gmail.com"
            className="h-10 border border-gray-300 rounded-md px-3 bg-[#F5F5F5]"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-600 text-sm">Address</label>
          <input
            type="text"
            placeholder="Kingston, 5236, United States"
            className="h-10 border border-gray-300 rounded-md px-3 bg-[#F5F5F5]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-2 sm:mt-4">
        <label className="text-gray-600 text-sm">Current Password</label>
        <input
          type="password"
          placeholder="Current Password"
          className="h-10 border border-gray-300 rounded-md px-3 bg-[#F5F5F5]"
        />

        <label className="text-gray-600 text-sm">New Password</label>
        <input
          type="password"
          placeholder="New Password"
          className="h-10 border border-gray-300 rounded-md px-3 bg-[#F5F5F5]"
        />

        <label className="text-gray-600 text-sm">Confirm New Password</label>
        <input
          type="password"
          placeholder="Confirm New Password"
          className="h-10 border border-gray-300 rounded-md px-3 bg-[#F5F5F5]"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-6 justify-end">
        <button className="h-[48px] sm:h-[56px] px-4 text-black font-normal">
          Cancel
        </button>
        <Button text="Save Chages" />
      </div>
    </div>
  );
};

export default EditProfileForm;
