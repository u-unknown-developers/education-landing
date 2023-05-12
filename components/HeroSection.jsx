import Image from 'next/image';
import Link from 'next/link';
import HeroElement from './HeroElement';
import play from '@/public/play.png';

function Hero() {
  return (
    <section className='hero overflow-hidden px-7 sm:px-5'>
      <div
        style={{
          background:
            'linear-gradient(75.05deg, #CCF0F7 -4.65%, #E6F8FB 91.56%)',
        }}
        className='container-xl  relative flex flex-row-reverse items-center justify-center rounded-[24px] px-[66px] pb-[104px] pt-[69px] mid:flex-col sm:mt-7 sm:px-4 sm:pb-12 sm:pt-0 '
      >
        <HeroElement />
        <div className='heroText flex flex-1 flex-col items-start '>
          <h1 className='balance text-5xl font-bold leading-[68px] text-black sm:text-4xl sm:leading-[62px]'>
            تعلم الفيزياء مع <br className='hidden sm:block' />
            حسن ماهر بأسلوب <br className='hidden sm:block' /> سهل و ممتع
          </h1>
          <p className='mb-[111px] mt-[31px] text-2xl leading-8  text-gray sm:my-7 sm:text-xl'>
            اطمح لتحسين مستواك الدراسي في مادة الفيزياء
            <br className=' sm:hidden' />
            وتحقيق النجاح و التفوق في الامتحانات.
          </p>
          <div className='flex gap-[23px]'>
            <Link
              href='#'
              className=' rounded-2xl bg-secondary  text-center text-lg font-bold	 text-white'
            >
              <p className='px-[38px] py-[9px]  '> اشترك الان </p>
            </Link>
            <Link href='#video' className='flex items-center gap-3'>
              <Image className='w-11' src={play} alt=' شغل' />
              <p className='text-lg font-medium text-black '>اعرف المزيد</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
