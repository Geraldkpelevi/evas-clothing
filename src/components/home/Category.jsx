import { useCallback, useEffect, useRef } from "react";

const categories = [
  {
    id: "dress-frock",
    title: "Dress & Frock",
    amount: 53,
    image: "https://i.postimg.cc/Xv9x15Q8/dress.png",
    alt: "Dress and frock",
  },
  {
    id: "winter-wear",
    title: "Winter Wear",
    amount: 58,
    image: "https://i.postimg.cc/bNKxXJGF/coat.png",
    alt: "Winter coat",
  },
  {
    id: "glasses-lens",
    title: "Glasses & Lens",
    amount: 68,
    image: "https://i.postimg.cc/zBthxXZ7/glasses.png",
    alt: "Glasses and lenses",
  },
  {
    id: "shorts-jeans",
    title: "Shorts & Jeans",
    amount: 84,
    image: "https://i.postimg.cc/g04L0kJp/shorts.png",
    alt: "Shorts and jeans",
  },
  {
    id: "t-shirts",
    title: "T-Shirts",
    amount: 35,
    image: "https://i.postimg.cc/yddg34gZ/tee.png",
    alt: "T-shirts",
  },
  {
    id: "jacket",
    title: "Jacket",
    amount: 16,
    image: "https://i.postimg.cc/W49mH700/jacket.png",
    alt: "Jacket",
  },
  {
    id: "watch",
    title: "Watch",
    amount: 27,
    image: "https://i.postimg.cc/zBVwZRk6/watch.png",
    alt: "Watch",
  },
  {
    id: "hats-caps",
    title: "Hats & Caps",
    amount: 39,
    image: "https://i.postimg.cc/y8j0DTQ2/hat.png",
    alt: "Hats and caps",
  },
];

function CategoryCard({ category }) {
  return (
    <article className="flex min-w-62 items-center gap-4 rounded-card border border-border bg-surface p-4 transition-shadow duration-200 hover:shadow-md sm:min-w-0">
      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-store bg-accent-light p-2">
        <img
          src={category.image}
          alt={category.alt}
          width="48"
          height="48"
          loading="lazy"
          className="h-full w-full object-contain"
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="mb-2 flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <h3 className="text-sm font-semibold text-ink">{category.title}</h3>

          <span className="text-xs text-muted">({category.amount})</span>
        </div>

        <a
          href={`/category/${category.id}`}
          className="inline-block text-xs font-medium text-brand transition-colors hover:text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          Show All
        </a>
      </div>
    </article>
  );
}

export default function Category() {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const firstGroupRef = useRef(null);

  const animationRef = useRef(null);
  const offsetRef = useRef(0);
  const groupWidthRef = useRef(0);
  const lastTimeRef = useRef(0);

  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const startOffsetRef = useRef(0);

  // Pixels per second. Lower values make the carousel slower.
  const SPEED = 24;

  const updatePosition = useCallback(() => {
    if (!trackRef.current) return;

    trackRef.current.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
  }, []);

  // Measure one complete set of categories.
  useEffect(() => {
    const group = firstGroupRef.current;
    if (!group) return;

    const measure = () => {
      groupWidthRef.current = group.getBoundingClientRect().width;

      if (groupWidthRef.current > 0) {
        offsetRef.current %= groupWidthRef.current;
        updatePosition();
      }
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(group);

    return () => observer.disconnect();
  }, [updatePosition]);

  // Seamless infinite animation.
  useEffect(() => {
    let frameId;

    const animate = (time) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = time;
      }

      // Prevent a large jump after the browser tab becomes inactive.
      const delta = Math.min((time - lastTimeRef.current) / 1000, 0.05);

      lastTimeRef.current = time;

      const width = groupWidthRef.current;

      if (!draggingRef.current && width > 0) {
        offsetRef.current = (offsetRef.current + SPEED * delta) % width;

        updatePosition();
      }

      frameId = window.requestAnimationFrame(animate);
    };

    frameId = window.requestAnimationFrame(animate);

    animationRef.current = frameId;

    return () => {
      window.cancelAnimationFrame(frameId);
      lastTimeRef.current = 0;
    };
  }, [updatePosition]);

  const handlePointerDown = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    draggingRef.current = true;
    startXRef.current = event.clientX;
    startOffsetRef.current = offsetRef.current;

    lastTimeRef.current = 0;

    viewportRef.current?.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!draggingRef.current) return;

    const width = groupWidthRef.current;
    if (width <= 0) return;

    const distance = startXRef.current - event.clientX;

    offsetRef.current =
      (((startOffsetRef.current + distance) % width) + width) % width;

    updatePosition();
  };

  const handlePointerUp = () => {
    draggingRef.current = false;
    lastTimeRef.current = 0;
  };

  return (
    <section
      aria-label="Shop by category"
      className="overflow-hidden px-4 py-6 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div
          ref={viewportRef}
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          style={{ touchAction: "pan-y" }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          onLostPointerCapture={handlePointerUp}
        >
          <div
            ref={trackRef}
            className="flex w-max"
            style={{
              willChange: "transform",
              transform: "translate3d(0, 0, 0)",
            }}
          >
            {/* Original category group */}
            <div ref={firstGroupRef} className="flex w-max shrink-0 gap-4 pr-4">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className="min-w-0 shrink-0 basis-[85vw] sm:basis-[calc(50%-0.5rem)] lg:basis-[calc(33.333%-0.75rem)]"
                >
                  <CategoryCard category={category} />
                </div>
              ))}
            </div>

            {/* Duplicate group makes the loop seamless */}
            <div
              aria-hidden="true"
              inert
              className="flex w-max shrink-0 gap-4 pr-4"
            >
              {categories.map((category) => (
                <div
                  key={`duplicate-${category.id}`}
                  className="min-w-0 shrink-0 basis-[85vw] sm:basis-[calc(50%-0.5rem)] lg:basis-[calc(33.333%-0.75rem)]"
                >
                  <CategoryCard category={category} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
