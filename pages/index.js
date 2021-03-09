import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useCommonTranslation } from "../tools/i18n";
import LanguageSwitcher from "../components/language-switcher";
import HeadMeta from "../components/head/head-meta";
import HeadLinks from "../components/head/head-links";
import Header from "../components/header";
import Footer from "../components/footer";
import Description from "../components/articles/description";
import Trailer from "../components/articles/trailer";
import Crowdfunding from "../components/articles/crowdfunding";
import Credits from "../components/articles/credits";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...await serverSideTranslations(locale, ['common']),
    },
  };
}

export default function Home() {
  const { t } = useCommonTranslation();

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <link rel="icon" href="/favicon.ico" />
        <HeadMeta />
        <HeadLinks />
      </Head>
      <div className="w-full min-h-full bg-img bg-imgcolor bg-imgheight bg-top max-w-img bg-no-repeat">
        <div className="mx-auto w-3/4 max-w-4xl">+
          <LanguageSwitcher />
          <Header />
          <main className="mt-460px md:mt-560px text-center font-text text-xl">
            <Description />
            <Trailer />
            <Crowdfunding />
            <Credits />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}