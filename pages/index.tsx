import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';

import Description from '../containers/Description/Description';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Hero from '../containers/Hero/Hero';
import Show from '../containers/Show/Show';

function Home() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>
          {t('HEAD-TITLE')} - {t('HEAD-DESCRIPTION')}
        </title>
        <meta name="description" content={`${t('HEAD-TITLE')} ${t('HEAD-DESCRIPTION')}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <Hero />
        <Description />
        <Show />
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

export default Home;
