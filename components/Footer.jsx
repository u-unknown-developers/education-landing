import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import Pop from './utils/Pop';
import SlideUp from './utils/SlideUp';

const Footer = () => {
  return (
    <footer
      style={{
        boxShadow: '0px -1px 16px rgba(0, 0, 0, 0.11)',
        borderRadius: ' 69px 69px 0px 0px',
      }}
      className='mt-36  sm:mt-20'
    >
      <div className='flex flex-col items-center justify-center pb-9 pt-12 text-xl text-gray sm:text-lg'>
        <Pop>
          <div className='mb-4'>
            <Image
              src='/slogan.png'
              alt='و به نستعين'
              width={258}
              height={144}
              className='h-[144px] w-[258px] '
            />
          </div>
        </Pop>
        <SlideUp>
          <div className='links  mb-[77px] mt-16 flex gap-8 font-medium sm:gap-4'>
            <Link className='hover:underline' href='#'>
              عن المنصة
            </Link>
            <Link className='hover:underline' href='#'>
              الحصص
            </Link>
            <Link className='hover:underline' href='#'>
              تواصل معنا
            </Link>
            <Link className='hover:underline' href='#'>
              الاسعار
            </Link>
          </div>
        </SlideUp>
        <SlideUp>
          <div className=' social-icons mb-[136px] flex flex-row-reverse gap-11 sm:mb-20'>
            <Link href='#'>
              <FaFacebook className='h-[39px] w-[39px] fill-primary ' />
            </Link>
            <Link href='#'>
              <FaTwitter className='h-[39px] w-[39px] fill-primary  ' />
            </Link>
            <Link href='#'>
              <FaYoutube className='h-[39px] w-[39px] fill-primary ' />
            </Link>
          </div>
        </SlideUp>
        <SlideUp>
          <small className=' text-xl font-medium sm:text-lg '>
            برمجة وتصميم :<span className=' text-secondary'> محمد هشام </span>
          </small>
        </SlideUp>
      </div>
    </footer>
  );
};

export default Footer;
export async function getStaticProps() {
  return {
    props: {},
  };
}
