import { bestSellers } from "../../data/products";
import ShowcaseItem from "./ShowcaseItem";

export default function BestSellers() {
  return (
    <section aria-labelledby="best-sellers-heading" className="mt-8 w-full">
      <h2
        id="best-sellers-heading"
        className="mb-4 text-base font-semibold uppercase tracking-wider text-ink"
      >
        Best Sellers
      </h2>

      <div className="flex flex-col gap-4">
        {bestSellers.map((product) => (
          <ShowcaseItem
            key={product.id}
            product={product}
            showRating
            showCategory={false}
          />
        ))}
      </div>
    </section>
  );
}
