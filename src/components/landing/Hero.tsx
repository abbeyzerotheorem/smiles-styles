import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <section className="relative h-[60vh] min-h-[400px] w-full text-white flex items-center justify-center">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-primary/40 bg-gradient-to-t from-primary/60 to-transparent" />
      <div className="relative z-10 text-center p-4">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl drop-shadow-lg">
          Elegance at Your Fingertips
        </h1>
        <p className="mt-4 max-w-2xl mx-auto font-body text-lg md:text-xl drop-shadow-md">
          Discover a perfect fusion of style and relaxation at Randburg's premier nail and beauty salon.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link href="#book">Book an Appointment</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
