import { Roboto } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const roboto = Roboto({
  weight: ['700', '900'],
  subsets: ['latin'],
});

function OverviewCards() {
  return (
    <ul className='mt-[90px]  flex list-none flex-wrap justify-center gap-[54px] sm:mt-14 sm:gap-9'>
      <li className='flex flex-col gap-[38px]'>
        <Link className='flex gap-14' href='#'>
          <h3 className='flex items-center gap-[58px] pr-4 text-2xl text-black'>
            الصف الأول الثانوي
          </h3>
          <Image
            src='/1.svg'
            alt=''
            width={60}
            height={60}
            className='h-[60px] w-[77px]  rounded-[24px]'
          />
        </Link>
        <Link href='#'>
          <Image
            src='https://images.unsplash.com/photo-1609705025038-60908171cf5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
            alt=''
            width={381}
            height={202}
            className='h-[202px] rounded-[24px]'
          />
        </Link>
        <ul className='flex list-none flex-col justify-start gap-[17px]'>
          <li className='flex gap-5 hover:scale-110'>
            <img src='/check.svg' alt='' />
            <p className='text-xl  font-medium leading-8 text-gray'>
              الفيزياء الكهربيه
            </p>
          </li>
          <li className='flex gap-5 hover:scale-110'>
            <img src='/check.svg' alt='' />
            <p className='text-xl  font-medium leading-8 text-gray'>
              الفيزياء الميكانيكية
            </p>
          </li>
          <li className='flex gap-5 hover:scale-110'>
            <img src='/check.svg' alt='' />
            <p className='text-xl  font-medium leading-8 text-gray'>
              الفيزياء الكهربيه
            </p>
          </li>
          <li className='flex gap-5 hover:scale-110'>
            <img src='/check.svg' alt='' />
            <p className='text-xl  font-medium leading-8 text-gray'>
              الفيزياء الكهربيه
            </p>
          </li>
        </ul>
      </li>
      <li className='flex flex-col gap-[38px]'>
        <Link className='flex gap-14' href='#'>
          <h3 className='flex items-center gap-[58px] pr-4 text-2xl text-black'>
            الصف الثاني الثانوي
          </h3>
          <Image
            src='/2.svg'
            alt=''
            width={60}
            height={60}
            className='h-[60px] w-[77px]  rounded-[24px]'
          />
        </Link>
        <Link href='#'>
          <Image
            src='https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
            alt=''
            width={381}
            height={202}
            className='h-[202px] rounded-[24px]'
          />
        </Link>
        <ul className='flex list-none flex-col justify-start gap-[17px]'>
          <li className='flex gap-5 hover:scale-110'>
            <img src='/check.svg' alt='' />
            <p className='text-xl  font-medium leading-8 text-gray'>
              الفيزياء الكهربيه
            </p>
          </li>
          <li className='flex gap-5 hover:scale-110'>
            <img src='/check.svg' alt='' />
            <p className='text-xl  font-medium leading-8 text-gray'>
              الفيزياء الميكانيكية
            </p>
          </li>
          <li className='flex gap-5 hover:scale-110'>
            <img src='/check.svg' alt='' />
            <p className='text-xl  font-medium leading-8 text-gray'>
              الفيزياء الكهربيه
            </p>
          </li>
          <li className='flex gap-5 hover:scale-110'>
            <img src='/check.svg' alt='' />
            <p className='text-xl  font-medium leading-8 text-gray'>
              الفيزياء الكهربيه
            </p>
          </li>
        </ul>
      </li>
      <li className='flex flex-col gap-[38px]'>
        <Link className='flex gap-14' href='#'>
          <h3 className='flex items-center gap-[58px] pr-4 text-2xl text-black'>
            الصف الثالث الثانوي
          </h3>
          <Image
            src='/3.svg'
            alt=''
            width={60}
            height={60}
            className='h-[60px] w-[77px]  rounded-[24px]'
          />
        </Link>
        <Link href='#'>
          <Image
            src='https://images.unsplash.com/photo-1605818245175-a2cdda1e7b0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
            alt=''
            width={381}
            height={202}
            className='h-[202px] rounded-[24px]'
          />
        </Link>
        <ul className='flex list-none flex-col justify-start gap-[17px]'>
          <li className='flex gap-5 hover:scale-110'>
            <img src='/check.svg' alt='' />
            <p className='text-xl  font-medium leading-8 text-gray'>
              الفيزياء الكهربيه
            </p>
          </li>
          <li className='flex gap-5 hover:scale-110'>
            <img src='/check.svg' alt='' />
            <p className='text-xl  font-medium leading-8 text-gray'>
              الفيزياء الميكانيكية
            </p>
          </li>
          <li className='flex gap-5 hover:scale-110'>
            <img src='/check.svg' alt='' />
            <p className='text-xl  font-medium leading-8 text-gray'>
              الفيزياء الكهربيه
            </p>
          </li>
          <li className='flex gap-5 hover:scale-110'>
            <img src='/check.svg' alt='' />
            <p className='text-xl  font-medium leading-8 text-gray'>
              الفيزياء الكهربيه
            </p>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default OverviewCards;
