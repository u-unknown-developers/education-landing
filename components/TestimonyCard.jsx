import Image from 'next/image';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['700', '900'],
  subsets: ['latin'],
});

function TestimonyCard({ quote, name, score }) {
  return (
    <div
      className={`flex ${roboto.className} flex-col gap-[10px] rounded-[20px] bg-white p-[14px]`}
    >
      <Image
        src='/quotes.svg'
        alt='quotes'
        width={63}
        height={48}
        className='h-[48px] w-[63px]'
      />
      <p className='text-center text-lg font-bold leading-8 text-white '>
        {quote}
      </p>
      <div
        style='box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
'
        className=' max-h-[188px] max-w-[167px] rounded-lg bg-white'
      >
        <Image
          src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80'
          alt=''
          width={230}
          height={148}
          className='h-[148px] w-[230px] rounded-b-[5px] rounded-t-[18px] '
        />
        <p className='text-black'>{name}</p>
        <p className='text-gray'>{score}</p>
      </div>
    </div>
  );
}

export default TestimonyCard;
