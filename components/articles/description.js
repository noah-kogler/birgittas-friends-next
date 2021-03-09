import { useCommonTranslation } from "../../tools/i18n";

export default function Description() {
  const { t } = useCommonTranslation();

  return (
    <article id="description">
      <p>{t('description_part1')}</p>
      <p>{t('description_part2')}</p>
      <p>{t('description_part3')}</p>
    </article>
  );
}