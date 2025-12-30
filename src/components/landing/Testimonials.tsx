import Image from "next/image";
import { testimonials, type Testimonial } from "@/lib/data";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const initials = testimonial.name.split(' ').map(n => n[0]).join('');
  return (
    <Card className="h-full flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="pt-6">
        <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
      </CardContent>
      <CardHeader>
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={testimonial.image} alt={testimonial.name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-bold font-headline text-lg">{testimonial.name}</p>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}

export default function Testimonials() {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="font-headline text-4xl md:text-5xl">Words of Praise</h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          See what our happy clients have to say about their experience.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}
