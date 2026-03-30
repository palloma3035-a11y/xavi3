import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle } from "lucide-react";

const serviceOptions = [
  "Prerje Flokësh",
  "Rregullim Mjekre",
  "Prerje + Mjekër",
  "Prerje Fëmijësh",
  "Stilim",
  "Ngjyrosje",
];

interface BookingFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const BookingForm = ({ open, onOpenChange }: BookingFormProps) => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const update = (field: string, value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Rezervimi u dërgua! ✓",
      description: "Do t'ju kontaktojmë së shpejti për konfirmim.",
    });
    onOpenChange(false);
    setForm({ name: "", phone: "", service: "", date: "", time: "", notes: "" });
  };

  const whatsappText = encodeURIComponent(
    `Përshëndetje! Dua të rezervoj një termin.\nEmri: ${form.name}\nShërbimi: ${form.service || "—"}\nData: ${form.date || "—"}\nOra: ${form.time || "—"}\n${form.notes ? `Shënime: ${form.notes}` : ""}`
  );

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="bg-card border-border overflow-y-auto w-full sm:max-w-md">
        <SheetHeader className="mb-6">
          <SheetTitle className="font-display text-2xl tracking-wider">
            REZERVO TERMIN
          </SheetTitle>
          <SheetDescription>
            Plotëso formularin ose rezervo direkt në WhatsApp.
          </SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="bk-name">Emri *</Label>
            <Input
              id="bk-name"
              required
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Emri juaj"
              maxLength={100}
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="bk-phone">Telefoni *</Label>
            <Input
              id="bk-phone"
              required
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="+383 ..."
              maxLength={20}
            />
          </div>

          <div className="space-y-1.5">
            <Label>Shërbimi</Label>
            <Select value={form.service} onValueChange={(v) => update("service", v)}>
              <SelectTrigger>
                <SelectValue placeholder="Zgjidhni shërbimin" />
              </SelectTrigger>
              <SelectContent>
                {serviceOptions.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="bk-date">Data *</Label>
              <Input
                id="bk-date"
                type="date"
                required
                value={form.date}
                onChange={(e) => update("date", e.target.value)}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="bk-time">Ora *</Label>
              <Input
                id="bk-time"
                type="time"
                required
                value={form.time}
                onChange={(e) => update("time", e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="bk-notes">Shënime</Label>
            <Textarea
              id="bk-notes"
              value={form.notes}
              onChange={(e) => update("notes", e.target.value)}
              placeholder="Shënime shtesë (opsionale)..."
              maxLength={500}
            />
          </div>

          <Button type="submit" className="w-full">
            Dërgo Rezervimin
          </Button>
        </form>

        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground mb-3 text-center">
            Ose rezervoni shpejt përmes WhatsApp
          </p>
          <Button variant="outline" className="w-full" asChild>
            <a
              href={`https://wa.me/38343983164?text=${whatsappText}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Rezervo në WhatsApp
            </a>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default BookingForm;
