import { useCommonTranslation } from "../../tools/i18n";

export default function Credits() {
  const { t } = useCommonTranslation();

  return (
    <article id="credits" className="mt-20">
      <h3 className="font-header font-bold text-2.5xl">{t('credits_header')}</h3>
      <div className="mt-10 md:flex">
        <div className="md:w-1/2 md:text-right md:pr-4 font-thin">{t('credits_concept_production')}</div>
        <div className="md:w-1/2 md:text-left md:pr-2 pt-2 md:pt-0">
          <a className="inline-block align-middle" href="http://terafm.ph-ooe.at/ph-ooe/service/medien/ph-tv.html"
             title="PH TV"><img className="w-16" src="/images/logos/ph_tv.png" alt="PH TV"/></a>
          <a className="ml-2 md:ml-6" href="http://www.christiankogler.at/" title="christiankogler.at">Christian
            Kogler</a>
        </div>
      </div>
      <div className="mt-10 md:flex">
        <div className="md:w-1/2 md:text-right md:pr-4 font-thin">{t('credits_edit')}</div>
        <div className="md:w-1/2 md:text-left md:pr-2">Christian Kogler, Eric Schirl</div>
      </div>
      <div className="mt-10 md:flex">
        <div className="md:w-1/2 md:text-right md:pr-4 font-thin">{t('credits_camera')}</div>
        <div className="md:w-1/2 md:text-left md:pr-2">
          <a className="inline-block align-middle" href="https://menielias.com/" title="Unicorn Films"><img
            className="w-20" src="/images/logos/unicorn_films.png" alt="Unicorn Films"/></a>
          <span className="ml-2">Meni Elias</span>
        </div>
      </div>
      <div className="mt-10 md:flex">
        <div className="md:w-1/2 md:text-right md:pr-4 font-thin">{t('credits_sound')}</div>
        <div className="md:w-1/2 md:text-left md:pr-2">
          <a className="inline-block align-middle" href="https://www.luftrausch.at/" title="luftrausch.at"><img
            className="w-16" src="/images/logos/luftrausch.svg" alt="luftrausch"/></a>
          <span className="md:ml-6">Thomas Voglreiter</span>
        </div>
      </div>
      <div className="mt-10 md:flex">
        <div className="md:w-1/2 md:text-right md:pr-4 font-thin">{t('credits_subtitles')}</div>
        <div className="md:w-1/2 md:text-left md:pr-2 pt-2 md:pt-0">
          <a className="inline-block align-middle" href="http://www.sesamedia.at/" title="sesamedia.at"><img
            className="w-20" src="/images/logos/sesamedia.png" alt="sesamedia"/></a>
          <span className="ml-2">Udo Somma</span>
        </div>
      </div>
      <div className="mt-10 md:flex">
        <div className="md:w-1/2 md:text-right md:pr-4 font-thin">{t('credits_music')}</div>
        <div className="md:w-1/2 md:text-left md:pr-2"><a href="https://www.iamdanielmark.com/">Daniel Mark</a>
        </div>
      </div>
      <div className="mt-10 md:flex">
        <div className="md:w-1/2 md:text-right md:pr-4 font-thin">{t('credits_post_production')}</div>
        <div className="md:w-1/2 md:text-left md:pr-2">Flynn Wiesenberger</div>
      </div>
      <div className="mt-10 font-thin">
        {t('credits_post_support')}
      </div>
      <div className="mt-4">
        Birgitta Kogler, Noah Stern, Bob Mark, Michal Mark, Sigalith, Mohammed Jaradat, Ingrid Jaradat, Tomer
        Blayer,
        Christoph Haderer, Roland Freinschlag, <a href="https://www.nataliehalla.com/" title="nataliehalla.com">Natalie
        Halla</a>,
        Josef Kogler, Noah Kogler, Eva Thue-Vold, Wendy Reid, Margit und Erich Maunz, Markus Vorauer, Maria
        Scheller
      </div>
      <div className="flex flex-col justify-center sm:flex-row mt-4">
        <a href="https://www.land-oberoesterreich.gv.at/kultur.htm" title="Land Oberösterreich - Kultur">
          <img className="w-24 m-4" src="/images/logos/kultur_land_ooe.png" alt="Land Oberösterreich - Kultur"/>
        </a>
        <a href="https://www.linz.at/kultur/index.php" title="Linz - Kultur">
          <img className="w-24 m-4" src="/images/logos/linz_kultur.png" alt="Linz - Kultur"/>
        </a>
        <a href="https://www.wasns.org/" title="Wahat al-Salam Neve Shalom">
          <img className="w-24 m-4" src="/images/logos/neve_shalom.png" alt="Wahat al-Salam Neve Shalom"/>
        </a>
      </div>
    </article>
  );
}