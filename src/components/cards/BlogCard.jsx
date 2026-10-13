export default function BlogCard({
  image,
  imageAlt,
  category,
  title,
  author,
  date,
  dateTime,
  href = "#",
}) {
  return (
    <article className="w-[260px] shrink-0 overflow-hidden rounded-card border border-border bg-surface sm:w-[300px]">
      <a
        href={href}
        aria-label={`Read article: ${title}`}
        className="block overflow-hidden"
      >
        <img
          src={image}
          alt={imageAlt}
          width="300"
          loading="lazy"
          className="h-40 w-full object-cover transition duration-300 hover:scale-105 sm:h-48"
        />
      </a>

      <div className="p-4 sm:p-5">
        <a
          href={href}
          className="text-xs font-medium text-brand hover:text-accent sm:text-sm"
        >
          {category}
        </a>

        <h3 className="mt-3 text-sm font-semibold leading-6 text-ink sm:text-base">
          <a href={href} className="transition hover:text-brand">
            {title}
          </a>
        </h3>

        <p className="mt-4 text-[11px] leading-5 text-muted sm:text-xs">
          By <span className="font-medium text-ink">{author}</span>
          {" / "}
          <time dateTime={dateTime}>{date}</time>
        </p>
      </div>
    </article>
  );
}
