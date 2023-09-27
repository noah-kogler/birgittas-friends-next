import { useCommonTranslation } from "../../tools/i18n";
import { Trans } from "react-i18next";

export default function NextScreening() {
  const { t } = useCommonTranslation();

  return (
    <article id="next-screening" className="mt-20">
      <h3 className="font-header font-bold text-2.5xl">{t('next_screening_title')}</h3>
      <p className="mt-6">
        <Trans i18nKey="next_screening_text">
          <span className="font-bold" />
          <span className="font-bold" />
          <a href="https://www.dieselkino.at/index.php?cine=09&id=709" title={t('next_screening_location')} className="font-bold" />
        </Trans>
      </p>
      <p>
        <a href="https://www.dieselkino.at/index.php?cine=09&id=204&movie=8452&source=500"><Trans i18nKey="next_screening_details" /></a>
      </p>
    </article>
  );
}