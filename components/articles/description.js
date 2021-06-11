import { useCommonTranslation } from "../../tools/i18n";
import Link from "next/link";

export default function Description() {
  const { t } = useCommonTranslation();

  return (
    <article id="description">
      <p>{t('description_part1')}</p>
      <p>{t('description_part2')}</p>
      <p>
        {t('description_part3')}
        (<Link href='/contact'>{ t('contact_email') }</Link>).
      </p>
    </article>
  );
}