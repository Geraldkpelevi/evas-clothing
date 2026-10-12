import DealOfTheDay from "./DealOfTheDay";
import NewProducts from "./NewProducts";
import ProductMinimal from "./ProductMinimal";

export default function ProductContent({ onAddToCart, onProductAction }) {
  return (
    <>
      <ProductMinimal />

      <DealOfTheDay onAddToCart={onAddToCart} />

      <NewProducts onAction={onProductAction} />
    </>
  );
}
