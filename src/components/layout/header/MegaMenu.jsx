export default function MegaMenu({ groups, className }) {
  return (
    <div
      className={`invisible absolute left-1/2 top-full z-40 w-[min(1100px,95vw)] -translate-x-1/2 translate-y-2 rounded-b-xl border border-border bg-surface p-6 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 ${className || ""}`}
    >
      <div className="grid grid-cols-4 gap-6">
        {groups.map((group) => (
          <div key={group.title}>
            <a
              href={group.href}
              className="text-sm font-bold text-ink hover:underline"
            >
              {group.title}
            </a>

            <ul className="mt-3 space-y-2">
              {group.items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition hover:text-brand"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={group.href}
              className="mt-4 block overflow-hidden rounded-store"
            >
              <img
                src={group.image}
                alt={`${group.title} collection`}
                loading="lazy"
                className="h-24 w-full rounded-store object-cover transition duration-300 hover:scale-105"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
