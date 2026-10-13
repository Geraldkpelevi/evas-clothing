import { Search } from "lucide-react";
import HeaderActions from "./HeaderActions";

export default function HeaderMain() {
  function handleSearch(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const query = formData.get("search")?.toString().trim();

    if (query) {
      window.location.href = `/shop?search=${encodeURIComponent(query)}`;
    }
  }

  return (
    <div className="border-b border-border bg-surface">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:px-6 lg:flex-nowrap lg:px-8 lg:py-6">
        <a
          href="/"
          aria-label="Eva's Clothing home"
          className="shrink-0 self-start sm:self-auto"
        >
          <img
            src="https://images.squarespace-cdn.com/content/v1/5ad0168f1137a640f25654ac/1545285401016-WNKOWZONAEQQQPVKALQ9/Eva.png"
            alt="Eva's Clothing"
            width="220"
            height="96"
            className="h-14 w-auto max-w-[180px] object-contain sm:h-16 lg:h-20"
          />
        </a>

        <form
          role="search"
          onSubmit={handleSearch}
          className="order-1 flex w-full overflow-hidden rounded-control border border-border bg-surface focus-within:border-brand sm:order-2 sm:max-w-xl sm:flex-1 lg:order-0 lg:mx-8 lg:max-w-xl"
        >
          <input
            type="search"
            name="search"
            placeholder="Enter your product name"
            aria-label="Search products"
            className="min-w-0 flex-1 px-4 py-3 text-sm text-ink outline-none placeholder:text-muted"
          />

          <button
            type="submit"
            aria-label="Search"
            className="px-4 text-muted transition hover:bg-brand-light"
          >
            <Search size={20} />
          </button>
        </form>

        <HeaderActions />
      </div>
    </div>
  );
}
