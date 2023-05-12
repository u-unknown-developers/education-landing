import OverviewCards from '@/components/OverviewCards';

function Overview() {
  return (
    <section className='overview mt-[194px]  sm:mt-24'>
      <div className='container'>
        <div className='flex flex-col items-center justify-center gap-[31px]'>
          <h2 className='text-center text-3xl'>تغطي منصتنا المرحلة الثانوية</h2>
          <div className='h-[5px] w-[139px] rounded-[4px] bg-secondary'></div>
        </div>
        <OverviewCards />
      </div>
    </section>
  );
}

export default Overview;
