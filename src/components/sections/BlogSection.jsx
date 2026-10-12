
import BlogCard from "../cards/BlogCard";

const blogPosts = [
  {
    image: "https://i.postimg.cc/2886v00v/blog-1.jpg",
    imageAlt: "Clothing retail and business analytics",
    category: "Fashion",
    title: "Clothes Retail KPIs 2023 Guide for Clothes Executives",
    author: "Mr Admin",
    date: "Apr 06, 2026",
    dateTime: "2024-04-06",
    href: "/blog/clothes-retail-kpis",
  },
  {
    image: "https://i.postimg.cc/cJWPgbmG/blog-2.jpg",
    imageAlt: "Fashion trends and curbside pickup",
    category: "Clothes",
    title: "Curbside Fashion Trends: How to Win the Pickup Battle",
    author: "Mr Robin",
    date: "Jan 18, 2026",
    dateTime: "2024-01-18",
    href: "/blog/curbside-fashion-trends",
  },
  {
    image: "https://i.postimg.cc/BQkj0xCK/blog-3.jpg",
    imageAlt: "Online retail and shopping trends",
    category: "Shoes",
    title: "EBT Vendors: Claim Your Share of SNAP Online Revenue",
    author: "Mr Selsa",
    date: "Feb 23, 2026",
    dateTime: "2024-02-23",
    href: "/blog/online-retail-revenue",
  },
  {
    image: "https://i.postimg.cc/43Jskdjc/blog-4.jpg",
    imageAlt: "Fashion and electronics retail trends",
    category: "Electronics",
    title: "Curbside Fashion Trends: How to Win the Pickup Battle",
    author: "Mr Pawar",
    date: "Feb 02, 2026",
    dateTime: "2026-02-02",
    href: "/blog/retail-trends",
  },
];

export default function BlogSection() {
  return (
    <section
      aria-labelledby="blog-heading"
      className="py-10 sm:py-14"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h2
            id="blog-heading"
            className="text-xl font-bold text-gray-900 sm:text-2xl"
          >
            Latest Blog Posts
          </h2>
        </div>

        <div
          className="flex gap-5 overflow-x-auto pb-5
            snap-x snap-mandatory"
          aria-label="Latest blog articles"
        >
          {blogPosts.map((post) => (
            <div key={post.href} className="snap-start">
              <BlogCard {...post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
