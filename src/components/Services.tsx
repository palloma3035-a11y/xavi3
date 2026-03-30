import { motion } from "framer-motion";
import { Scissors, SprayCan, Sparkles } from "lucide-react";

const services = [
  { name: "Prerje Flokësh", price: "€10", desc: "Prerje klasike ose moderne sipas dëshirës", icon: Scissors },
  { name: "Rregullim Mjekre", price: "€5", desc: "Formësim dhe rregullim profesional i mjekrës", icon: Scissors },
  { name: "Prerje + Mjekër", price: "€13", desc: "Paketa e plotë — prerje dhe mjekër", icon: Sparkles },
  { name: "Prerje Fëmijësh", price: "€7", desc: "Prerje e kujdesshme për djemtë e vegjël", icon: Scissors },
  { name: "Stilim", price: "€8", desc: "Stilim profesional me produkte premium", icon: SprayCan },
  { name: "Ngjyrosje", price: "€25", desc: "Ngjyrosje dhe trajtim i flokëve", icon: SprayCan },
];

const Services = () => (
  <section id="services" className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-[0.4em] uppercase text-accent mb-3">Çfarë ofrojmë</p>
        <h2 className="font-display text-5xl md:text-6xl tracking-wider">SHËRBIMET</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="bg-secondary border border-border rounded-sm p-6 hover:border-accent/50 transition-colors group"
          >
            <div className="flex items-center justify-between mb-4">
              <s.icon className="h-5 w-5 text-accent group-hover:text-foreground transition-colors" />
              <span className="font-display text-3xl tracking-wide">{s.price}</span>
            </div>
            <h3 className="font-semibold text-lg mb-1">{s.name}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
