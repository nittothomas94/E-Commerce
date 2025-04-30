const FreeAndFastDelevery = () => {
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
    <section className="w-full lg:mx-[3%] max-w-[1200px] mx-auto flex flex-wrap justify-center lg:justify-between lg:px-20 gap-6 px-2 mb-20">
      {array2.map((item, index) => (
        <div
          key={index}
          className="w-[190px] h-[180px] hover:shadow-md flex flex-col justify-center items-center text-center px-4 hover:bg-red-600 hover:text-white transition"
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
  );
};

export default FreeAndFastDelevery;
