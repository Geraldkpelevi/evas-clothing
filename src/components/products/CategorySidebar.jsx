import { X } from "lucide-react";
import { sidebarCategories } from "../../data/products";
import BestSellers from "./BestSellers";
import CategoryAccordion from "./CategoryAccordion";

export default function CategorySidebar({ isOpen = false, onClose }) {
  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close category menu"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-brand/40 lg:hidden"
        />
      )}

      <aside
        id="product-sidebar"
        aria-label="Product categories and best sellers"
        className={`
          fixed inset-y-0 left-0 z-50 flex w-80 flex-col
          overflow-y-auto bg-surface p-5
          transition-transform duration-300
          lg:sticky lg:top-6 lg:z-auto lg:w-[21rem] lg:self-start
          lg:shrink-0 lg:translate-x-0 lg:overflow-visible
          lg:bg-transparent lg:p-0
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        <section className="rounded-card border border-border p-5">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-lg font-semibold uppercase tracking-wider text-ink">
              Category
            </h2>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close category sidebar"
              className="rounded p-1 text-muted hover:bg-brand-light lg:hidden"
            >
              <X size={22} />
            </button>
          </div>

          <ul>
            {sidebarCategories.map((category) => (
              <CategoryAccordion key={category.name} category={category} />
            ))}
          </ul>
        </section>

        <BestSellers />
      </aside>
    </>
  );
}
