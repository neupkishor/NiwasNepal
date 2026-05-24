"use client";

import { useEffect, useRef } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";

type Stat = {
  label: string;
  value: string;
};

export default function StatsCarousel({ stats }: { stats: Stat[] }) {
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
      if (window.innerWidth >= 640 || draggingRef.current) {
        return;
      }

      const step = getStep();
      if (!step) {
        return;
      }

      currentIndex = (currentIndex + 1) % stats.length;
      container.scrollTo({
        left: currentIndex * step,
        behavior: "smooth",
      });
    }, 3200);

    return () => {
      window.clearInterval(interval);
    };
  }, [stats.length]);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container || window.innerWidth >= 640) {
      return;
    }

    draggingRef.current = true;
    startXRef.current = event.clientX;
    startScrollLeftRef.current = container.scrollLeft;
    container.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container || !draggingRef.current || window.innerWidth >= 640) {
      return;
    }

    const delta = event.clientX - startXRef.current;
    container.scrollLeft = startScrollLeftRef.current - delta;
  };

  const onPointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container || window.innerWidth >= 640) {
      return;
    }

    draggingRef.current = false;
    container.releasePointerCapture(event.pointerId);
  };

  return (
    <div
      ref={containerRef}
      className="hide-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:overflow-visible sm:px-0 sm:pb-0 sm:grid-cols-2 lg:grid-cols-4"
      style={{ WebkitOverflowScrolling: "touch" }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {stats.map((stat) => (
        <article key={stat.label} className="card min-w-[78%] snap-center p-6 sm:min-w-0">
          <p className="text-4xl font-bold text-[color:var(--brand)]">{stat.value}</p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--muted)]">{stat.label}</p>
        </article>
      ))}
    </div>
  );
}
