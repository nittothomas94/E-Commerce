const Contact = () => {
  return (
    <div className="bg-white text-black min-h-screen w-full py-6 px-4 xl:px-12">
      <div className="max-w-screen-2xl mx-auto flex flex-col gap-12">
        <p className="text-gray-500">
          <span className="text-gray-400">Home / </span>Contact
        </p>

        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          {/* Left Section - Info */}
          <div className="flex flex-col gap-10 p-6  rounded-md shadow-sm w-full lg:w-[30%]">
            <div className="flex flex-col gap-4">
              <p className="flex items-center gap-3 text-[20px] font-bold">
                <i className="fa-solid fa-phone bg-red-600 text-white p-3 rounded-full"></i>
                Call to Us
              </p>
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +8801611112222</p>
            </div>

            <hr />

            <div className="flex flex-col gap-4">
              <p className="flex items-center gap-3 text-[20px] font-bold">
                <i className="fa-solid fa-envelope bg-red-600 text-white p-3 rounded-full"></i>
                Write to Us
              </p>
              <p className="text-[17px]">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="w-full lg:w-[65%]">
            <div className="w-full  p-4 sm:p-6 lg:p-8 rounded-md shadow-sm flex flex-col gap-6">
              <div className="flex flex-col gap-5 lg:flex-row lg:gap-4">
                <input
                  type="text"
                  className="w-full h-12 text-base px-4 bg-gray-100 rounded-md"
                  placeholder="Your Name*"
                />
                <input
                  type="email"
                  className="w-full h-12 text-base px-4 bg-gray-100 rounded-md"
                  placeholder="Your Email*"
                />
                <input
                  type="number"
                  className="w-full h-12 text-base px-4 bg-gray-100 rounded-md"
                  placeholder="Your Number*"
                />
              </div>

              <textarea
                className="w-full h-32 lg:h-48 bg-gray-100 text-base px-4 py-2 rounded-md resize-none"
                placeholder="Your Message"
              ></textarea>

              <div className="flex justify-end">
                <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
