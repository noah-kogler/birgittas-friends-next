import { useCommonTranslation } from "../../tools/i18n";
import { Trans } from "react-i18next";

export default function Premiere() {
  const { t } = useCommonTranslation();

  return (
    <article id="premiere" className="mt-20">
      <h3 className="font-header font-bold text-2.5xl">
        <Trans i18nKey="premiere_title">
          <a href="https://www.crossingeurope.at/film/birgittas_friends" />
        </Trans>
      </h3>
      <p className="mt-6">
        <span className="font-bold">{t('premiere_date')}</span><br/>
        <Trans i18nKey="premiere_location">
          <a href="https://www.google.com/maps/place/O%C3%96+Kulturquartier/@48.3022862,14.2885442,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xb366eb3ebf4db9a4!8m2!3d48.3022862!4d14.2907329" />
        </Trans>
        <br/>
        <span className="italic text-sm">{t('premiere_info')}</span>
      </p>
      <p>
        <a href="https://ticketing.crossingeurope.at/seatselection/?show_id=101087&location_id=11">{t('premiere_tickets')}</a>
      </p>
    </article>
  );
}