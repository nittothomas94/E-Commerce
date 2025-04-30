const BillingDetailsForm = () => {
  return (
    <div className="w-full flex flex-col gap-5 items-center p-8 md:w-[80%] lg:w-[500px]">
      <div className="flex flex-col gap-2">
        <label className="text-gray-400">
          Name <span className="text-red-700">*</span>
        </label>
        <input type="text" className="w-100 h-10 bg-gray-200 px-2" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-gray-400">
          Name <span className="text-red-700">*</span>
        </label>
        <input type="text" className="w-100 h-10 bg-gray-200 px-2" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-gray-400">
          Name <span className="text-red-700">*</span>
        </label>
        <input type="text" className="w-100 h-10 bg-gray-200 px-2" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-gray-400">
          Name <span className="text-red-700">*</span>
        </label>
        <input type="text" className="w-100 h-10 bg-gray-200 px-2" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-gray-400">
          Name <span className="text-red-700">*</span>
        </label>
        <input type="text" className="w-100 h-10 bg-gray-200 px-2" />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-gray-400">
          Name <span className="text-red-700">*</span>
        </label>
        <input type="text" className="w-100 h-10 bg-gray-200 px-2" />
      </div>

      <div className="flex gap-2">
        <input type="checkbox" />
        <p>Save this information for faster check-out next time</p>
      </div>
    </div>
  );
};

export default BillingDetailsForm;
