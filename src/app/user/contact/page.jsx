const Contact = () => {
  return (
    <div className="min-h-screen w-full xl:flex 2xl:items-center 2xl:justify-center">
      <div className="flex flex-col gap-12 mt-5 m-2 lg:w-full 2xl:w-[1400px] 2xl:gap-18">
        <p>
          <span className="text-gray-400">Home / </span>
          Contact
        </p>

        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:w-[100%]">
          <div className="flex flex-col gap-10 shadow-sm p-4 lg:h-[480px]">
            <div className="w-full flex flex-col gap-4">
              <p className="flex gap-2 items-center text-[20px] font-bold">
                <i className="fa-solid fa-phone bg-red-600 text-white p-3 rounded-full"></i>
                Call to Us
              </p>
              <p className="">We are available 24/7, 7 days a week.</p>
              <p>Phone: +8801611112222</p>
            </div>

            <hr />

            <div className="w-full flex flex-col gap-4 lg:w-[340] lg:h-[337px]">
              <p className="flex gap-2 items-center text-[20px] font-bold">
                <i className="fa-solid fa-phone bg-red-600 text-white p-3 rounded-full"></i>
                Write To US
              </p>
              <div className="">
                <p className="text-[17px]">
                  Fill out our form and we will Contact
                </p>
                <p> you within 24 hours.</p>
              </div>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>

          {/* Contact Box */}

          <div className="flex lg:w-[100%] lg:h-[480px]">
            <div className="w-full p-2 flex flex-col gap-5 relative pb-20 shadow-sm mb-10 md:px-[10%] lg:w-[100%] lg:p-5 xl:p-6">
              <div className="flex flex-col gap-5 lg:flex-row lg:justify-between">
                <input
                  type="text"
                  className="min-w-50 h-12 text-[19px] px-2 bg-gray-200 lg:h-15"
                  placeholder="Your Name*"
                ></input>

                <input
                  type="email"
                  className="min-w-50 h-12 text-[19px] px-2 bg-gray-200 lg:h-15"
                  placeholder="Your Email*"
                ></input>

                <input
                  type="number"
                  className="min-w-50 h-12 text-[19px] px-2 bg-gray-200 lg:h-15"
                  placeholder="Your Number*"
                ></input>
              </div>

              <textarea
                className="min-w-50 h-32 bg-gray-200 text-base px-2 py-0 lg:h-60 lg:p-2"
                placeholder="Type here..."
              ></textarea>

              <button className="bg-red-600 text-white w-fit px-10 py-3 absolute bottom-2 right-2 cursor-pointer rounded-[8px] scale-105 hover:bg-red-800 md:right-[10%]">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
