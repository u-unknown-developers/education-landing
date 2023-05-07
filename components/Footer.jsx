import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      style={{
        boxShadow: '0px -1px 16px rgba(0, 0, 0, 0.11)',
        borderRadius: ' 69px 69px 0px 0px',
      }}
      className='mt-36 '
    >
      <div className='flex flex-col items-center justify-center pb-9 pt-12  text-xl text-gray'>
        <div className='mb-4'>
          <Image
            src='/slogan.png'
            alt=''
            width={258}
            height={144}
            className='h-[144px] w-[258px] '
          />
        </div>
        <div className='links  mb-[77px] mt-16 flex gap-8 font-medium sm:gap-4'>
          <Link href='#'>عن المنصة</Link>
          <Link href='#'>الحصص</Link>
          <Link href='#'>تواصل معنا</Link>
          <Link href='#'>الاسعار</Link>
        </div>
        <div className=' social-icons mb-[136px] flex flex-row-reverse gap-11 sm:mb-20'>
          <a href='#'>
            <FaFacebook className='h-[39px] w-[39px] fill-primary ' />
          </a>
          <a href='#'>
            <FaTwitter className='h-[39px] w-[39px] fill-primary  ' />
          </a>
          <a href='#'>
            <FaYoutube className='h-[39px] w-[39px] fill-primary ' />
          </a>
        </div>
        <small className=' text-xl font-medium '>
          برمجة وتصميم فريق :
          <span className='  text-secondary'> Unknown Squad </span>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
