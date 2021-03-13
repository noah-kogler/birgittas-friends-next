import Link from "next/link";
import { useCommonTranslation } from "../tools/i18n";

export default function Footer() {
  const { t } = useCommonTranslation();

  return (
    <footer className="pb-20 mt-20 font-text text-center text-m">
      <div className="md:flex">
        <div className="md:w-1/2 md:text-right md:pr-2 font-thin">{t('contact_header')}</div>
        <div className="md:w-1/2 md:text-left md:pr-2">
          {t('contact_name')} (<Link href='/contact'>{ t('contact_email') }</Link>)<br/>
          {t('contact_company')}<br/>
          {t('contact_street')}<br/>
          {t('contact_city')}<br/>
          {t('contact_country')}
        </div>
      </div>
    </footer>
  );
}