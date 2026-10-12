
import { useState } from "react";
import ProductPrice from "../ui/ProductPrice";
import ProductRating from "../ui/ProductRating";
import { dealProducts } from "../../data/products";

function DealCard({ product, onAddToCart }) {
  const soldPercentage = Math.min(
    100,
    Math.max(
      0,
      (product.sold / (product.sold + product.available)) * 100
    )
  );

  return (
    <article className="grid min-w-0 grid-cols-1 gap-5 rounded-xl border border-gray-200 p-4 sm:grid-cols-2 sm:p-5">
      <div className="flex items-center justify-center overflow-hidden rounded-lg bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="max-h-72 w-full object-contain"
        />
      </div>

      <div className="flex min-w-0 flex-col items-start">
        <ProductRating rating={product.rating} />

        <h3 className="mt-3 text-lg font-semibold text-gray-900">
          {product.name}
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {product.description}
        </p>

        <ProductPrice
          price={product.price}
          originalPrice={product.originalPrice}
          className="mt-4 text-lg"
        />

        <button
          type="button"
          onClick={() => onAddToCart?.(product)}
          className="mt-4 rounded-md bg-gray-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
        >
          Add to Cart
        </button>

        <div className="mt-5 w-full">
          <div className="flex justify-between gap-3 text-xs text-gray-600">
            <span>
              Already Sold: <strong>{product.sold}</strong>
            </span>
            <span>
              Available: <strong>{product.available}</strong>
            </span>
          </div>

          <div
            className="mt-2 h-2 overflow-hidden rounded-full bg-gray-200"
            role="progressbar"
            aria-label="Units sold"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(soldPercentage)}
          >
            <div
              className="h-full rounded-full bg-orange-500"
              style={{ width: `${soldPercentage}%` }}
            />
          </div>
        </div>

        <div className="mt-5 w-full">
          <p className="mb-3 text-sm font-medium text-gray-800">
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
                  className="rounded-md bg-gray-100 px-2 py-3 text-center"
                >
                  <p className="text-lg font-semibold text-gray-900">
                    {String(value).padStart(2, "0")}
                  </p>
                  <p className="text-xs text-gray-500">
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
      <h2
        id="deal-heading"
        className="mb-5 text-xl font-semibold text-gray-900"
      >
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
