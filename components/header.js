import { useCommonTranslation } from "../tools/i18n";

export default function Header() {
  const { t } = useCommonTranslation();
  
  return (
    <header className="flex items-center flex-col font-header">
      <div className="mt-40px md:mt-80px w-80 md:w-auto flex items-start md:items-end flex-col">
        <h1 className="text-7xl leading-tight">{t('title')}</h1>
        <div className="flex items-baseline">
          <div className="w-4 h-4 ml-2 md:ml-0 mr-5 bg-black" />
          <h2 className="text-2.5xl">{t('subtitle')}</h2>
        </div>
      </div>
    </header>
  );
}