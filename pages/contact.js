import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useCommonTranslation } from "../tools/i18n";
import Head from "next/head";
import LanguageSwitcher from "../components/language-switcher";
import Header from "../components/header";
import ContactForm from "../components/contact-form";
import { useRouter } from "next/router";
import ogImage from "../public/images/sunset.png";
import { canonicalUrl } from "../site.config";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Link from "next/link";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...await serverSideTranslations(locale, ['common']),
    },
  };
}

export default function Home() {
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
            <GoogleReCaptchaProvider reCaptchaKey="6LdcxHsaAAAAACeqgJqn5vRil4eSGw_3SZbptzHi" language={router.locale}>
              <ContactForm />
              <p className="mt-10">
                <Link href='/'>{ t('back') }</Link>
              </p>
            </GoogleReCaptchaProvider>
          </main>
          <footer className="pb-20 mt-20 font-text text-center text-sm" />
        </div>
      </div>
    </>
  );
}
