import { useCommonTranslation } from "../../tools/i18n";
import { Trans } from "react-i18next";
import Image from "next/image";

export default function Premiere() {
  const { t } = useCommonTranslation();

  return (
    <article id="premiere" className="mt-20">
      <h3 className="font-header font-bold text-2.5xl">{t('premiere_title')}</h3>
      <p className="mt-6">
        <Trans i18nKey="premiere_text">
          <a href="https://www.crossingeurope.at/film/birgittas_friends" />
        </Trans>
      </p>
      <Image
        src="/images/crossing_europe.jpg"
        alt="Crossing Europe"
        width={896}
        height={597}
      />
    </article>
  );
}