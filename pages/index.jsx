// import Features from '@/components/Features';
import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import Video from '@/components/Video';
import Overview from '@/components/Overview';
import Courses from '@/components/Courses';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className=' mx-auto grid  w-4/5 place-content-center'>
        <HeroSection />
        {/* <Features /> */}
        <Video />
        <Overview />
        <Courses />
      </main>
    </>
  );
}
