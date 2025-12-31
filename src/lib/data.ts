import type { IconName } from '@/components/icons';

export type Service = {
  name: string;
  description: string;
  price: string;
  icon: IconName;
};

export const services: Service[] = [
  {
    name: 'Ombre Nails',
    description: 'A beautiful gradient of colors, blending from a lighter to a darker shade.',
    price: 'R450',
    icon: 'Sparkles',
  },
  {
    name: 'Stiletto Nails',
    description: 'Long, pointed nails that make a bold and dramatic statement.',
    price: 'R500',
    icon: 'Gem',
  },
  {
    name: 'Classic Manicure',
    description: 'Includes nail shaping, cuticle care, a relaxing hand massage, and polish.',
    price: 'R250',
    icon: 'Hand',
  },
  {
    name: 'Special Pedicure',
    description: 'Indulge in a rejuvenating pedicure with a luxurious foot scrub and massage.',
    price: 'R350',
    icon: 'Footprints',
  },
  {
    name: 'Normal Eye Lashes',
    description: 'Enhance your natural beauty with expertly applied classic eyelash extensions for a subtle, charming look.',
    price: 'R200',
    icon: 'Eye',
  }
];

export type Testimonial = {
  quote: string;
  name: string;
  image: string;
};

export const testimonials: Testimonial[] = [
  {
    quote: "The best nail salon in Randburg! My ombre nails are always flawless. The atmosphere is so relaxing and the staff are incredibly talented.",
    name: "Lerato M.",
    image: "https://picsum.photos/seed/person1/100/100"
  },
  {
    quote: "I'm in love with my stiletto nails. The attention to detail is amazing. Plus, being able to bring my dog is a huge bonus!",
    name: "Jessica P.",
    image: "https://picsum.photos/seed/person2/100/100"
  },
  {
    quote: "The special pedicure is pure bliss. My feet have never felt so soft. A truly professional and welcoming salon.",
    name: "Thando K.",
    image: "https://picsum.photos/seed/person3/100/100"
  }
];
