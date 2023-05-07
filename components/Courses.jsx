import Image from 'next/image';
import { useRef } from 'react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import CoursesCard from './CoursesCard';

const Courses = () => {
  const paginationRef = useRef(null);

  return (
    <section className='mt-[280px]'>
      <div
        className='container flex gap-[64px] rounded-3xl  py-9 pl-[44px] pr-[53px] lg:flex-col  '
        style={{
          background:
            'linear-gradient(75.05deg, #CCF0F7 -4.65%, #E6F8FB 91.56%)',
        }}
      >
        <div className='flex flex-col gap-[56px]  '>
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
        <div className='max-w-[848px]  md:max-w-[500px]'>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            dir='rtl'
            pagination={{
              clickable: true,
              type: 'bullets',
              el: paginationRef.current,
              clickable: true,
              dynamicBullets: true,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.pagination.el = paginationRef.current;
            }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
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
          <div className='relative py-6'>
            <div className='swiper-button-prev'></div>
            <div className='swiper-button-next'></div>
            <div className='pagination ' ref={paginationRef}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
