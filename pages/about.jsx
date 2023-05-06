import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper';
import CoursesCard from '@/components/CoursesCard';

function about() {
  return (
    <div className=' border-red max-h-[360px] max-w-[848px] border-2  border-solid '>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        dir='rtl'
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 37,
          },
        }}
        modules={[Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <CoursesCard
            title=' الفصل الاول - الفيزياء الكهربية'
            price='50 جنية'
            desc='الصف الاول الثانوي'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CoursesCard
            title=' الفصل الاول - الفيزياء الكهربية'
            price='50 جنية'
            desc='الصف الاول الثانوي'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CoursesCard
            title=' الفصل الاول - الفيزياء الكهربية'
            price='50 جنية'
            desc='الصف الاول الثانوي'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CoursesCard
            title=' الفصل الاول - الفيزياء الكهربية'
            price='50 جنية'
            desc='الصف الاول الثانوي'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CoursesCard
            title=' الفصل الاول - الفيزياء الكهربية'
            price='50 جنية'
            desc='الصف الاول الثانوي'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CoursesCard
            title=' الفصل الاول - الفيزياء الكهربية'
            price='50 جنية'
            desc='الصف الاول الثانوي'
          />
        </SwiperSlide>
        <SwiperSlide>
          <CoursesCard
            title=' الفصل الاول - الفيزياء الكهربية'
            price='50 جنية'
            desc='الصف الاول الثانوي'
          />
        </SwiperSlide>
      </Swiper>
      <div className='relative'>
        <div className='swiper-button-prev'></div>
        <div className='swiper-button-next'></div>
      </div>
    </div>
  );
}

export default about;
