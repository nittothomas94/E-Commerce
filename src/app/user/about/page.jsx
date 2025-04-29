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

        <section className="flex flex-col gap-5 lg:lg:flex-row md:w-[98%] lg:w-[100%] lg:justify-between 2xl:justify-center 2xl:w-[1000px] border lg:gap-10 xl:gap-20">
          <div className="w-full flex flex-col gap-6 lg:w-[50%] lg:justify-center lg:px-[8%]">
            <h1 className="text-4xl font-bold lg:text-6xl">Our Story</h1>
            <p className="lg:w-120">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p className="lg:w-120">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div className="w-full border flex justify-end lg:w-[55%]">
            <img
              src="/images/about/girls-shopping-img.png"
              alt="girls shoping"
              className="w-120 md:w-130 lg:w-[705px] h-[609] lg:h-130"
            />
          </div>
        </section>

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

        <section className="md:w-[98%] lg:w-[1024px] lg:px-2 xl:w-[1100px]">
          <FoundersCarousel />
        </section>

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

// import React from 'react';
// import Navbar from '../components/NavBar';
// import TeamMemberCard from '../components/TeamMemberCard';
// import FeatureCard from '../components/FeatureCard';
// import Footer from '../components/Footer';

// const About = () => {
//     const teamMembers = [
//         { img: "Images/image-person.png", title: "Tom Cruise", description: "Founder & Chairman" },
//         { img: "Images/image-girl.png", title: "Emma Watson", description: "Managing Director" },
//         { img: "Images/image-suit.png", title: "Will Smith", description: "Product Designer" },
//     ];

//     const features = [
//         { img: "Images/truck.png", title: "FREE AND FAST DELIVERY", description: "Free delivery for all orders over $140" },
//         { img: "Images/headphone2.png", title: "24/7 CUSTOMER SERVICE", description: "Friendly 24/7 customer support" },
//         { img: "Images/shield-tick.png", title: "MONEY-BACK GUARANTEE", description: "We return money within 30 days" },
//     ];

//     return (
//         <>
//             <Navbar />

//             <div className="relative w-full" style={{ height: '2940px' }}>
//                 <div className="absolute top-[222px] left-[135px] w-[114px] h-[21px] flex gap-[12px] items-center">
//                     <div className="font-poppins font-normal text-[14px] leading-[21px] text-gray-400">
//                         Home
//                     </div>
//                     <div className="text-black text-[14px]">/</div>
//                     <div className="font-poppins font-normal text-[14px] leading-[21px] text-black">
//                         About
//                     </div>
//                 </div>

//                 <div className="absolute top-[422px] left-[135px] w-[525px] flex flex-col gap-[24px]">
//                     <div className="font-inter font-semibold text-[54px] leading-[64px] text-black">
//                         Our Story
//                     </div>
//                     <div className="flex flex-col gap-[16px]">
//                         <div className="font-poppins font-normal text-[16px] leading-[26px] text-gray-700">
//                             Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
//                         </div>
//                         <div className="font-poppins font-normal text-[16px] leading-[26px] text-gray-500">
//                             Exclusive has more than 1 million products to offer, growing at a very fast rate. Exclusive offers a diverse assortment in categories ranging from consumer electronics to fashion.
//                         </div>
//                     </div>
//                 </div>

//                 <div className="absolute top-[285px] left-[735px] w-[705px] h-[609px] rounded-tl-[4px] rounded-bl-[4px] overflow-hidden">
//                     <img
//                         src="Images/about-sideimage.png"
//                         alt="About Image"
//                         className="w-full h-full object-cover"
//                     />
//                 </div>

//                 <div className="absolute top-[1034px] left-[135px] w-[1170px] h-[230px] flex gap-[30px]">
//                     {[
//                         { img: "Images/delivery.png", title: "10.5k", text: "Sellers active on our site" },
//                         { img: "Images/dollar.png", title: "33k", text: "Sales monthly product sales" },
//                         { img: "Images/shoppingbag.png", title: "45.5k", text: "Customers active on our site" },
//                         { img: "Images/moneybag.png", title: "25k", text: "Annual Gross sales" },
//                     ].map((item, index) => (
//                         <div
//                             key={index}
//                             className="w-[270px] h-[230px] rounded-[4px] border border-[#0000004D] bg-white flex flex-col items-center justify-center hover:bg-red-400 transition-colors duration-300"
//                         >
//                             <div className="w-[80px] h-[80px] flex items-center justify-center rounded-full bg-black hover:bg-white transition-colors duration-300">
//                                 <img src={item.img} alt="Icon" className="w-[40px] h-[40px] object-cover" />
//                             </div>
//                             <p className="mt-4 font-inter font-bold text-[28px] leading-[30px] tracking-[4%] text-black text-center">
//                                 {item.title}
//                             </p>
//                             <p className="mt-2 font-poppins font-normal text-[16px] leading-[24px] text-black text-center">
//                                 {item.text}
//                             </p>
//                         </div>
//                     ))}
//                 </div>

//                 <div className="absolute top-[1404px] left-[135px] w-[1170px] h-[564px] flex gap-[32px]">
//                     {teamMembers.map((member, index) => (
//                         <TeamMemberCard key={index} {...member} />
//                     ))}
//                 </div>

//                 <div className="absolute top-[2100px] left-[135px] w-[1170px] h-[161px] flex justify-between">
//                     {features.map((feature, index) => (
//                         <FeatureCard key={index} {...feature} />
//                     ))}
//                 </div>

//                 <div className="absolute top-[2500px] left-0 w-full h-[440px]">
//                     <Footer />
//                 </div>
//             </div>
//         </>
//     );
// };

// export default About;
