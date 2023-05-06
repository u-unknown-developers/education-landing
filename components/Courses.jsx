import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import CoursesCard from './CoursesCard';
import { Pagination, Navigation } from 'swiper';

const Courses = () => {
  return (
    <section className='mt-[280px]'>
      <div
        className='flex gap-[64px] rounded-3xl  pb-[29px] pl-[44px] pr-[53px] pt-[37px]  '
        style={{
          background:
            'linear-gradient(75.05deg, #CCF0F7 -4.65%, #E6F8FB 91.56%)',
        }}
      >
        <div className='flex flex-1 flex-col gap-[56px]  '>
          <h2 className='text-4xl text-black md:text-center'>
            الكورسات الاكثر
            <br /> مشاهدة
          </h2>
          <Image
            src='/books1.svg'
            alt=''
            width={128}
            height={128}
            className='md:hidden'
          />
        </div>
        <div className='max-w-full flex-1 '>
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
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 5,
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
      </div>
    </section>
  );
};

export default Courses;
