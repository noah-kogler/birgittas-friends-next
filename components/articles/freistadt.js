import { Trans } from "next-i18next";
import Image from "next/image";

export default function Freistadt() {
  return (
    <article id="freistadt" className="mt-20">
      <h3 className="font-header font-bold text-2.5xl">
        <Trans i18nKey="freistadt_title">
          <a href="https://www.filmfestivalfreistadt.at/2021/?site=movie&pId=3340" />
        </Trans>
      </h3>
      <p className="mt-6">
        <Trans i18nKey="freistadt_text" />
      </p>
      <Image
        src="/images/freistadt.jpg"
        alt="Freistadt"
        width={896}
        height={597}
      />
    </article>
  );
}