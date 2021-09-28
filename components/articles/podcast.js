import { useCommonTranslation } from "../../tools/i18n";
import { Trans } from "react-i18next";

export default function Podcast() {
  const { t } = useCommonTranslation();

  return (
    <article id="podcast" className="mt-20">
      <h3 className="font-header font-bold text-2.5xl">{t('podcast_title')}</h3>
      <p className="mt-6">
        <Trans i18nKey="podcast_text" />
      </p>
      <p>
        <iframe
          src="https://anchor.fm/erwan-borek/embed/episodes/17---Birgittas-Friends-Talk-mit-Christian-Kogler-e17un43/a-a6jhlsj"
          height="102px"
          width="400px"
          frameBorder="0"
          scrolling="no"
          className="mx-auto" />
      </p>
      <p>
        <Trans i18nKey="podcast_text2">
          <a href="https://podcasts.apple.com/at/podcast/filmseiterl/id1519078125" />
          <a href="https://open.spotify.com/episode/333tA0RY0qfmTFG4avLB7X?si=WlT6fACbQOiSWttyGh4Zpw&dl_branch=1" />
        </Trans>
      </p>
    </article>
  );
}