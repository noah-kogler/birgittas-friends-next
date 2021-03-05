import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import styles from '../styles/Home.module.css'

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  }
})

export default function Home() {
  const router = useRouter()
  const { t } = useTranslation('common')

  return (
    <div className={styles.container}>
      <Head>
        <title>{t('title')}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={t('meta_description')} />
        <meta name="author" content={t('meta_author')} />
        <meta property="og:title" content={t('title')} />
        <meta property="og:type" content="video.movie" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{t('title')}</h1>
        <p className={styles.description}>{t('subtitle')}</p>

        <Link href='/' locale={router.locale === 'en' ? 'de' : 'en'}>
          <button>{t('change-locale')}</button>
        </Link>

        <div className={styles.grid}>
          <div>{t('meta_description')}</div>
          <Image src='/images/sunset.png' width={100} height={50} />
        </div>
      </main>

      <footer className={styles.footer}>
        <div>{t('contact')}</div>
        <div>
          {t('contact_name')}<br/>
          {t('contact_company')}<br/>
          {t('contact_street')}<br/>
          {t('contact_city')}<br/>
          {t('contact_country')}
        </div>
      </footer>
    </div>
  )
}
