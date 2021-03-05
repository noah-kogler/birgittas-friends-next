import Head from 'next/head'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Trans } from 'react-i18next';
import ogImage from './../public/images/sunset.png'
import styles from '../styles/Home.module.css'

export async function getStaticProps({ locale }) {
  return {
    props: {
    ...await serverSideTranslations(locale, ['common'])
    }
  };
}

export default function Home(host) {
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
        <meta property="og:image" content={ogImage} />
        <link rel="canonical" href="https://www.birgittasfriends.com" />
      </Head>
      <header>
        <Link href='/' locale={router.locale === 'en' ? 'de' : 'en'}>
          <button>{t('change-locale')}</button>
        </Link>
        <h1 className={styles.title}>{t('title')}</h1>
        <h2 className={styles.description}>{t('subtitle')}</h2>
      </header>
      <main className={styles.main}>
        <article id="description">
          <p>{t('description_part1')}</p>
          <p>{t('description_part2')}</p>
          <p>{t('description_part3')}</p>
        </article>

        <article id="trailer">
          <iframe
            src="https://player.vimeo.com/video/516397484?title=0&byline=0"
            className={styles.trailer}
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen />
          <script src="https://player.vimeo.com/api/player.js" />
        </article>

        <article id="crowdfunding">
          <h3>{t('crowdfunding_header')}</h3>
          <Trans i18nKey="crowdfunding_part_1">
            <a href="http://kck.st/2ZV4ZHD" title={t('crowdfunding_link_title')}/>
          </Trans>
          <p>{t('crowdfunding_part_2')}</p>
        </article>
      </main>
      <footer className={styles.footer}>
        <div>{t('contact_header')}</div>
        <div>
          {t('contact_name')}<br/>
          {t('contact_company')}<br/>
          {t('contact_street')}<br/>
          {t('contact_city')}<br/>
          {t('contact_country')}
        </div>
      </footer>
    </>
  )
}
