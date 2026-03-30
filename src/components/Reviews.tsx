import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Artan M.", text: "Shërbim i shkëlqyer! Gjithmonë dal i kënaqur nga saloni. Xavi është profesionist i vërtetë." },
  { name: "Driton K.", text: "Profesionalizëm i lartë dhe ambient shumë i pastër. E rekomandoj pa hezitim!" },
  { name: "Besnik H.", text: "Prerja më e mirë që kam marrë ndonjëherë. Vëmendje ndaj detajeve." },
  { name: "Valon R.", text: "Saloni më i mirë në Klinë, pa dyshim. Çmimet e arsyeshme, cilësi e lartë." },
];

const Reviews = () => (
  <section id="reviews" className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-[0.4em] uppercase text-accent mb-3">Çfarë thonë klientët</p>
        <h2 className="font-display text-5xl md:text-6xl tracking-wider">VLERËSIMET</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {reviews.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-secondary border border-border rounded-sm p-6"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-muted-foreground mb-4 italic leading-relaxed">"{r.text}"</p>
            <p className="font-semibold text-sm">— {r.name}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a
          href="#"
          className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
        >
          Shiko të gjitha vlerësimet në Google →
        </a>
      </div>
    </div>
  </section>
);

export default Reviews;
