import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroElement from './HeroElement';

function HeroSection() {
  return (
    <section>
      <div
        style={{
          background:
            'linear-gradient(75.05deg, #CCF0F7 -4.65%, #E6F8FB 91.56%)',
        }}
        className='flex flex-row-reverse  items-center justify-center rounded-[24px] px-[66px] pb-[104px] pt-[69px]  sm:flex-col'
      >
        <HeroElement />
        <div className='flex flex-1 flex-col items-start '>
          <h1 className='balance text-5xl font-bold leading-[68px]   text-black sm:text-4xl sm:leading-[62px]'>
            تعلم الفيزياء مع حسن ماهر بأسلوب سهل و ممتع
          </h1>
          <p className='mb-[111px] mt-[31px] text-2xl leading-[32px] text-gray sm:text-xl'>
            اطمح لتحسين مستواك الدراسي في مادة الفيزياء وتحقيق النجاح و التفوق
            في الامتحانات.
          </p>
          <div className='flex gap-[23px]'>
            <Link
              href='#'
              className=' rounded-2xl bg-secondary  px-[38px]   py-[9px]  text-center text-lg font-bold	 text-white'
            >
              اشترك الان
            </Link>
            <Link href='#video' className='flex items-center gap-3'>
              <img src='/play.png' alt='play' />
              <p className='text-lg font-medium text-black '>اعرف المزيد</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
