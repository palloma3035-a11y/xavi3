import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Instagram } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const images = [g1, g2, g3, g4, g5, g6];

const Gallery = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.4em] uppercase text-accent mb-3">Punimet tona</p>
          <h2 className="font-display text-5xl md:text-6xl tracking-wider">GALERIA</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-5xl mx-auto">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="aspect-square overflow-hidden rounded-sm cursor-pointer group"
              onClick={() => setSelected(img)}
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://instagram.com/xavi_hairsalon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Instagram className="h-5 w-5" />
            Ndiqni @xavi_hairsalon në Instagram
          </a>
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-3xl bg-card border-border p-2 sm:p-4">
          {selected && (
            <img src={selected} alt="Gallery" className="w-full h-auto rounded-sm" />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
