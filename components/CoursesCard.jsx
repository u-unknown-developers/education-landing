import Image from 'next/image';
import Link from 'next/link';

function CoursesCard({ title, desc, price }) {
  return (
    <div className='m-0 flex max-w-[258px]  flex-col gap-[10px] rounded-[20px] bg-white p-[14px] '>
      <Image
        src='https://images.unsplash.com/photo-1630332458166-1c3bdde17665?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        alt='غلاف الفصل'
        width={230}
        height={148}
        className='h-[148px] w-[230px] rounded-b-[5px] rounded-t-[18px] '
      />
      <div className='flex flex-col'>
        <h3 className='text-lg font-medium leading-8 text-black '>{title}</h3>
        <div className='mb-[16px] flex items-center gap-[54px]'>
          <p className='text-[14px] text-gray'> {desc}</p>
          <div className=' rounded-md  border-2 border-secondary p-[8px] text-[14px] font-medium text-secondary '>
            {price}
          </div>
        </div>
        <Link href='#' className='flex text-primary'>
          <span className='ml-[10px]'>شاهد الحصة</span>
          <Image src='/arrowWatch.svg' alt='' width={24} height={15} />
        </Link>
      </div>
    </div>
  );
}

export default CoursesCard;
