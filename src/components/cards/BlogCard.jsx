
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
    <article className="w-[280px] shrink-0 overflow-hidden
      rounded-xl border border-gray-200 bg-white sm:w-[300px]">

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
          className="h-48 w-full object-cover transition duration-300
            hover:scale-105"
        />
      </a>

      <div className="p-5">
        <a
          href={href}
          className="text-sm font-medium text-amber-600
            hover:text-amber-700"
        >
          {category}
        </a>

        <h3 className="mt-3 text-base font-semibold leading-6 text-gray-900">
          <a
            href={href}
            className="transition hover:text-amber-600"
          >
            {title}
          </a>
        </h3>

        <p className="mt-4 text-xs leading-5 text-gray-500">
          By <span className="font-medium text-gray-700">{author}</span>
          {" / "}
          <time dateTime={dateTime}>{date}</time>
        </p>
      </div>
    </article>
  );
}
