import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className=' px-8 md:px-16 sm:px-4 '>
      <nav className='container-xl flex items-center justify-between'>
        <Link href='#' className='pe-2'>
          <Image
            alt='logo'
            className='sm:w-20 '
            src='/logo.png'
            width={101}
            height={51}
          />
        </Link>
        <div className='flex items-center justify-between gap-[31px] sm:gap-2'>
          <Link
            href='#'
            className='text-center text-lg font-medium hover:text-primary sm:text-sm'
          >
            تسجيل دخول
          </Link>
          <Link
            href='#'
            className='rounded-2xl bg-primary px-[31px]  py-[7px]  text-center text-lg font-bold text-white	 sm:text-sm'
          >
            انشاء حساب
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
