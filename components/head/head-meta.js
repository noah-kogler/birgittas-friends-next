import ogImage from "../../public/images/sunset.png";
import { canonicalUrl } from "../../site-config";
import { useCommonTranslation } from "../../tools/i18n";

export async function getStaticProps() {
  return {
    props: {
      ogImagePath: canonicalUrl + ogImage,
    },
  };
}

export default function HeadMeta({ogImagePath}) {
  const { t } = useCommonTranslation();

  return (
    <>
      <meta name="description" content={t('meta_description')} />
      <meta name="author" content={t('meta_author')} />
      <meta property="og:title" content={t('title')} />
      <meta property="og:type" content="video.movie" />
      <meta property="og:image" content={ogImagePath} />
    </>
  );
}