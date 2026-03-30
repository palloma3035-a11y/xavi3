import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Instagram, MapPin, Clock } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-[0.4em] uppercase text-accent mb-3">Na kontaktoni</p>
        <h2 className="font-display text-5xl md:text-6xl tracking-wider">KONTAKTI</h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex items-start gap-4">
            <MapPin className="h-6 w-6 text-accent mt-0.5 shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">Lokacioni</h3>
              <p className="text-muted-foreground">Klinë, Kosovë</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="h-6 w-6 text-accent mt-0.5 shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">Telefoni</h3>
              <p className="text-muted-foreground">+383 43 983 164</p>
              <p className="text-muted-foreground">043 983 164</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Clock className="h-6 w-6 text-accent mt-0.5 shrink-0" />
            <div>
              <h3 className="font-semibold mb-1">Orari i punës</h3>
              <p className="text-muted-foreground">E Hënë – E Shtunë: 09:00 – 20:00</p>
              <p className="text-muted-foreground">E Diel: Mbyllur</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button asChild>
              <a href="https://wa.me/38343983164" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="tel:+38343983164">
                <Phone className="mr-2 h-4 w-4" />
                Thirr Tani
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://instagram.com/xavi_hairsalon" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-4 w-4" />
                Instagram
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-secondary rounded-sm aspect-video lg:aspect-auto lg:min-h-[320px] flex items-center justify-center border border-border"
        >
          <div className="text-center p-8">
            <MapPin className="h-12 w-12 mx-auto mb-3 text-accent" />
            <p className="font-display text-2xl tracking-wider mb-2">KLINË, KOSOVË</p>
            <p className="text-sm text-muted-foreground">
              Google Maps embed — vendosni iframe-in tuaj këtu
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Contact;
