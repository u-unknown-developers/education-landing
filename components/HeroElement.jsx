import hassan from '@/public/Group2.png';
import Image from 'next/image';
import bulb from '@/public/animation/bulb.json';
import astro from '@/public/animation/astro.json';
import atom from '@/public/animation/atom.json';
import { Player } from '@lottiefiles/react-lottie-player';

function HeroElement() {
  return (
    <div className='heroElement relative top-[-40px] w-full flex-1  sm:max-w-[300px]'>
      <Image
        className=' w-full'
        width={617}
        height={642}
        src={hassan}
        alt='حسن ماهر'
        priority
      />
      <Player
        className='absolute right-4 top-36 w-3/12 xl:right-2 xl:top-28  sm:top-16 '
        autoplay
        loop
        src={bulb}
      />
      <Player
        className='absolute left-5 top-20 w-32 pl-4 xl:w-3/12 md:left-2 md:top-16 sm:-left-1 sm:top-10'
        autoplay
        loop
        src={atom}
      />
      <Player
        className='absolute left-[-131px] top-[360px] w-[42%] pl-4 xl:left-[-90px] xl:top-[270px] lg:top-[210px] mid:top-[350px] md:top-[270px] sm:left-[-70px] sm:top-[170px]'
        autoplay
        loop
        src={astro}
      />
    </div>
  );
}

export default HeroElement;
