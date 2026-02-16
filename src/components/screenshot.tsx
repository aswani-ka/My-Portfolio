import Image from "next/image";

export function Screenshot({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <figure className="my-10">
      <div className="relative aspect-20/10 overflow-hidden rounded-3xl border bg-white/5 shadow-sm dark:border-white/10">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 900px"
        />
      </div>
      <figcaption className="mt-3 text-sm text-gray-600 dark:text-gray-300">
        {alt}
      </figcaption>
    </figure>
  );
}
