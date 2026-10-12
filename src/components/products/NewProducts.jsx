
import { Heart, Eye, Repeat2, ShoppingBag } from "lucide-react";
import ProductPrice from "../ui/ProductPrice";
import ProductRating from "../ui/ProductRating";
import { newProducts } from "../../data/products";

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
          className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-200 bg-white text-gray-700 shadow-sm transition-colors hover:bg-orange-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
        >
          <Icon size={17} aria-hidden="true" />
        </button>
      ))}
    </div>
  );
}

function ProductCard({ product, onAction }) {
  const badgeClasses = {
    black: "bg-gray-900 text-white",
    pink: "bg-pink-100 text-pink-700",
  };

  return (
    <article className="group min-w-0 overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-50">
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
            className={`absolute left-3 top-3 rounded px-2 py-1 text-xs font-semibold ${
              badgeClasses[product.badgeStyle] ??
              "bg-orange-100 text-orange-700"
            }`}
          >
            {product.badge}
          </span>
        )}

        <ProductActions product={product} onAction={onAction} />
      </div>

      <div className="p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
          {product.category}
        </p>

        <h3 className="mt-2 line-clamp-2 min-h-10 text-sm font-medium text-gray-900">
          {product.name}
        </h3>

        <div className="mt-2">
          <ProductRating rating={product.rating} />
        </div>

        <ProductPrice
          price={product.price}
          originalPrice={product.originalPrice}
          className="mt-3 text-sm"
        />
      </div>
    </article>
  );
}

export default function NewProducts({ onAction }) {
  return (
    <section aria-labelledby="new-products-heading" className="mt-10">
      <h2
        id="new-products-heading"
        className="mb-5 text-xl font-semibold text-gray-900"
      >
        New Products
      </h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 xl:grid-cols-4">
        {newProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAction={onAction}
          />
        ))}
      </div>
    </section>
  );
}
