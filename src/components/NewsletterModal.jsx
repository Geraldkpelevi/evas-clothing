import { useEffect, useState } from "react";

const NEWSLETTER_IMAGE = "https://i.postimg.cc/mrLjrxtC/newsletter.png";

export default function NewsletterModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Matches the original CSS animation, which reveals the modal after 5 seconds.
    const timerId = window.setTimeout(() => setIsOpen(true), 5000);
    return () => window.clearTimeout(timerId);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!isOpen) return null;

  const closeModal = () => setIsOpen(false);

  const handleSubmit = (event) => {
    // The original form has no subscription API yet; prevent a page reload.
    event.preventDefault();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex min-h-dvh items-center justify-center overflow-y-auto bg-brand/50 p-3 sm:p-5"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeModal();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="newsletter-title"
        className="relative z-10 flex max-h-[calc(100dvh-1.5rem)] w-full max-w-4xl flex-col overflow-x-hidden overflow-y-auto rounded-card bg-surface shadow-2xl animate-[newsletter-scale-in_250ms_ease-out] sm:min-h-[420px] sm:max-h-[calc(100dvh-2.5rem)] sm:flex-row"
      >
        <button
          type="button"
          onClick={closeModal}
          aria-label="Close newsletter subscription"
          className="absolute right-4 top-4 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full bg-surface/90 text-ink shadow-sm ring-1 ring-border transition hover:bg-accent-light hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5"
          >
            <path
              d="m6 6 12 12M18 6 6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <div className="relative h-40 w-full shrink-0 overflow-hidden bg-accent-light sm:h-auto sm:min-h-[420px] sm:w-[46%]">
          <img
            src={NEWSLETTER_IMAGE}
            alt="Newsletter illustration"
            width="400"
            height="400"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="flex w-full flex-col justify-center px-6 py-7 text-left sm:flex-1 sm:px-12 sm:py-12">
          <div className="mb-5 pr-8 sm:mb-7 sm:pr-0">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Eva's Clothing
            </p>
            <h2
              id="newsletter-title"
              className="mb-3 text-xl font-semibold leading-tight text-ink sm:text-3xl"
            >
              Subscribe to our newsletter
            </h2>
            <p className="max-w-md text-sm leading-6 text-muted">
              Subscribe to Eva's Clothing to get the latest products and
              discount updates.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              name="email"
              placeholder="Email Address"
              autoComplete="email"
              required
              className="mb-4 h-12 w-full rounded-md border border-border bg-surface px-4 text-sm outline-none transition placeholder:text-muted focus:border-accent focus:ring-2 focus:ring-accent/20"
            />

            <button
              type="submit"
              className="w-full rounded-md bg-ink px-5 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-surface transition hover:bg-accent hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
