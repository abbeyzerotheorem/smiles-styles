import { Phone, Mail, MapPin, Star } from "lucide-react";

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

export default function Contact() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h2 className="font-headline text-4xl md:text-5xl">Get In Touch</h2>
        <p className="mt-4 text-muted-foreground max-w-md">
          We'd love to hear from you. Whether you have a question about our services or want to book an appointment, feel free to reach out.
        </p>
        <div className="mt-8">
            <h3 className="font-headline text-2xl font-semibold">Business Hours</h3>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>Mon - Fri: 8:30 AM - 8:00 PM</li>
              <li>Saturday: 9:00 AM - 5:00 PM</li>
              <li>Sunday: 10:00 AM - 8:00 PM</li>
            </ul>
        </div>
      </div>
      <div>
        <ul className="space-y-6">
          <li className="flex items-start gap-4">
            <MapPin className="h-6 w-6 mt-1 shrink-0 text-primary" />
            <div>
                <h4 className="font-semibold">Address</h4>
                <span className="text-muted-foreground">
                173 Bram Fischer Dr, Ferndale, Randburg, 2194
                </span>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <Phone className="h-6 w-6 mt-1 shrink-0 text-primary" />
            <div>
                <h4 className="font-semibold">Phone</h4>
                <span className="text-muted-foreground">+27 76 507 5573</span>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <Mail className="h-6 w-6 mt-1 shrink-0 text-primary" />
            <div>
                <h4 className="font-semibold">Email</h4>
                <span className="text-muted-foreground">adcrown1@gmail.com</span>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <WhatsAppIcon className="h-6 w-6 mt-1 shrink-0 text-primary" />
            <div>
                <h4 className="font-semibold">WhatsApp</h4>
                <a href="https://wa.me/27765075573" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    Message us
                </a>
            </div>
          </li>
           <li className="flex items-start gap-4">
            <Star className="h-6 w-6 mt-1 shrink-0 text-primary" />
            <div>
                <h4 className="font-semibold">Google Review</h4>
                 <a href="https://g.page/r/CeWZWHR0advkEBM/review" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    Leave a review
                </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
