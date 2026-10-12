
import { ChevronDown } from "lucide-react";
import { navigation } from "../../../data/navigation";

function MegaMenu({ groups }) {
  return (
    <div className="invisible ml-70 bg-white absolute top-full z-40 w-[min(1100px,95vw)] -translate-x-1/2 translate-y-2 rounded-b-xl border border-neutral-200  p-6 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
      <div className="grid grid-cols-4 gap-6">
        {groups.map((group) => (
          <div key={group.title}>
            <a
              href={group.href}
              className="text-sm font-bold text-neutral-950 hover:underline"
            >
              {group.title}
            </a>

            <ul className="mt-3 space-y-2">
              {group.items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-neutral-600 transition hover:text-black"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <a href={group.href} className="mt-4 block overflow-hidden rounded-md">
              <img
                src={group.image}
                alt={`${group.title} collection`}
                loading="lazy"
                className="h-24 w-full rounded-md object-cover transition duration-300 hover:scale-105"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DesktopNavigation() {
  return (
    <nav
      aria-label="Main navigation"
      className="relative z-30  hidden border-b border-neutral-200 bg-white lg:block"
    >
      <div className="mx-auto max-w-7xl px-8">
        <ul className="flex items-center justify-center gap-7">
          {navigation.map((item) => (
            <li
              key={item.label}
              className="group relative flex min-h-14 items-center"
            >
              <a
                href={item.href}
                className="flex items-center gap-1 py-4 text-xs font-semibold uppercase tracking-wide text-neutral-800 transition hover:text-neutral-500"
                aria-haspopup={item.megaMenu || item.items ? "true" : undefined}
              >
                {item.label}

                {(item.megaMenu || item.items) && (
                  <ChevronDown
                    size={13}
                    className="transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
                  />
                )}
              </a>

              {item.megaMenu && <MegaMenu groups={item.megaMenu} />}

              {item.items && !item.megaMenu && (
                <ul className="invisible absolute left-0 top-full z-40 min-w-52 translate-y-2 rounded-b-lg border border-neutral-200 bg-white py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {item.items.map((child) => (
                    <li key={child.href}>
                      <a
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-neutral-700 transition hover:bg-neutral-50 hover:text-black"
                      >
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
