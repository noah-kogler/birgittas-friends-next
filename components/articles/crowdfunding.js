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
          <br />
          <a href="#premiere" />
        </Trans>
      </p>
      <p>
        <div className="mt-10 font-thin">
          {t('crowdfunding_support_title')}
        </div>
        <div className="mt-4">
          <Trans i18nKey="crowdfunding_support">
            <a href="https://wasns.org/-de-" title={t('crowdfunding_link_german_friends_title')} />
            <a href="https://wasns.org/-schweizer-freunde-und-freundinnen-" title={t('crowdfunding_link_swiss_friends_title')} />
            <a href="http://wasns.at" title={t('crowdfunding_link_austrian_friends_title')} />
          </Trans>
        </div>
      </p>
    </article>
  );
}