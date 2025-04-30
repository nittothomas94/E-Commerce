import FoundersCarousel from '@/app/components/user/FoundersCarousel.jsx/FoundersCarousel';
import FreeAndFastDelevery from '@/app/components/user/Common/FreeAndFastDelevery';
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

  return (
    <div className="flex flex-col gap-20 py-5 sm:px-3 bg-white text-black 2xl:items-center">
      <p className="w-full lg:mx-[3%] 2xl:w-[1200px] px-2">
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
      <section className="w-full 2xl:w-[1200px] mx-auto grid grid-cols-2 mt-10 sm:grid-cols-2 md:grid-cols-4 lg:gap-35 lg:justify-between lg:px-10">
        {array.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-[5px] w-[190px] h-[180px] flex flex-col items-center justify-center hover:bg-red-600 hover:text-white cursor-pointer transition"
          >
            <img src={item.image} alt="icon" className="size-16 mb-2" />
            <h1 className="text-xl font-bold">{item.headding}</h1>
            <p className="text-center text-sm">{item.body}</p>
          </div>
        ))}
      </section>

      {/* Founders Carousel */}
      <section className="w-full 2xl:max-w-[1200px] mx-auto px-2">
        <FoundersCarousel />
      </section>

      {/* last sectiom */}

      <FreeAndFastDelevery />
    </div>
  );
};

export default About;
