"use client";

import { useEffect, useRef } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";

type Testimonial = {
  name: string;
  role: string;
  review: string;
};

export default function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollLeftRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    let currentIndex = 0;

    const getStep = () => {
      const firstCard = container.children[0] as HTMLElement | undefined;
      if (!firstCard) {
        return 0;
      }

      const styles = window.getComputedStyle(container);
      const gap = Number.parseFloat(styles.columnGap || styles.gap || "0") || 0;
      return firstCard.offsetWidth + gap;
    };

    const interval = window.setInterval(() => {
      if (window.innerWidth >= 768 || draggingRef.current) {
        return;
      }

      const step = getStep();
      if (!step) {
        return;
      }

      currentIndex = (currentIndex + 1) % testimonials.length;
      container.scrollTo({ left: currentIndex * step, behavior: "smooth" });
    }, 3600);

    return () => window.clearInterval(interval);
  }, [testimonials.length]);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container || window.innerWidth >= 768) {
      return;
    }

    draggingRef.current = true;
    startXRef.current = event.clientX;
    startScrollLeftRef.current = container.scrollLeft;
    container.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container || !draggingRef.current || window.innerWidth >= 768) {
      return;
    }

    const delta = event.clientX - startXRef.current;
    container.scrollLeft = startScrollLeftRef.current - delta;
  };

  const onPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container || window.innerWidth >= 768) {
      return;
    }

    draggingRef.current = false;
    container.releasePointerCapture(event.pointerId);
  };

  return (
    <div
      ref={containerRef}
      className="hide-scrollbar -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:overflow-visible md:px-0 md:pb-0 md:grid-cols-3"
      style={{ WebkitOverflowScrolling: "touch" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {testimonials.map((item) => (
        <article key={item.name} className="card min-w-[86%] snap-center p-6 md:min-w-0">
          <p className="text-[15px] leading-7 text-[color:var(--muted)]">“{item.review}”</p>
          <p className="mt-5 font-serif text-xl">{item.name}</p>
          <p className="text-sm text-[color:var(--muted)]">{item.role}</p>
        </article>
      ))}
    </div>
  );
}
