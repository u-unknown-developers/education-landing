import books from '@/public/animation/books.json';
import { Player } from '@lottiefiles/react-lottie-player';
import { useRef } from 'react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import CoursesCard from './CoursesCard';
import SlideLeft from './utils/SlideLeft';

const Courses = () => {
  const paginationRef = useRef(null);

  return (
    <section
      style={{
        background: 'linear-gradient(75.05deg, #CCF0F7 -4.65%, #E6F8FB 91.56%)',
      }}
      className='courses mx-auto mt-[280px] max-w-[1256px] rounded-3xl px-4 lg:px-6 sm:mt-28 sm:px-5'
    >
      <SlideLeft>
        <div className='flex justify-between py-9 pl-[44px] pr-[53px] xl:flex-col xl:items-center lg:flex-col'>
          <div className='flex flex-col gap-6'>
            <h2 className='text-4xl text-black  xl:text-center'>
              الكورسات الاكثر
              <br /> مشاهدة
            </h2>
            <Player className=' w-52 xl:hidden' autoplay loop src={books} />
          </div>
          <div className='relative flex max-w-[848px] flex-col gap-6 xl:py-4 mid:max-w-[551px] md:max-w-[547px] sm:max-w-[258px]'>
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
              className='cursor-pointer'
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
            <div className='controls  ml-6 flex flex-row-reverse  justify-between py-6'>
              <div className='mt-2 flex gap-5'>
                <div className='swiper-button-prev rotate-180'></div>
                <div className='swiper-button-next rotate-180'></div>
              </div>
              <div className='relative flex justify-center'>
                <div
                  className='pagination pagination-courses mt-2'
                  ref={paginationRef}
                  style={{ position: 'relative' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </SlideLeft>
    </section>
  );
};

export default Courses;
export async function getStaticProps() {
  return {
    props: {},
  };
}
