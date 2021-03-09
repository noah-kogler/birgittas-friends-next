import { Trans } from "react-i18next";
import { useCommonTranslation } from "../../tools/i18n";

export default function Crowdfunding() {
  const { t } = useCommonTranslation();

  return (
    <article id="crowdfunding" className="mt-20">
      <h3 className="font-header font-bold text-2.5xl">{t('crowdfunding_header')}</h3>
      <p className="mt-10">
        <Trans i18nKey="crowdfunding_part_1">
          <a href="http://kck.st/2ZV4ZHD" title={t('crowdfunding_link_title')}/>
        </Trans>
      </p>
      <p>{t('crowdfunding_part_2')}</p>
    </article>
  );
}