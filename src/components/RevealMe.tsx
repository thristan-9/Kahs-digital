import { useRef, useState, useEffect } from "react";
import scrollReveal from "./ScrollReveal";

export default function RevealMe({ children, style, reset = false, delay = 150, origin = "top" }) {
  const divRef = useRef<HTMLElement>(null);
  const [showChildren, setShowChildren] = useState(false);

  useEffect(() => {
    if (divRef.current) {
      scrollReveal.reveal(divRef.current, {
        origin: origin,
        distance: '100px',
        duration: 1500,
        delay: delay,
        reset: reset
      });
      setShowChildren(true);
    }
  }, []);

  return (
    <div
      ref={divRef}
      style={{ position: "relative", width: "auto", height: "100%", ...style }}
      className="scroll-section"
    >
      {showChildren ? 
      <>
        {children}
      </>
      :
        <div style={{display: "hidden"}}>{children}</div>
      }
    </div>
  );
}

