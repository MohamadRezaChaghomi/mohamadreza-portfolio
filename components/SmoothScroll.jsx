'use client';

import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

export default function SmoothScroll({ children }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 0.8,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    return () => scroll.destroy();
  }, []);

  return <div ref={scrollRef}>{children}</div>;
}