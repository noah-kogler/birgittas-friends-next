import Image from "next/image";
import { Trans } from "next-i18next";
import Link from "next/link";
import { useCommonTranslation } from "../../tools/i18n";

export default function Steyr() {
  const { t } = useCommonTranslation();

  return (
    <article id="steyr" className="mt-20">
      <h3 className="font-header font-bold text-2.5xl">
        <Trans i18nKey="steyr_title" />
      </h3>
        <p className="mt-6">
          <Trans i18nKey="steyr_text" />
        </p>
        <p className="">
          <Trans i18nKey="steyr_cite_title" />&nbsp;
          <Link href='/contact'>{ t('steyr_link_title') }</Link>
          <Trans i18nKey="steyr_cite_title_end" />
        </p>
        <p className="italic">
          <Trans i18nKey="steyr_cite" />
        </p>
        <Image
          src={`/images/steyr.png`}
          alt="Steyr"
          width={896}
          height={417}
        />
    </article>
  );
}