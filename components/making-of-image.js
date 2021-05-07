import Image from "next/image";

export default function MakingOfImage({name, alt}) {
  return (
    <div className="mt-8">
      <Image
        src={`/images/making-of/${name}`}
        alt={alt}
        width={800}
        height={533}
      />
    </div>
  );
}