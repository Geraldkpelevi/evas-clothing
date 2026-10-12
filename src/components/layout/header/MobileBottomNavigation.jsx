
import {
  Grid2X2,
  Heart,
  Home,
  Menu,
  ShoppingBag,
} from "lucide-react";

const items = [
  { label: "Menu", icon: Menu, action: "menu" },
  { label: "Cart", icon: ShoppingBag, href: "/cart", count: 0 },
  { label: "Home", icon: Home, href: "/" },
  { label: "Wishlist", icon: Heart, href: "/wishlist", count: 0 },
  { label: "Categories", icon: Grid2X2, action: "menu" },
];

export default function MobileBottomNavigation({ onMenuOpen }) {
  return (
    <nav
      aria-label="Mobile quick navigation"
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-5 border-t border-neutral-200 bg-white pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_15px_rgba(0,0,0,0.05)] lg:hidden"
    >
      {items.map(({ label, icon: Icon, href, count, action }) => {
        const content = (
          <>
            <span className="relative">
              <Icon size={22} strokeWidth={1.7} />

              {count !== undefined && (
                <span className="absolute -right-2 -top-2 flex size-4 items-center justify-center rounded-full bg-black text-[10px] text-white">
                  {count}
                </span>
              )}
            </span>

            <span className="text-[10px] font-medium">{label}</span>
          </>
        );

        return action === "menu" ? (
          <button
            key={label}
            type="button"
            onClick={onMenuOpen}
            aria-label="Open navigation menu"
            className="flex min-h-14 flex-col items-center justify-center gap-1 text-neutral-700 transition hover:bg-neutral-50"
          >
            {content}
          </button>
        ) : (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="flex min-h-14 flex-col items-center justify-center gap-1 text-neutral-700 transition hover:bg-neutral-50"
          >
            {content}
          </a>
        );
      })}
    </nav>
  );
}
