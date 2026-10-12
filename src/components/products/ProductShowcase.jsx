import ShowcaseItem from "./ShowcaseItem";

export default function ProductShowcase({ title, products }) {
  return (
    <section aria-label={title} className="min-w-0">
      <h2 className="mb-5 border-b border-gray-200 pb-3 text-lg font-semibold text-gray-900">
        {title}
      </h2>

      <div className="flex flex-col gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-lg border border-gray-200 p-3"
          >
            <ShowcaseItem product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
