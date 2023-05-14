import '@/styles/globals.css';
import '@/styles/style.scss';
import Head from 'next/head';

import { IBM_Plex_Sans_Arabic } from 'next/font/google';
const ibm = IBM_Plex_Sans_Arabic({
  weight: ['400', '500', '700'],
  subsets: ['arabic'],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset='utf-8' />
        <title> Hassan Maher-حسن ماهر </title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content='منصة مستر حسن ماهر لتدريس الفيزياء لجميع مراحل الثانوية العامة'
        />
        <link rel='icon' type='image/png' href='/logo.png' />
      </Head>
      <div className={ibm.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
