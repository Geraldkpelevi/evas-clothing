import { Eye, Heart, Repeat2, ShoppingBag } from "lucide-react";
import { newProducts } from "../../data/products";
import ProductPrice from "../ui/ProductPrice";
import ProductRating from "../ui/ProductRating";

function ProductActions({ product, onAction }) {
  const actions = [
    { label: "Add to wishlist", Icon: Heart, action: "wishlist" },
    { label: "Quick view", Icon: Eye, action: "view" },
    { label: "Compare product", Icon: Repeat2, action: "compare" },
    { label: "Add to cart", Icon: ShoppingBag, action: "cart" },
  ];

  return (
    <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100">
      {actions.map(({ label, Icon, action }) => (
        <button
          key={action}
          type="button"
          aria-label={`${label}: ${product.name}`}
          onClick={() => onAction?.(action, product)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-muted shadow-sm transition-colors hover:bg-brand hover:text-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          <Icon size={17} aria-hidden="true" />
        </button>
      ))}
    </div>
  );
}

function ProductCard({ product, onAction }) {
  const badgeClasses = {
    black: "bg-brand text-surface",
    pink: "bg-accent-light text-brand",
  };

  return (
    <article className="group min-w-0 overflow-hidden rounded-card border border-border bg-surface">
      <div className="relative aspect-[4/5] overflow-hidden bg-brand-light">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-contain transition-opacity duration-300 group-hover:opacity-0"
        />

        {product.hoverImage && (
          <img
            src={product.hoverImage}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        )}

        {product.badge && (
          <span
            className={`absolute left-3 top-3 rounded px-2 py-1 text-[10px] font-semibold sm:text-xs ${
              badgeClasses[product.badgeStyle] ?? "bg-accent-light text-brand"
            }`}
          >
            {product.badge}
          </span>
        )}

        <ProductActions product={product} onAction={onAction} />
      </div>

      <div className="p-3 sm:p-4">
        <p className="text-[10px] font-medium uppercase tracking-wide text-muted sm:text-xs">
          {product.category}
        </p>

        <h3 className="mt-2 line-clamp-2 min-h-9 text-xs font-medium text-ink sm:min-h-10 sm:text-sm">
          {product.name}
        </h3>

        <div className="mt-2">
          <ProductRating rating={product.rating} />
        </div>

        <ProductPrice
          price={product.price}
          originalPrice={product.originalPrice}
          className="mt-3 text-xs sm:text-sm"
        />
      </div>
    </article>
  );
}

export default function NewProducts({ onAction }) {
  return (
    <section aria-labelledby="new-products-heading" className="mt-8 sm:mt-10">
      <h2
        id="new-products-heading"
        className="mb-4 text-lg font-semibold text-ink sm:mb-5 sm:text-xl"
      >
        New Products
      </h2>

      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
        {newProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAction={onAction} />
        ))}
      </div>
    </section>
  );
}
