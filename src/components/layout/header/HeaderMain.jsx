
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
    <div className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:flex-nowrap lg:px-8 lg:py-6">
        <a href="/" aria-label="Eva's Clothing home" className="shrink-0">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5ad0168f1137a640f25654ac/1545285401016-WNKOWZONAEQQQPVKALQ9/Eva.png"
            alt="Eva's Clothing"
            width="220"
            height="96"
            className="h-20 w-50 object-contain"
          />
        </a>

        <form
          role="search"
          onSubmit={handleSearch}
          className="order-3 flex w-full overflow-hidden rounded-lg border border-neutral-300 focus-within:border-neutral-700 lg:order-0 lg:mx-8 lg:max-w-xl"
        >
          <input
            type="search"
            name="search"
            placeholder="Enter your product name"
            aria-label="Search products"
            className="min-w-0 flex-1 px-4 py-3 text-sm outline-none placeholder:text-neutral-400"
          />

          <button
            type="submit"
            aria-label="Search"
            className="px-4 text-neutral-700 transition hover:bg-neutral-100"
          >
            <Search size={20} />
          </button>
        </form>

        <HeaderActions />
      </div>
    </div>
  );
}
