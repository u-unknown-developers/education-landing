import React from 'react';
import Image from 'next/image';
import hassan from '@/public/Group2.png';

function HeroElement() {
  return (
    <div className='relative w-full flex-1'>
      <div className=''>
        <Image
          className='w-full '
          width={517}
          height={542}
          src={hassan}
          alt='حسن ماهر'
          priority
        />
      </div>
    </div>
  );
}

export default HeroElement;
