
import { ArrowRight } from "lucide-react";

export default function SummerPromotion() {
  return (
    <section
      aria-label="Summer collection promotion"
      className="relative isolate flex min-h-[320px] items-center justify-center
        overflow-hidden rounded-xl bg-gray-200 sm:min-h-[380px]"
    >
      <img
        src="https://i.postimg.cc/G2xsTd3b/cta-banner.jpg"
        alt="Summer fashion collection"
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />

      <div className="absolute inset-0 -z-10 bg-black/35" />

      <div className="px-5 py-10 text-center text-white">
        <p className="mb-3 inline-block rounded-full bg-white/90 px-4 py-2
          text-sm font-semibold text-gray-900">
          25% Discount
        </p>

        <h2 className="text-2xl font-bold sm:text-3xl">
          Summer Collection
        </h2>

        <p className="mt-3 text-base font-medium">
          Starting at $10
        </p>

        <a
          href="/shop"
          className="mt-6 inline-flex items-center gap-2 rounded-md
            bg-amber-500 px-6 py-3 text-sm font-semibold text-white
            transition hover:bg-amber-600 focus-visible:outline-none
            focus-visible:ring-2 focus-visible:ring-white
            focus-visible:ring-offset-2 focus-visible:ring-offset-amber-500"
        >
          Shop Now
          <ArrowRight size={17} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
