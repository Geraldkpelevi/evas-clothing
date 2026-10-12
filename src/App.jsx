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
    <div className="min-h-screen bg-white pb-16 lg:pb-0">
      <NewsletterModal />
      <Header />

      <main>
        <Banner />
        <Category />
        <ProductSection>
          <ProductContent />
        </ProductSection>
        <TestimonialsSection />

        <BlogSection />

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
            Discover your style
          </p>

          <h1 className="mt-3 max-w-2xl text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
            Find your next favorite look.
          </h1>

          <p className="mt-4 max-w-xl text-neutral-600">
            Explore our latest collections and discover styles made for every
            occasion.
          </p>

          <a
            href="/shop"
            className="mt-7 inline-flex rounded-md bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Shop collection
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
