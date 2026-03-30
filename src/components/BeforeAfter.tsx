import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";

const BeforeAfter = () => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(2, Math.min(98, x)));
  }, []);

  const onPointerDown = () => {
    dragging.current = true;
  };
  const onPointerUp = () => {
    dragging.current = false;
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragging.current) updatePosition(e.clientX);
  };

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-accent mb-3">Transformimi</p>
          <h2 className="font-display text-5xl md:text-6xl tracking-wider">PARA & PAS</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          ref={containerRef}
          className="relative max-w-lg mx-auto aspect-[3/4] overflow-hidden rounded-sm cursor-col-resize select-none touch-none"
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          onPointerMove={onPointerMove}
        >
          {/* After image (full) */}
          <img src={afterImg} alt="Pas" className="absolute inset-0 w-full h-full object-cover" />

          {/* Before image (clipped) */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <img src={beforeImg} alt="Para" className="w-full h-full object-cover" />
          </div>

          {/* Divider line */}
          <div
            className="absolute top-0 bottom-0 w-0.5 bg-foreground/80 pointer-events-none"
            style={{ left: `${position}%`, transform: "translateX(-50%)" }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-foreground bg-background/50 backdrop-blur-sm flex items-center justify-center">
              <span className="text-foreground text-sm font-bold">⇔</span>
            </div>
          </div>

          {/* Labels */}
          <span className="absolute top-4 left-4 bg-background/70 backdrop-blur-sm px-3 py-1 text-xs tracking-[0.2em] uppercase rounded-sm">
            Para
          </span>
          <span className="absolute top-4 right-4 bg-background/70 backdrop-blur-sm px-3 py-1 text-xs tracking-[0.2em] uppercase rounded-sm">
            Pas
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfter;
