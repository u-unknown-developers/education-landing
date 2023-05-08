import Image from 'next/image';
import { useRef } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonyCard from './TestimonyCard';

function Testimony() {
  return (
    <section className='testimony mt-36'>
      {/* <div className='container'>
        <div className=''>
          <div className='flex flex-col items-center justify-center gap-[31px]'>
            <h2 className='text-center text-3xl'>
              تغطي منصتنا المرحلة الثانوية
            </h2>
            <div className='h-[5px] w-[139px] rounded-[4px] bg-secondary'></div>
            <p className='text-xl  font-medium leading-8 text-gray'>
              الفيزياء الكهربيه
            </p>
          </div>
        </div>
        <div className='animate row swiper-container mt-10 items-center justify-center'>
          <div className='xl:col-11'>
            <div className='row items-center justify-center'>
              <div className='lg:col-3 xl:col-4 hidden lg:block'>
                <Image
                  src='/testimonyRight.svg'
                  width={244}
                  height={290}
                  alt='testimonials'
                />
              </div>
              <div className='md:col-7 lg:col-6 xl:col-4'>
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{ delay: 3000 }}
                  onBeforeInit={(swiper) => {
                    swiper.params.pagination.el =
                      testimonialPaginationRef.current;
                  }}
                  className='testimonial-slider mx-auto max-w-[420px] cursor-pointer lg:max-w-[480px]'
                >
                  <SwiperSlide
                    className='text-center'
                    key={'testimonial-' + index}
                  >
                    <div className='px-8 py-6 xl:px-12 lg:px-20 md:px-10 sm:py-12'>
                      <TbQuote className='text-body mx-auto rotate-180 text-5xl lg:text-8xl sm:text-6xl' />
                      {markdownify(
                        item.content,
                        'p',
                        'text-[17px] lg:text-lg text-body mt-4 md:mt-5 xl:mt-8'
                      )}
                      <div className='bg-body mt-7 inline-block rounded-md p-7 shadow-[0_10px_50px_rgba(0,0,0,.08)] xl:mt-5 lg:mt-8 md:mt-5'>
                        <ImageFallback
                          className='mx-auto rounded-full'
                          src={item.avatar}
                          width={90}
                          height={90}
                          priority={true}
                          alt={item.author}
                        />
                        <h6>{item.author}</h6>
                        <p>{item.profession}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className='lg:col-3 xl:col-4 hidden lg:block'>
                <Image
                  src='/testimonyLeft.svg'
                  width={258}
                  height={301}
                  alt='testimonials'
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className='container'>
        <TestimonyCard />
      </div>
    </section>
  );
}

export default Testimony;
