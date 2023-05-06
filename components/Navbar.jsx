import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <header className='flex justify-center'>
      <nav className='flex w-4/5 items-center justify-between'>
        <Link href='#' className='pe-2'>
          <Image alt='logo' src='/logo.png' width={101} height={51} />
        </Link>
        <div className='flex items-center justify-between gap-[31px] sm:gap-2'>
          <Link
            href='#'
            className='text-center text-lg font-medium hover:text-primary'
          >
            تسجيل دخول
          </Link>
          <Link
            href='#'
            className='rounded-2xl bg-primary px-[31px]  py-[7px]  text-center text-lg font-bold	 text-white'
          >
            انشاء حساب
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
