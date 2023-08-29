import Pop from './utils/Pop';
import SlideUp from './utils/SlideUp';

function Video() {
  return (
    <section
      id='video'
      className="video container mt-[142px] bg-[url('/videobg.svg')] bg-cover bg-no-repeat sm:mt-24 "
    >
      <div className=' relative flex h-[715px] justify-center rounded-[25px] '>
        <div className=' flex flex-col items-center justify-center gap-y-9 '>
          <SlideUp>
            <div className='text-center'>
              <h2 className=' text-5xl  text-black'>استكشف المنصة</h2>
              <p className='text-xl text-gray'>كيفية استخدام و تصفح الموقع </p>
            </div>
          </SlideUp>

          <Pop>
            <iframe
              loading='lazy'
              className='h-[518px] w-[45vw] rounded-[20px] shadow-lg lg:h-[400px] md:h-[500] md:w-auto'
              width='560'
              height='315'
              src='https://www.youtube.com/embed/w2ILA2P_n6M?si=hfKvHDZZ2--gGLHL'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe>
          </Pop>
        </div>
        <div className='circles z-[-1]'>
          <div className='absolute  left-[123px] top-[53px] h-[18px] w-[18px] rounded-full  bg-[#FEC5D2]'></div>
          <div className='absolute  left-[19px] top-[217px] h-[46px] w-[46px] rounded-full  bg-[#FEC5D2]'></div>
          <div className='absolute  left-[145px] top-[393px] h-[18px] w-[18px] rounded-full  bg-[#FEC5D2]'></div>
          <div className='absolute  left-[33px] top-[603px] h-[32px] w-[32px] rounded-full  bg-[#FEC5D2]'></div>
          <div className='absolute  right-[86px] top-[87px] h-[32px] w-[32px] rounded-full  bg-[#FEC5D2]'></div>
          <div className='absolute  right-[46px] top-[217px] h-[32px] w-[32px] rounded-full  bg-[#FEC5D2]'></div>
          <div className='absolute  right-[175px] top-[286px] h-[32px] w-[32px] rounded-full  bg-[#FEC5D2]'></div>
          <div className='absolute  bottom-[143px] right-[70px] h-[32px] w-[32px] rounded-full  bg-[#FEC5D2]'></div>
        </div>
      </div>
    </section>
  );
}

export default Video;
export async function getStaticProps() {
  return {
    props: {},
  };
}
