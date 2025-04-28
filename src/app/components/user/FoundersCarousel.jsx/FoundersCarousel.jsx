'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import founders from '@/constants/founders/founders';

export default function FoundersCarousel() {
  return (
    <section className="py-7 lg:py-10 border ">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2, // For screens >= 640px (sm)
          },
          768: {
            slidesPerView: 2, // For screens >= 768px (md)
          },
          1024: {
            slidesPerView: 3, // For screens >= 1024px (lg)
          },
        }}
      >
        {founders.map(founder => (
          <SwiperSlide key={founder.id}>
            <div
              className="m-auto w-80 h-100 flex flex-col items-center text-center bg-white rounded-lg lg:h-120 p-2 lg:items-start shadow-md shadow-gray-400
 hover:shadow-gray-950 hover:scale-105 transition-all translate-7 "
            >
              <img
                src={founder.image}
                alt={founder.name}
                className="w-60 h-60 object-cover mb-4 lg:w-60 lg:h-70"
              />
              <h3 className="text-2xl font-semibold">{founder.name}</h3>
              <p className="text-gray-500">{founder.position}</p>
              <div className="flex space-x-4 mt-4">
                <a
                  href={founder.twitter}
                  target="_blank"
                  className="cursor-pointe"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                  href={founder.instagram}
                  target="_blank"
                  className="cursor-pointe"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  className="cursor-pointe"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
