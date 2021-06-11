import { useCommonTranslation } from "../../tools/i18n";
import Link from "next/link";

export default function MakingOf() {
  const { t } = useCommonTranslation();

  return (
    <article id="making-of" className="mt-20">
      <h3 className="font-header font-bold text-2.5xl">{t('making_of_title')}</h3>
      <p className="mt-6">
        {t('making_of_text')}<Link href='/making-of'>{ t('making_of_link') }</Link>!
      </p>
    </article>
  );
}