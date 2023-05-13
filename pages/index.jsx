import Courses from '@/components/CoursesSection';
import Features from '@/components/FeaturesSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/HeroSection';
import Overview from '@/components/OverviewSection';
import Testimony from '@/components/TestimonySection';
import Video from '@/components/VideoSection';
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Video />
        <Overview />
        <Courses />
        <Testimony />
      </main>
      <Footer />
    </>
  );
}
