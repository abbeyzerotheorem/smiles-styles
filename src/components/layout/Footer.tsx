import Link from "next/link";
import { Palette, PawPrint, Accessibility, Leaf, Phone, Mail, MapPin } from "lucide-react";

const navItems = [
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Book Now", href: "#book" },
];

export default function Footer() {
  return (
    <footer className="bg-primary/5 border-t border-primary/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Palette className="h-7 w-7 text-primary" />
              <span className="font-headline text-xl font-bold text-foreground">
                Smiles & Styles
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Randburg's premier destination for exquisite nail artistry and beauty services.
            </p>
            <div className="mt-6 flex space-x-4">
              <PawPrint className="h-6 w-6 text-primary/80" title="Pet-Friendly" />
              <Accessibility className="h-6 w-6 text-primary/80" title="Wheelchair Accessible" />
              <Leaf className="h-6 w-6 text-primary/80" title="Commitment to Sustainability" />
            </div>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold">Explore</h3>
            <ul className="mt-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-headline text-lg font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">
                  173 Bram Fischer, Randburg, Johannesburg
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">(011) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">bookings@smilesstyles.co.za</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold">Hours</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Mon - Fri: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 5:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary/10 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Step into Smiles & Styles. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
