import Image from 'next/image';
import { useRef } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonyCard from './TestimonyCard';
import { Autoplay } from 'swiper';

function Testimony() {
  return (
    <section className='testimony mt-36'>
      <div className='container'>
        <div className='flex flex-col items-center justify-center gap-[31px] font-medium'>
          <h2 className='text-center text-4xl text-black-100'>
            توصيات الطلاب وآراءهم
          </h2>
          <div className='h-[5px] w-[139px] rounded-[4px] bg-secondary'></div>
          <p className=' text-center text-lg  leading-8 text-gray/80'>
            &quot; استمع إلى أصوات طلابنا المتميزين وتعرّف على تجربتهم الفريدة
            مع منصتنا التعليمية.
            <br /> تحفيزهم وتحفيزك على النجاح في مسيرتك الأكاديمية
            والمهنية.&quot;
          </p>
        </div>
        <div className='swiper-container relative  mt-10  flex items-center justify-center overflow-y-visible'>
          <div className='xl:hidden'>
            <Image
              src='/testimonyRight.svg'
              width={244}
              height={290}
              alt='testimonials'
            />
          </div>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            loop={true}
            className='testimonial-slider mx-auto max-w-[420px] cursor-grab overflow-y-visible  lg:max-w-[480px] '
          >
            <SwiperSlide className=' text-center'>
              <div className='px-8 py-6 xl:px-12 lg:px-20 md:px-10 sm:py-12'>
                <TestimonyCard
                  quote='"استمع إلى أصوات طلابنا المتميزين وتعرّف على تجربتهم الفريدة مع منصتنا التعليمية.
                      تحفيزهم وتحفيزك على النجاح في مسيرتك الأكاديمية والمهنية."'
                  name='محمد هشام'
                  score='49/50'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className='text-center'>
              <div className='px-8 py-6 xl:px-12 lg:px-20 md:px-10 sm:py-12'>
                <TestimonyCard
                  quote='"استمع إلى أصوات طلابنا المتميزين وتعرّف على تجربتهم الفريدة مع منصتنا التعليمية.
                      تحفيزهم وتحفيزك على النجاح في مسيرتك الأكاديمية والمهنية."'
                  name='محمد هشام'
                  score='49/50'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className='text-center'>
              <div className='px-8 py-6 xl:px-12 lg:px-20 md:px-10 sm:py-12'>
                <TestimonyCard
                  quote='"استمع إلى أصوات طلابنا المتميزين وتعرّف على تجربتهم الفريدة مع منصتنا التعليمية.
                      تحفيزهم وتحفيزك على النجاح في مسيرتك الأكاديمية والمهنية."'
                  name='محمد هشام'
                  score='49/50'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className='text-center'>
              <div className='px-8 py-6 xl:px-12 lg:px-20 md:px-10 sm:py-12'>
                <TestimonyCard
                  quote='"استمع إلى أصوات طلابنا المتميزين وتعرّف على تجربتهم الفريدة مع منصتنا التعليمية.
                      تحفيزهم وتحفيزك على النجاح في مسيرتك الأكاديمية والمهنية."'
                  name='محمد هشام'
                  score='49/50'
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className='text-center'>
              <div className='px-8 py-6 xl:px-12 lg:px-20 md:px-10 sm:py-12'>
                <TestimonyCard
                  quote='"استمع إلى أصوات طلابنا المتميزين وتعرّف على تجربتهم الفريدة مع منصتنا التعليمية.
                      تحفيزهم وتحفيزك على النجاح في مسيرتك الأكاديمية والمهنية."'
                  name='محمد هشام'
                  score='49/50'
                />
              </div>
            </SwiperSlide>
          </Swiper>
          <div className=' xl:hidden'>
            <Image
              src='/testimonyLeft.svg'
              width={258}
              height={301}
              alt='testimonials'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimony;
