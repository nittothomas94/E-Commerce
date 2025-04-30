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
      body: 'Monthly Product Sale',
    },
    {
      image: '/images/about/bag.png',
      headding: '45.5k',
      body: 'Customer active in our site',
    },
    {
      image: '/images/about/money-saak.png',
      headding: '25k',
      body: 'Annual gross sale in our site',
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
      body: 'Friendly 24/7 customer support',
    },
    {
      image: '/images/about/security.png',
      headding: 'MONEY BACK GUARANTEE',
      body: 'We return money within 30 days',
    },
  ];

  return (
    <div className="flex flex-col gap-10 py-5 sm:px-3 bg-white text-black">
      {/* Breadcrumb */}
      <p className="w-full lg:mx-[3%] max-w-[1200px] mx-auto px-2">
        <span className="text-gray-500">Home / </span> About
      </p>

      {/* Our Story Section */}
      <section className="flex flex-col gap-10 lg:flex-row lg:mx-[3%] max-w-[1200px] mx-auto px-2">
        {/* Text Content */}
        <div className="w-full flex flex-col gap-6 lg:w-1/2 justify-center">
          <h1 className="text-4xl font-bold lg:text-6xl">Our Story</h1>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sellers and 300 brands and serves 3 million customers
            across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing very
            fast. Exclusive offers a diverse assortment in categories ranging
            from consumer.
          </p>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/images/about/girls-shopping-img.png"
            alt="girls shopping"
            className="w-full max-w-[600px] h-auto object-cover"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full lg:mx-[3%] max-w-[1200px] mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center px-2">
        {array.map((item, index) => (
          <div
            key={index}
            className="shadow-xl rounded-[10px] w-[190px] h-[180px] flex flex-col items-center justify-center hover:bg-red-600 hover:text-white cursor-pointer transition"
          >
            <img src={item.image} alt="icon" className="size-16 mb-2" />
            <h1 className="text-xl font-bold">{item.headding}</h1>
            <p className="text-center text-sm">{item.body}</p>
          </div>
        ))}
      </section>

      {/* Founders Carousel */}
      <section className="w-full lg:mx-[3%] max-w-[1200px] mx-auto px-2">
        <FoundersCarousel />
      </section>

      {/* Features Section */}
      <section className="w-full lg:mx-[3%] max-w-[1200px] mx-auto flex flex-wrap justify-center lg:justify-between gap-6 px-2 mb-20">
        {array2.map((item, index) => (
          <div
            key={index}
            className="w-[190px] h-[180px] rounded-[10px] shadow-md flex flex-col justify-center items-center text-center px-4 hover:bg-red-600 hover:text-white transition"
          >
            <img
              src={item.image}
              alt={item.headding}
              className="w-12 h-12 mb-2"
            />
            <h2 className="text-base font-semibold">{item.headding}</h2>
            <p className="text-sm">{item.body}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default About;
