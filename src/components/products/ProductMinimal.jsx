
import ProductShowcase from "./ProductShowcase";
import { productShowcases } from "../../data/products";

export default function ProductMinimal() {
  return (
    <section
      aria-label="Featured product collections"
      className="grid grid-cols-1 gap-8 lg:grid-cols-3"
    >
      {productShowcases.map((showcase) => (
        <ProductShowcase
          key={showcase.id}
          title={showcase.title}
          products={showcase.products}
        />
      ))}
    </section>
  );
}
