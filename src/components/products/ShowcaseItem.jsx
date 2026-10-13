import ProductPrice from "../ui/ProductPrice";
import ProductRating from "../ui/ProductRating";

export default function ShowcaseItem({
  product,
  showRating = false,
  showCategory = true,
}) {
  return (
    <article className="flex min-w-0 items-center gap-3">
      <a
        href={product.href ?? "#"}
        className={`h-18.75 w-18.75 shrink-0 overflow-hidden rounded-store ${
          showRating ? "h-20 w-20 bg-brand-light p-2" : ""
        }`}
        aria-label={`View ${product.name}`}
      >
        <img
          src={product.image}
          alt={product.name}
          width={75}
          height={75}
          loading="lazy"
          className="h-full w-full object-contain"
        />
      </a>

      <div className="min-w-0 flex-1">
        <a href={product.href ?? "#"} className="group">
          <h3
            className={`line-clamp-2 font-medium text-ink transition-colors group-hover:text-brand ${
              showRating ? "text-base" : "text-sm"
            }`}
          >
            {product.name}
          </h3>
        </a>

        {showCategory && product.category && (
          <a
            href={product.categoryHref ?? "#"}
            className="mt-1 inline-block text-xs text-muted hover:text-brand"
          >
            {product.category}
          </a>
        )}

        {showRating && (
          <div className="mt-1">
            <ProductRating rating={product.rating ?? 5} />
          </div>
        )}

        <ProductPrice
          price={product.price}
          originalPrice={product.originalPrice}
          className="mt-1 gap-2 text-sm"
        />
      </div>
    </article>
  );
}
