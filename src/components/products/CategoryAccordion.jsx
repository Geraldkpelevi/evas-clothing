
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function CategoryAccordion({ category }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="border-b border-gray-200 last:border-b-0">
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

          <span className="text-sm font-medium text-gray-800">
            {category.name}
          </span>
        </span>

        {isOpen ? (
          <Minus size={16} aria-hidden="true" />
        ) : (
          <Plus size={16} aria-hidden="true" />
        )}
      </button>

      <ul
        hidden={!isOpen}
        className="space-y-3 pb-4 pl-9"
      >
        {category.items.map((item) => (
          <li key={item.name}>
            <a
              href={`?category=${encodeURIComponent(item.name)}`}
              className="flex items-center justify-between gap-3 text-sm text-gray-600 transition-colors hover:text-orange-500"
            >
              <span>{item.name}</span>

              <span className="text-xs text-gray-400">
                {item.stock}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}
