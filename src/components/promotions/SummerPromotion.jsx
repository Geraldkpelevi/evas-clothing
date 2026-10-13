export default function SummerPromotion() {
  return (
    <section
      aria-label="Summer collection promotion"
      className="relative isolate flex min-h-[340px] items-center justify-center overflow-hidden rounded-xl bg-brand-light sm:min-h-[420px] lg:min-h-[496px]"
    >
      <img
        src="https://i.postimg.cc/G2xsTd3b/cta-banner.jpg"
        alt="Summer fashion collection"
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />

      <div className="absolute inset-0 -z-10 bg-white/10" />

      <div className="mx-4 w-[calc(100%-2rem)] max-w-[360px] rounded-md bg-white/75 px-4 py-6 text-center text-ink backdrop-blur-[2px] sm:px-10 sm:py-10">
        <p className="mb-2 inline-block rounded-md bg-ink px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-white sm:text-sm">
          25% Discount
        </p>

        <h2 className="text-xl font-bold leading-snug text-ink sm:text-3xl">
          Summer Collection
        </h2>

        <p className="mt-2 text-sm text-muted sm:text-lg">Starting @ $10</p>

        <a
          href="/shop"
          className="mt-3 inline-flex min-h-11 items-center justify-center px-3 text-sm font-bold uppercase text-muted underline-offset-4 transition hover:text-ink hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:text-base"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
}
