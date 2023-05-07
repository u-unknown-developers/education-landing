import Features from '@/components/Features';
import HeroSection from '@/components/HeroSection';
import Header from '@/components/Header';
import Video from '@/components/Video';
import Overview from '@/components/Overview';
import Courses from '@/components/Courses';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Features />
        <Video />
        <Overview />
        <Courses />
      </main>
      <Footer />
    </>
  );
}
