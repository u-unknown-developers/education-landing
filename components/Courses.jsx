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
        className='mx-auto flex max-w-[1256px] justify-between rounded-3xl py-9 pl-[44px] pr-[53px] xl:flex-col xl:items-center lg:flex-col  '
        style={{
          background:
            'linear-gradient(75.05deg, #CCF0F7 -4.65%, #E6F8FB 91.56%)',
        }}
      >
        <div className='flex flex-col gap-[56px]  '>
          <h2 className='text-4xl text-black  xl:text-center'>
            الكورسات الاكثر
            <br /> مشاهدة
          </h2>
          <Image
            src='/books1.svg'
            alt=''
            width={128}
            height={128}
            className='xl:hidden'
          />
        </div>
        <div className='flex max-w-[848px] flex-col gap-6 xl:py-4 mid:max-w-[551px] md:max-w-[547px] sm:max-w-[258px]'>
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
              700: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
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
          <div className='controls ml-6 flex flex-row-reverse  justify-center py-6'>
            <div className='mr-auto flex items-center justify-center gap-5 '>
              <div className='swiper-button-prev rotate-180  '></div>
              <div className='swiper-button-next rotate-180'></div>
            </div>
            <div className='pagination ' ref={paginationRef}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
