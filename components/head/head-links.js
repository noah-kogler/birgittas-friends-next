import { canonicalUrl } from "../../site-config";

export default function HeadLinks () {
  return (
    <>
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" href={canonicalUrl} hrefLang="x-default"/>
      <link rel="alternate" href={canonicalUrl + '/de'} hrefLang="de"/>
    </>
  );
}