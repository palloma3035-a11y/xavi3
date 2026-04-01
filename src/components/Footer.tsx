import { Scissors, Instagram, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-background border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Scissors className="h-5 w-5 text-accent" />
            <span className="font-display text-xl tracking-widest">HAIR SALON XAVI</span>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs">
            Stili premium për burrin modern. Vizitoni salonin tonë në Klinë.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sm tracking-wider uppercase mb-4">Kontakti</h4>
          <div className="space-y-3 text-sm text-muted-foreground">
            <a
              href="tel:+38343983164"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Phone className="h-4 w-4" />
              +383 43 983 164
            </a>
            <a
              href="https://instagram.com/xavi_hairsalon"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Instagram className="h-4 w-4" />
              @xavi_hairsalon
            </a>
            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Klinë, Kosovë
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm tracking-wider uppercase mb-4">Orari</h4>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>E Hënë – E Shtunë: 09:00 – 20:00</p>
            <p>E Diel: Mbyllur</p>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-8 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Hair Salon XAVI. Të gjitha të drejtat e rezervuara.
                <p>
          Created by{" "}
          <a href="https://enestahiri.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-foreground transition-colors underline underline-offset-2">
            enestahiri.com
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
