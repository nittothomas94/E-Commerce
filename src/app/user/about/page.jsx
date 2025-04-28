import FoundersCarousel from '@/app/components/user/FoundersCarousel.jsx/FoundersCarousel';

const About = () => {
  const array = [
    {
      image: '/images/about/shop.png',
      headding: '10.5k',
      body: 'Sallers active our site',
    },
    {
      image: '/images/about/doller.png',
      headding: '33k',
      body: 'Monthly Proudcts Sale',
    },
    {
      image: '/images/about/bag.png',
      headding: '44.5k',
      body: 'Customer active our site',
    },
    {
      image: '/images/about/money-saak.png',
      headding: '25k',
      body: 'Anual gross sale in our site',
    },
  ];

  const array2 = [
    {
      image: '/images/about/shopping-vehle.png',
      headding: 'FREE AND FAST DELIVERY',
      body: 'Free delivery for all orders over $140',
    },
    {
      image: '/images/about/headset.png',
      headding: '24/7 CUSTOMER SERVICE',
      body: 'fRIENDLY 24/7 customer support',
    },
    {
      image: '/images/about/security.png',
      headding: 'MONEY BACK GUARANTEE',
      body: 'We return money within 30 days',
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-7 py-5 sm:px-3 border lg:items-center lg:gap-20 bg-white text-black">
        <p className="w-full md:w-[98%] lg:w-[1024px] lg:px-2 xl:w-[1100px]">
          <span className="text-gray-500">Home / </span> About
        </p>

        {/* Section 1 */}
        <section className="flex flex-col gap-5 lg:lg:flex-row md:w-[98%] lg:w-[1024px] lg:px-2 lg:gap-10 xl:w-[1100px]">
          <div className="w-full flex flex-col gap-6 lg:w-[50%] lg:justify-center">
            <h1 className="text-4xl font-bold lg:text-6xl">Our Story</h1>
            <p className="">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div className="w-full flex lg:w-[50%]">
            <img
              src="/images/about/girls-shopping-img.png"
              alt="girls shoping"
              className="w-120 md:w-130 lg:w-150 lg:h-130 rounded-2xl"
            />
          </div>
        </section>

        {/* section 2 */}
        <section className=" border w-full grid grid-cols-2 gap-2 justify-items-center items-center md:w-[98%] lg:w-[1024px] lg:justify-items-start lg:pt-10 xl:w-[1100px] sm:grid-cols-3 lg:grid-cols-4">
          {array.map((item, index) => {
            return (
              <div
                className="shadow-xl rounded-[10px] w-[190px] h-[180px] flex flex-col items-center justify-center hover:bg-red-700 hover:text-white cursor-pointer"
                key={index}
              >
                <img src={item.image} alt="image icon" className="size-20" />
                <h1 className="text-center">{item.headding}</h1>
                <p className="text-center">{item.body}</p>
              </div>
            );
          })}
        </section>

        {/* secton 3 */}

        <section className="md:w-[98%] lg:w-[1024px] lg:px-2 xl:w-[1100px]">
          <FoundersCarousel />
        </section>

        {/* section 4 */}
        <section className="w-full grid grid-cols-2 gap-2 justify-items-center items-center md:w-[98%] lg:w-[1024px] lg:justify-items-stretch xl:w-[1100px] lg:mb-20 sm:grid-cols-3">
          {array2.map((item, index) => {
            return (
              <div
                className="shadow-xl rounded-[10px] w-[190px] h-[180px] flex flex-col justify-center items-center  hover:bg-red-700 hover:text-white cursor-pointer"
                key={index}
              >
                <img src={item.image} alt="image icon" className="size-20" />
                <h1>{item.headding}</h1>
                <p>{item.body}</p>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default About;
