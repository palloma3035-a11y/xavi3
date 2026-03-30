import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-bg.jpg";

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/75" />
    </div>

    <div className="relative z-10 container mx-auto px-4 text-center py-32">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-xs tracking-[0.4em] uppercase text-accent mb-6"
      >
        Premium Barber • Klinë
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-display text-6xl sm:text-7xl md:text-9xl tracking-wider mb-6 leading-none"
      >
        HAIR SALON
        <br />
        XAVI
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-base md:text-lg text-muted-foreground mb-10 max-w-md mx-auto"
      >
        Stili premium për burrin modern. Përvojë unike e kujdesit personal.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Button size="lg" asChild>
          <a href="https://wa.me/38343983164" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-5 w-5" />
            Rezervo Tani
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="tel:+38343983164">
            <Phone className="mr-2 h-5 w-5" />
            043 983 164
          </a>
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="mt-16 flex items-center justify-center gap-8 text-xs tracking-[0.15em] uppercase text-muted-foreground"
      >
        <span>✦ Profesionalizëm</span>
        <span>✦ Pastërti</span>
        <span>✦ Përpikmëri</span>
      </motion.div>
    </div>
  </section>
);

export default Hero;
