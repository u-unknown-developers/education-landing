import Image from 'next/image';
import hassan from '@/public/Group2.png';

function HeroElement() {
  return (
    <div className='relative top-[-40px] w-full flex-1 sm:max-w-[300px]'>
      <Image
        className='w-full '
        width={617}
        height={642}
        src={hassan}
        alt='حسن ماهر'
        priority
      />
    </div>
  );
}

export default HeroElement;
