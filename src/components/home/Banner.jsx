
const bannerSlides = [
  {
    id: 1,
    image: "https://i.postimg.cc/V6Rrdsk1/banner-1.jpg",
    alt: "Women's latest fashion collection on sale",
    subtitle: "Trending Item",
    title: "Women's Latest Fashion Sale",
    price: "20.00",
    link: "/shop",
  },
  {
    id: 2,
    image: "https://i.postimg.cc/RFXhvPgZ/banner-2.jpg",
    alt: "Modern sunglasses collection",
    subtitle: "Trending Accessories",
    title: "Modern Sunglasses",
    price: "15.00",
    link: "/shop",
  },
  {
    id: 3,
    image: "https://i.postimg.cc/MTKZ37z2/banner-3.jpg",
    alt: "New summer fashion collection",
    subtitle: "Sale Offer",
    title: "New Fashion Summer Sale",
    price: "29.99",
    link: "/shop",
  },
];

function BannerSlide({ slide }) {
  const [whole, decimal] = slide.price.split(".");

  return (
    <article
      className="relative min-w-full snap-start overflow-hidden rounded-xl bg-gray-100"
    >
      <img
        src={slide.image}
        alt={slide.alt}
        className="h-64 w-full object-cover object-center sm:h-80 lg:h-[420px]"
        fetchPriority={slide.id === 1 ? "high" : "auto"}
      />

      <div className="absolute inset-0 flex items-center bg-black/10 px-5 sm:px-10 lg:px-16">
        <div className="max-w-md">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-orange-600 sm:text-sm">
            {slide.subtitle}
          </p>

          <h2 className="mb-4 max-w-sm text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {slide.title}
          </h2>

          <p className="mb-5 text-base text-gray-700 sm:text-lg">
            Starting at{" "}
            <span className="font-semibold text-gray-900">
              ${whole}.{decimal}
            </span>
          </p>

          <a
            href={slide.link}
            className="inline-flex items-center justify-center rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
          >
            Shop Now
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Banner() {
  return (
    <section
      aria-label="Featured promotions"
      className="px-4 py-5 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-2 [scrollbar-width:thin]"
          aria-label="Promotional slides"
        >
          {bannerSlides.map((slide) => (
            <BannerSlide key={slide.id} slide={slide} />
          ))}
        </div>
      </div>
    </section>
  );
}
