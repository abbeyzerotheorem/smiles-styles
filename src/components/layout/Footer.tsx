"use client";

import Link from "next/link";
import { PawPrint, Accessibility, Leaf, Phone, Mail, MapPin, Star } from "lucide-react";

const navItems = [
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Book Now", href: "#book" },
];

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.38 1.25 4.85L2 22l5.25-1.38c1.47.79 3.1 1.25 4.85 1.25 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2z"></path>
      <path d="M16.41 14.06c-.14-.28-.5-.46-.73-.46-.23 0-.46.06-.73.22-.28.16-.73.73-1 1-.28.28-.5.39-.73.22-.23-.17-1.47-.52-2.8-1.7s-2.14-2.52-2.14-2.8.33-.46.46-.64c.13-.17.28-.28.39-.46.1-.17.06-.33 0-.46-.05-.17-.73-1.7-.99-2.28-.28-.57-.5-.46-.73-.46h-.5c-.22 0-.45.11-.64.33-.2.22-.73.73-.73 1.7s.73 2 .73 2.28c0 .28 1.47 3.59 3.59 5 2.12 1.4 2.8 1.12 3.39.99.59-.13.73-.73.73-1.41.05-.68 0-1.12 0-1.12z"></path>
    </svg>
  );

export default function Footer() {
  return (
    <footer className="bg-primary/5 border-t border-primary/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
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
              <li className="flex items-center gap-3">
                  <a href="https://wa.me/27765075573" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary">
                    <WhatsAppIcon className="h-5 w-5 shrink-0 text-primary" />
                    <span>WhatsApp</span>
                  </a>
              </li>
               <li className="flex items-center gap-3">
                <a href="https://g.page/r/CeWZWHR0advkEBM/review" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary">
                  <Star className="h-5 w-5 shrink-0 text-primary" />
                  <span>Leave a Review</span>
                </a>
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
            &copy; {new Date().getFullYear()} Smiles & Styles. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
