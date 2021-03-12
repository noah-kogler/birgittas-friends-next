import Link from "next/link";
import { useRouter } from "next/router";
import { useCommonTranslation } from "../tools/i18n";

export default function LanguageSwitcher() {
  const router = useRouter();
  const { t } = useCommonTranslation();

  return (
    <div className="float-right mt-2">
      <Link href={router.basePath} locale={router.locale === 'en' ? 'de' : 'en'}>
        <button className="underline">{t('change-locale')}</button>
      </Link>
    </div>
  );
}