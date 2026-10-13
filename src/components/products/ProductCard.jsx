import { Eye, Heart, Repeat2, ShoppingBag, Star } from "lucide-react";

export default function ProductCard({ product, onAddToCart }) {
  const {
    name,
    category,
    image,
    hoverImage,
    price,
    oldPrice,
    badge,
    rating = 0,
  } = product;

  return (
    <article className="group overflow-hidden rounded-card border border-border bg-surface">
      <div className="relative overflow-hidden bg-brand-light">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="aspect-square w-full object-contain transition-opacity duration-300 group-hover:opacity-0"
        />

        {hoverImage && (
          <img
            src={hoverImage}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 aspect-square w-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        )}

        {badge && (
          <span className="absolute left-3 top-3 rounded-control bg-accent px-2 py-1 text-xs font-semibold text-brand">
            {badge}
          </span>
        )}

        <div className="absolute right-2 top-2 flex translate-x-2 flex-col gap-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100 focus-within:translate-x-0 focus-within:opacity-100">
          <button
            type="button"
            aria-label={`Add ${name} to wishlist`}
            className="rounded-full bg-surface p-2 shadow hover:bg-accent-light"
          >
            <Heart size={17} />
          </button>

          <button
            type="button"
            aria-label={`View ${name}`}
            className="rounded-full bg-surface p-2 shadow hover:bg-accent-light"
          >
            <Eye size={17} />
          </button>

          <button
            type="button"
            aria-label={`Compare ${name}`}
            className="rounded-full bg-surface p-2 shadow hover:bg-accent-light"
          >
            <Repeat2 size={17} />
          </button>

          <button
            type="button"
            aria-label={`Add ${name} to cart`}
            onClick={() => onAddToCart?.(product)}
            className="rounded-full bg-surface p-2 shadow hover:bg-accent-light"
          >
            <ShoppingBag size={17} />
          </button>
        </div>
      </div>

      <div className="space-y-2 p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-muted">
          {category}
        </p>

        <h3 className="line-clamp-2 text-sm font-medium text-ink">{name}</h3>

        <div
          className="flex gap-0.5 text-rating"
          aria-label={`Rated ${rating} out of 5`}
        >
          {Array.from({ length: 5 }, (_, index) => (
            <Star
              key={index}
              size={14}
              fill={index < rating ? "currentColor" : "none"}
              strokeWidth={1.5}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="font-semibold text-ink">
            ${Number(price).toFixed(2)}
          </span>

          {oldPrice != null && (
            <del className="text-sm text-gray-medium">
              ${Number(oldPrice).toFixed(2)}
            </del>
          )}
        </div>
      </div>
    </article>
  );
}
