import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Scissors } from "lucide-react";
import BookingForm from "./BookingForm";

const navLinks = [
  { href: "#home", label: "Ballina" },
  { href: "#services", label: "Shërbimet" },
  { href: "#gallery", label: "Galeria" },
  { href: "#about", label: "Rreth Nesh" },
  { href: "#reviews", label: "Vlerësimet" },
  { href: "#contact", label: "Kontakti" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <Scissors className="h-5 w-5 text-accent" />
            <span className="font-display text-2xl tracking-widest">XAVI</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button size="sm" onClick={() => setBookingOpen(true)}>
              Rezervo Tani
            </Button>
            <button
              className="md:hidden text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <BookingForm open={bookingOpen} onOpenChange={setBookingOpen} />
    </>
  );
};

export default Header;
