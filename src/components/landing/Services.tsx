import { services, type Service } from "@/lib/data";
import { Icons } from "@/components/icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function ServiceCard({ service }: { service: Service }) {
  const Icon = Icons[service.icon];

  return (
    <Card className="flex flex-col text-center items-center transition-all duration-300 hover:shadow-accent/20 hover:shadow-lg hover:-translate-y-2">
      <CardHeader>
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Icon className="h-8 w-8" />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <CardTitle className="font-headline text-2xl mb-2">{service.name}</CardTitle>
        <p className="text-muted-foreground flex-grow mb-4">{service.description}</p>
        <p className="text-lg font-bold text-primary">{service.price}</p>
      </CardContent>
    </Card>
  );
}

export default function Services() {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="font-headline text-4xl md:text-5xl">Our Services</h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          Indulge in our range of creative and rejuvenating treatments.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <ServiceCard key={service.name} service={service} />
        ))}
      </div>
    </div>
  );
}
