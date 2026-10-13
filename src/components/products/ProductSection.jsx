import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import CategorySidebar from "./CategorySidebar";

export default function ProductSection({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          aria-controls="product-sidebar"
          aria-expanded={isSidebarOpen}
          onClick={() => setIsSidebarOpen((open) => !open)}
          className="mb-5 inline-flex items-center gap-2 rounded-control border border-border bg-surface px-4 py-2 text-sm font-medium text-ink lg:hidden"
        >
          <SlidersHorizontal size={18} />
          Categories
        </button>

        <div className="flex flex-col items-start gap-8 lg:flex-row">
          <CategorySidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />
          <main className="min-w-0 flex-1">{children}</main>
        </div>
      </div>
    </section>
  );
}
