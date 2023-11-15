import { useRef, useEffect } from "react";
import scrollReveal from "./ScrollReveal";

export default function RevealMe({ children, style, reset = false, delay = 150, origin = "top" }) {
  const divRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (divRef.current) {
      scrollReveal.reveal(divRef.current, {
        origin: origin,
        distance: '100px',
        duration: 1500,
        delay: delay,
        reset: reset
      });
    }
  }, []);

  return (
    <div
      ref={divRef}
      style={{ position: "relative", width: "auto", height: "100%", ...style }}
      className="scroll-section"
    >
      {children}
    </div>
  );
}

