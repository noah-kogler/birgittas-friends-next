import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useCommonTranslation } from "../tools/i18n";
import LanguageSwitcher from "../components/language-switcher";
import Header from "../components/header";
import Footer from "../components/footer";
import Description from "../components/articles/description";
import Trailer from "../components/articles/trailer";
import Crowdfunding from "../components/articles/crowdfunding";
import Credits from "../components/articles/credits";
import { canonicalUrl } from "../site.config";
import ogImage from "../public/images/sunset.png";
import Premiere from "../components/articles/premiere";
import MakingOf from "../components/articles/making-of";
import Freistadt from "../components/articles/freistadt";
import NextScreening from "../components/articles/next-screening";
import Podcast from "../components/articles/podcast";

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
        <title>{ t('title') }</title>
        <meta name="description" content={t('meta_description')} />
        <meta name="author" content={t('meta_author')} />
        <meta property="og:title" content={t('title')} />
        <meta property="og:type" content="video.movie" />
        <meta property="og:image" content={canonicalUrl + ogImage} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" href={canonicalUrl} hrefLang="x-default"/>
        <link rel="alternate" href={canonicalUrl + '/de'} hrefLang="de"/>
      </Head>
      <div className="w-full min-h-full bg-img bg-imgcolor bg-imgheight bg-top max-w-img bg-no-repeat">
        <div className="mx-auto w-3/4 max-w-4xl">
          <LanguageSwitcher />
          <Header />
          <main className="mt-460px md:mt-560px text-center font-text text-xl">
            <Description />
            <Trailer />
            <NextScreening />
            <Podcast />
            <Freistadt />
            <Premiere />
            <MakingOf />
            <Credits />
            <Crowdfunding />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}