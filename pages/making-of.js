import { useCommonTranslation } from "../tools/i18n";
import { useRouter } from "next/router";
import Head from "next/head";
import { canonicalUrl } from "../site.config";
import ogImage from "../public/images/sunset.png";
import LanguageSwitcher from "../components/language-switcher";
import Header from "../components/header";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Footer from "../components/footer";
import Vimeo from "../components/vimeo";
import MakingOfImage from "../components/making-of-image";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...await serverSideTranslations(locale, ['common']),
    },
  };
}

export default function MakingOf() {
  const {t} = useCommonTranslation();
  const router = useRouter();

  const path = router.asPath;

  return (
    <>
      <Head>
        <title>{ t('title') }</title>
        <meta name="description" content={t('meta_description')} />
        <meta name="author" content={t('meta_author')} />
        <meta property="og:title" content={t('title')} />
        <meta property="og:type" content="video.movie" />
        <meta property="og:image" content={canonicalUrl + ogImage} />
        <link rel="canonical" href={canonicalUrl + path} />
        <link rel="alternate" href={canonicalUrl + path} hrefLang="x-default"/>
        <link rel="alternate" href={canonicalUrl + path + '/de'} hrefLang="de"/>
      </Head>
      <div className="w-full min-h-full bg-img bg-imgcolor bg-imgheight bg-top max-w-img bg-no-repeat">
        <div className="mx-auto w-3/4 max-w-4xl">
          <LanguageSwitcher />
          <Header />
          <main className="mt-460px md:mt-560px text-center font-text text-xl">
            <article>
              <h3 className="font-header font-bold text-2.5xl">{t('making_of_title')}</h3>
              <p className="mt-20">{t('making_of_daniel')}</p>
              <Vimeo videoId={546443680} />
            </article>
            <article>
              <p className="mt-20">{t('making_of_fotos')}</p>
              <MakingOfImage name="making-of-01.jpeg" alt="camera" />
              <MakingOfImage name="making-of-02.jpeg" alt="huge story" />
              <MakingOfImage name="making-of-03.jpeg" alt="filming" />
              <MakingOfImage name="making-of-04.jpeg" alt="scene" />
              <MakingOfImage name="making-of-05.jpeg" alt="hug" />
              <MakingOfImage name="making-of-06.jpeg" alt="filming" />
            </article>
            <p className="mt-10">
              <Link href='/'>{ t('back') }</Link>
            </p>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
