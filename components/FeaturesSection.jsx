import { useRef } from 'react';
import {
  FaLightbulb,
  FaMobileAlt,
  FaPaintBrush,
  FaRegCheckCircle,
  FaVideo,
} from 'react-icons/fa';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import SlideLeft from './utils/SlideLeft';
import SlideUp from './utils/SlideUp';

function Features() {
  const paginationRef = useRef(null);

  return (
    <section className='mt-[115px]  sm:mt-16'>
      {/* check dependencies and clean things up */}
      <div className='container flex flex-col text-center'>
        <SlideUp>
          <div className='flex flex-col text-center'>
            <p className='text-[24px] text-gray'>مزايا المنصة</p>
            <h2 className='mb-[31px]  mt-[23px] text-4xl text-black'>
              ماذا ستحصل عند الاشتراك في منصتنا؟
            </h2>
            <div className='separator h-[7px] w-[139px]  self-center  rounded-md  bg-secondary'></div>
          </div>
        </SlideUp>

        <div className='relative mt-10  sm:mt-6'>
          <SlideLeft>
            <Swiper
              slidesPerView={1}
              pagination={{
                type: 'bullets',
                el: paginationRef.current,
                clickable: true,
                dynamicBullets: true,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.pagination.el = paginationRef.current;
              }}
              modules={[Pagination]}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide>
                <div className='feature-card  m-4 rounded-md border border-transparent px-7 py-16 shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300  hover:border-[#ffece4] hover:shadow-none'>
                  <div className='feature-card-icon inline-flex h-20 w-20 items-center justify-center rounded-md border border-[#fff7f3] bg-[#E6F8FB] text-primary'>
                    <FaRegCheckCircle className='h-8 w-8' />
                  </div>
                  <h3 className='h4 mb-5 mt-6'>محتوى عالي الجودة</h3>
                  <p>
                    تحرص المنصة على توفير محتوى عالي الجودة ومنسق بطريقة سهلة
                    الفهم
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='feature-card  m-4 rounded-md border border-transparent px-7 py-16 shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300  hover:border-[#ffece4] hover:shadow-none'>
                  <div className='feature-card-icon inline-flex h-20 w-20 items-center justify-center rounded-md border border-[#fff7f3] bg-[#E6F8FB] text-primary'>
                    <FaPaintBrush className='h-8 w-8' />
                  </div>
                  <h3 className='h4 mb-5 mt-6'>تصميم رائع وسهل الاستخدام</h3>
                  <p>
                    تم تصميم المنصة بشكل مميز وسهل الاستخدام لتوفير تجربة
                    تعليمية فريدة وممتعة للطلاب.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='feature-card  m-4 rounded-md border border-transparent px-7 py-16 shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300  hover:border-[#ffece4] hover:shadow-none'>
                  <div className='feature-card-icon inline-flex h-20 w-20 items-center justify-center rounded-md border border-[#fff7f3] bg-[#E6F8FB] text-primary'>
                    <FaLightbulb className='h-8 w-8' />
                  </div>
                  <h3 className='h4 mb-5 mt-6'>
                    الامتحانات والأسئلة التفاعلية{' '}
                  </h3>
                  <p>
                    توفر المنصة امتحانات وأسئلة تفاعلية يومياً لمساعدة الطلاب في
                    مراجعة المواد وتقييم مستواهم
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='feature-card  m-4 rounded-md border border-transparent px-7 py-16 shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300  hover:border-[#ffece4] hover:shadow-none'>
                  <div className='feature-card-icon inline-flex h-20 w-20 items-center justify-center rounded-md border border-[#fff7f3] bg-[#E6F8FB] text-primary'>
                    <FaVideo className='h-8 w-8' />
                  </div>
                  <h3 className='h4 mb-5 mt-6'>الوصول إلى الفيديوهات مباشرة</h3>
                  <p>
                    توفر المنصة امتحانات وأسئلة تفاعلية يومياً لمساعدة الطلاب في
                    مراجعة المواد وتقييم مستواهم
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='feature-card  m-4 rounded-md border border-transparent px-7 py-16 shadow-[0px_4px_25px_rgba(0,0,0,.05)] transition-all duration-300  hover:border-[#ffece4] hover:shadow-none'>
                  <div className='feature-card-icon inline-flex h-20 w-20 items-center justify-center rounded-md border border-[#fff7f3] bg-[#E6F8FB]  text-primary '>
                    <FaMobileAlt className='h-8 w-8' />
                  </div>
                  <h3 className='h4 mb-5 mt-6'>تصميم متجاوب مع جميع الأجهزة</h3>
                  <p>تصفح المنصة من خلال اي جهاز الكتروني بكل سهولة و يسر</p>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className='relative mt-9 flex justify-center'>
              <div className='pagination ' ref={paginationRef}></div>
            </div>
          </SlideLeft>
        </div>
      </div>
    </section>
  );
}

export default Features;
