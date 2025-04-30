'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import founders from '@/constants/founders/founders';

export default function FoundersCarousel() {
  return (
    <section className="py-10 px-4 bg-white">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="!pb-10"
      >
        {founders.map(founder => (
          <SwiperSlide key={founder.id}>
            <div className="transition-transform hover:shadow-sm hover:scale-105 flex flex-col items-center text-center w-[350px] h-[380px] py-2">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full h-60 object-contain mb-4 lg:w-82 lg:h-60 bg-gray-100"
              />
              <h3 className="text-xl font-semibold">{founder.name}</h3>
              <p className="text-gray-600 mb-3">{founder.position}</p>
              <div className="flex justify-center gap-4 text-lg text-gray-700">
                <a
                  href={founder.twitter}
                  target="_blank"
                  className="cursor-pointer hover:text-blue-400"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                  href={founder.instagram}
                  target="_blank"
                  className="cursor-pointer hover:text-pink-500"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  className="cursor-pointer hover:text-blue-600"
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
