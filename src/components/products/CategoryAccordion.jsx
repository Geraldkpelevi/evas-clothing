import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function CategoryAccordion({ category }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="border-b border-border last:border-b-0">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-3 py-3 text-left"
      >
        <span className="flex items-center gap-3">
          <img
            src={category.image}
            alt=""
            width={24}
            height={24}
            className="h-6 w-6 object-contain"
          />

          <span className="text-sm font-medium text-ink">{category.name}</span>
        </span>

        {isOpen ? (
          <Minus size={16} aria-hidden="true" className="text-muted" />
        ) : (
          <Plus size={16} aria-hidden="true" className="text-muted" />
        )}
      </button>

      <ul hidden={!isOpen} className="space-y-3 pb-4 pl-9">
        {category.items.map((item) => (
          <li key={item.name}>
            <a
              href={`?category=${encodeURIComponent(item.name)}`}
              className="flex items-center justify-between gap-3 text-sm text-muted transition-colors hover:text-brand"
            >
              <span>{item.name}</span>

              <span className="text-xs text-gray-medium">{item.stock}</span>
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}
