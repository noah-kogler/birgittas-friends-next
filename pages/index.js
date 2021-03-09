import Head from 'next/head'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Trans } from 'react-i18next';
import ogImage from './../public/images/sunset.png'

export async function getStaticProps({ locale }) {
  const canonicalUrl = 'https://www.birgittasfriends.com';

  return {
    props: {
      ...await serverSideTranslations(locale, ['common']),
      canonicalUrl,
      ogImagePath: canonicalUrl + ogImage,
    },
  };
}

export default function Home({canonicalUrl, ogImagePath}) {
  const router = useRouter()
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={t('meta_description')} />
        <meta name="author" content={t('meta_author')} />
        <meta property="og:title" content={t('title')} />
        <meta property="og:type" content="video.movie" />
        <meta property="og:image" content={ogImagePath} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" href={canonicalUrl} hrefLang="x-default"/>
        <link rel="alternate" href={canonicalUrl + '/de'} hrefLang="de"/>
      </Head>
      <div className="w-full min-h-full bg-img bg-imgcolor bg-imgheight bg-top max-w-img bg-no-repeat">
        <div className="mx-auto w-3/4 max-w-4xl">
          <div className="float-right mt-2">
            <Link href='/' locale={router.locale === 'en' ? 'de' : 'en'}>
              <button className="underline">{t('change-locale')}</button>
            </Link>
          </div>
          <header className="flex items-center flex-col font-header">
            <div className="mt-40px md:mt-80px w-80 md:w-auto flex items-start md:items-end flex-col">
              <h1 className="text-7xl leading-tight">{t('title')}</h1>
              <div className="flex items-baseline">
                <div className="w-4 h-4 ml-2 md:ml-0 mr-5 bg-black" />
                <h2 className="text-2.5xl">{t('subtitle')}</h2>
              </div>
            </div>
          </header>
          <main className="mt-460px md:mt-560px text-center font-text text-xl">
            <article id="description">
              <p>{t('description_part1')}</p>
              <p>{t('description_part2')}</p>
              <p>{t('description_part3')}</p>
            </article>

            <article id="trailer">
              <div className="mt-20 w-full bg-black text-white">
                <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                  <iframe
                    src="https://player.vimeo.com/video/516397484?title=0&byline=0"
                    style={{ position: "absolute", top: 0, left: 0, width: '100%', height: '100%' }}
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen />
                </div>
                <script src="https://player.vimeo.com/api/player.js" />
              </div>
            </article>

            <article id="crowdfunding" className="mt-20">
              <h3 className="font-header font-bold text-2.5xl">{t('crowdfunding_header')}</h3>
              <p className="mt-10">
                <Trans i18nKey="crowdfunding_part_1">
                  <a href="http://kck.st/2ZV4ZHD" title={t('crowdfunding_link_title')}/>
                </Trans>
              </p>
              <p>{t('crowdfunding_part_2')}</p>
            </article>

            <article id="credits" className="mt-20">
              <h3 className="font-header font-bold text-2.5xl">{t('credits_header')}</h3>
              <div className="mt-10 md:flex">
                <div className="md:w-1/2 md:text-right md:pr-4 font-thin">{t('credits_concept_production')}</div>
                <div className="md:w-1/2 md:text-left md:pr-2 pt-2 md:pt-0">
                  <a className="inline-block align-middle" href="http://terafm.ph-ooe.at/ph-ooe/service/medien/ph-tv.html"
                     title="PH TV"><img className="w-16" src="/images/logos/ph_tv.png" alt="PH TV"/></a>
                  <a className="ml-2 md:ml-6" href="http://www.christiankogler.at/" title="christiankogler.at">Christian
                    Kogler</a>
                </div>
              </div>
              <div className="mt-10 md:flex">
                <div className="md:w-1/2 md:text-right md:pr-4 font-thin">{t('credits_edit')}</div>
                <div className="md:w-1/2 md:text-left md:pr-2">Christian Kogler, Eric Schirl</div>
              </div>
              <div className="mt-10 md:flex">
                <div className="md:w-1/2 md:text-right md:pr-4 font-thin">{t('credits_camera')}</div>
                <div className="md:w-1/2 md:text-left md:pr-2">
                  <a className="inline-block align-middle" href="https://menielias.com/" title="Unicorn Films"><img
                    className="w-20" src="/images/logos/unicorn_films.png" alt="Unicorn Films"/></a>
                  <span className="ml-2">Meni Elias</span>
                </div>
              </div>
              <div className="mt-10 md:flex">
                <div className="md:w-1/2 md:text-right md:pr-4 font-thin">{t('credits_sound')}</div>
                <div className="md:w-1/2 md:text-left md:pr-2">
                  <a className="inline-block align-middle" href="https://www.luftrausch.at/" title="luftrausch.at"><img
                    className="w-16" src="/images/logos/luftrausch.svg" alt="luftrausch"/></a>
                  <span className="md:ml-6">Thomas Voglreiter</span>
                </div>
              </div>
              <div className="mt-10 md:flex">
                <div className="md:w-1/2 md:text-right md:pr-4 font-thin">{t('credits_subtitles')}</div>
                <div className="md:w-1/2 md:text-left md:pr-2 pt-2 md:pt-0">
                  <a className="inline-block align-middle" href="http://www.sesamedia.at/" title="sesamedia.at"><img
                    className="w-20" src="/images/logos/sesamedia.png" alt="sesamedia"/></a>
                  <span className="ml-2">Udo Somma</span>
                </div>
              </div>
              <div className="mt-10 md:flex">
                <div className="md:w-1/2 md:text-right md:pr-4 font-thin">{t('credits_music')}</div>
                <div className="md:w-1/2 md:text-left md:pr-2"><a href="https://www.iamdanielmark.com/">Daniel Mark</a>
                </div>
              </div>
              <div className="mt-10 md:flex">
                <div className="md:w-1/2 md:text-right md:pr-4 font-thin">{t('credits_post_production')}</div>
                <div className="md:w-1/2 md:text-left md:pr-2">Flynn Wiesenberger</div>
              </div>
              <div className="mt-10 font-thin">
                {t('credits_post_support')}
              </div>
              <div className="mt-4">
                Birgitta Kogler, Noah Stern, Bob Mark, Michal Mark, Sigalith, Mohammed Jaradat, Ingrid Jaradat, Tomer
                Blayer,
                Christoph Haderer, Roland Freinschlag, <a href="https://www.nataliehalla.com/" title="nataliehalla.com">Natalie
                Halla</a>,
                Josef Kogler, Noah Kogler, Eva Thue-Vold, Wendy Reid, Margit und Erich Maunz, Markus Vorauer, Maria
                Scheller
              </div>
              <div className="flex justify-center mt-4">
                <a href="https://www.land-oberoesterreich.gv.at/kultur.htm" title="Land Oberösterreich - Kultur">
                  <img className="w-24 m-4" src="/images/logos/kultur_land_ooe.png" alt="Land Oberösterreich - Kultur"/>
                </a>
                <a href="https://www.linz.at/kultur/index.php" title="Linz - Kultur">
                  <img className="w-24 m-4" src="/images/logos/linz_kultur.png" alt="Linz - Kultur"/>
                </a>
                <a href="https://www.wasns.org/" title="Wahat al-Salam Neve Shalom">
                  <img className="w-24 m-4" src="/images/logos/neve_shalom.png" alt="Wahat al-Salam Neve Shalom"/>
                </a>
              </div>
            </article>
          </main>
          <footer className="pb-20 mt-20 font-text text-center text-sm">
            <div className="md:flex">
              <div className="md:w-1/2 md:text-right md:pr-2 font-thin">{t('contact_header')}</div>
              <div className="md:w-1/2 md:text-left md:pr-2">
                {t('contact_name')}<br/>
                {t('contact_company')}<br/>
                {t('contact_street')}<br/>
                {t('contact_city')}<br/>
                {t('contact_country')}
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}