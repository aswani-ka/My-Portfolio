import Link from "next/link";

export function SectionHeading({
  title,
  subtitle,
  href,
  linkText = "View all →",
}: {
  title: string;
  subtitle?: string;
  href?: string;
  linkText?: string;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between tracking-wider">
      <div>
        <h2 className="text-2xl font-semibold sm:text-3xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 max-w-2xl text-md text-gray-600 dark:text-gray-300">
            {subtitle}
          </p>
        )}
      </div>

      {href && (
        <Link
          href={href}
          className="text-sm text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
        >
          {linkText}
        </Link>
      )}
    </div>
  );
}
