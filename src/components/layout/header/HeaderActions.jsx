
import {
  Heart,
  ShoppingBag,
  UserRound,
} from "lucide-react";

const actions = [
  {
    label: "Account",
    href: "/account",
    icon: UserRound,
  },
  {
    label: "Wishlist",
    href: "/wishlist",
    icon: Heart,
    count: 0,
  },
  {
    label: "Shopping cart",
    href: "/cart",
    icon: ShoppingBag,
    count: 0,
  },
];

export default function HeaderActions() {
  return (
    <div className="flex items-center gap-3 sm:gap-5">
      {actions.map(({ label, href, icon: Icon, count }) => (
        <a
          key={label}
          href={href}
          aria-label={
            count !== undefined ? `${label}, ${count} items` : label
          }
          className="relative inline-flex size-10 items-center justify-center text-neutral-800 transition hover:text-neutral-500"
        >
          <Icon size={23} strokeWidth={1.7} />

          {count !== undefined && (
            <span className="absolute right-0 top-0 flex size-4 items-center justify-center rounded-full bg-black text-[10px] font-semibold text-white">
              {count}
            </span>
          )}
        </a>
      ))}
    </div>
  );
}
