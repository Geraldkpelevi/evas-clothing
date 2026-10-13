import { useState } from "react";
import { dealProducts } from "../../data/products";
import ProductPrice from "../ui/ProductPrice";
import ProductRating from "../ui/ProductRating";

function DealCard({ product, onAddToCart }) {
  const soldPercentage = Math.min(
    100,
    Math.max(0, (product.sold / (product.sold + product.available)) * 100),
  );

  return (
    <article className="grid min-w-0 grid-cols-1 gap-4 rounded-card border border-border p-4 sm:grid-cols-2 sm:gap-5 sm:p-5">
      <div className="flex items-center justify-center overflow-hidden rounded-store bg-brand-light">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="max-h-60 w-full object-contain sm:max-h-72"
        />
      </div>

      <div className="flex min-w-0 flex-col items-start">
        <ProductRating rating={product.rating} />

        <h3 className="mt-3 text-base font-semibold text-ink sm:text-lg">
          {product.name}
        </h3>

        <p className="mt-2 text-sm leading-6 text-muted">
          {product.description}
        </p>

        <ProductPrice
          price={product.price}
          originalPrice={product.originalPrice}
          className="mt-4 text-base sm:text-lg"
        />

        <button
          type="button"
          onClick={() => onAddToCart?.(product)}
          className="mt-4 w-full rounded-control bg-brand px-5 py-3 text-sm font-medium text-surface transition-colors hover:bg-onyx focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 sm:w-auto"
        >
          Add to Cart
        </button>

        <div className="mt-5 w-full">
          <div className="flex justify-between gap-3 text-[11px] text-muted sm:text-xs">
            <span>
              Already Sold: <strong>{product.sold}</strong>
            </span>
            <span>
              Available: <strong>{product.available}</strong>
            </span>
          </div>

          <div
            className="mt-2 h-2 overflow-hidden rounded-full bg-brand-light"
            role="progressbar"
            aria-label="Units sold"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(soldPercentage)}
          >
            <div
              className="h-full rounded-full bg-accent"
              style={{ width: `${soldPercentage}%` }}
            />
          </div>
        </div>

        <div className="mt-5 w-full">
          <p className="mb-3 text-sm font-medium text-ink">
            Hurry up! Offer ends in:
          </p>

          <div className="grid grid-cols-4 gap-2">
            {Object.entries(product.countdown).map(([unit, value]) => {
              const labels = {
                days: "Days",
                hours: "Hours",
                minutes: "Min",
                seconds: "Sec",
              };

              return (
                <div
                  key={unit}
                  className="rounded-control bg-brand-light px-2 py-3 text-center"
                >
                  <p className="text-base font-semibold text-ink sm:text-lg">
                    {String(value).padStart(2, "0")}
                  </p>
                  <p className="text-[10px] text-muted sm:text-xs">
                    {labels[unit]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function DealOfTheDay({ onAddToCart }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section aria-labelledby="deal-heading" className="mt-10 min-w-0">
      <h2 id="deal-heading" className="mb-5 text-xl font-semibold text-ink">
        Deal of the Day
      </h2>

      <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory">
        {dealProducts.map((product, index) => (
          <div
            key={product.id}
            onFocusCapture={() => setActiveIndex(index)}
            className={`w-full min-w-full snap-start ${
              activeIndex === index ? "" : ""
            }`}
          >
            <DealCard product={product} onAddToCart={onAddToCart} />
          </div>
        ))}
      </div>
    </section>
  );
}
