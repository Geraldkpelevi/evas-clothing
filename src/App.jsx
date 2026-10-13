import Banner from "./components/home/Banner";
import Category from "./components/home/Category";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import NewsletterModal from "./components/NewsletterModal";
import ProductContent from "./components/products/ProductContent";
import ProductSection from "./components/products/ProductSection";
import BlogSection from "./components/sections/BlogSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";

export default function App() {
  return (
    <div className="min-h-screen bg-surface pb-20 lg:pb-0">
      <NewsletterModal />
      <Header />

      <main className="overflow-x-hidden">
        <Banner />
        <Category />
        <ProductSection>
          <ProductContent />
        </ProductSection>
        <TestimonialsSection />

        <BlogSection />

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted sm:text-sm">
            Discover your style
          </p>

          <h1 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Find your next favorite look.
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
            Explore our latest collections and discover styles made for every
            occasion.
          </p>

          <a
            href="/shop"
            className="mt-7 inline-flex rounded-control bg-brand px-5 py-3 text-sm font-semibold text-surface transition hover:bg-onyx sm:px-6"
          >
            Shop collection
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
