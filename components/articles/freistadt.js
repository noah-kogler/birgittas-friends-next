import { Trans } from "next-i18next";
import { useCommonTranslation } from "../../tools/i18n";

export default function Freistadt() {
  const { t } = useCommonTranslation();

  return (
    <article id="freistadt" className="mt-20">
      <h3 className="font-header font-bold text-2.5xl">
        <Trans i18nKey="freistadt_title">
          <a href="https://www.filmfestivalfreistadt.at/2021/?site=movie&pId=3340" />
        </Trans>
      </h3>
      <p className="mt-6">
        <span className="font-bold">{t('freistadt_date')}</span><br/>
        <Trans i18nKey="freistadt_location">
          <a href="https://www.kino-freistadt.at/" />
        </Trans>
        <br/>
        <span className="italic text-sm">{t('freistadt_info')}</span>
      </p>
      <p>
        <a href="https://reservierung.kino-freistadt.at/">{t('freistadt_ticktes')}</a>
      </p>
    </article>
  );
}