import Link from "next/link";
import { useCommonTranslation } from "../tools/i18n";

export default function Header() {
  const { t } = useCommonTranslation();
  
  return (
    <header className="flex items-center flex-col font-header">
      <div className="mt-80px sm:mt-40px md:mt-80px md:w-auto flex items-start md:items-end flex-col">
        <h1 className="mx-8 sm:mx-0 text-4xl sm:text-7xl leading-tight">
          <Link href="/">
            <a className="no-underline">
              { t('title') }
            </a>
          </Link>
        </h1>
        <div className="mx-8 sm:mx-0 flex items-baseline">
          <div className="w-4 h-4 ml-2 md:ml-0 mr-5 bg-black" />
          <h2 className="text-xl sm:text-2.5xl">
            <Link href="/">
              <a className="no-underline">
                { t('subtitle') }
              </a>
            </Link>
          </h2>
        </div>
      </div>
    </header>
  );
}