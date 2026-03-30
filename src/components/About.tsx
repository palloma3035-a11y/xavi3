import { motion } from "framer-motion";
import { Award, Shield, Clock } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Aftësi Profesionale",
    desc: "Teknika moderne dhe trajnime të vazhdueshme për rezultate të përkryera çdo herë.",
  },
  {
    icon: Shield,
    title: "Pastërti Maksimale",
    desc: "Standarde të larta higjiene. Çdo mjet sterilizohet pas çdo klienti.",
  },
  {
    icon: Clock,
    title: "Përpikmëri",
    desc: "Respektojmë kohën tuaj. Terminet fillojnë në kohë, pa vonesa.",
  },
];

const About = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-4 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-[0.4em] uppercase text-accent mb-3">Kush jemi</p>
        <h2 className="font-display text-5xl md:text-6xl tracking-wider mb-8">RRETH NESH</h2>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Hair Salon XAVI u themelua me një vizion të qartë — të ofrojë shërbimin më të mirë të
          berberit në Klinë. Me përvojë shumëvjeçare dhe pasion për stilin, ne kujdesemi për çdo
          detaj, nga konsultimi fillestar deri te stilimi final. Çdo klient trajtohet me respekt
          dhe kujdes të veçantë.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <v.icon className="h-10 w-10 text-accent mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-2">{v.title}</h3>
            <p className="text-muted-foreground text-sm">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
