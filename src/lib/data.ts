import type { IconName } from '@/components/icons';

export type Service = {
  name: string;
  description: string;
  price: string;
  icon: IconName;
};

export const services: Service[] = [
  {
    name: 'Ombre / Stiletto',
    description: 'Choose a beautiful color gradient (Ombre) or a bold, pointed shape (Stiletto).',
    price: 'R300',
    icon: 'Sparkles',
  },
  {
    name: 'Classic Manicure',
    description: 'Includes nail shaping, cuticle care, a relaxing hand massage, and polish.',
    price: 'R250',
    icon: 'Hand',
  },
  {
    name: 'Natural Nails',
    description: 'A classic treatment to keep your natural nails healthy and beautiful, including shaping, cuticle care, and a polish of your choice.',
    price: 'R250',
    icon: 'Hand'
  },
  {
    name: 'Special pedicure with hand',
    description: 'Experience a soothing pedicure designed to refresh and pamper your feet, all with expert hand care.',
    price: 'R450',
    icon: 'Footprints',
  },
  {
    name: 'Foot Scrub',
    description: 'Refresh tired feet with a gentle exfoliation that leaves your skin feeling soft and smooth.',
    price: 'R350',
    icon: 'Footprints',
  },
  {
    name: 'Normal Eye Lashes',
    description: 'Enhance your natural beauty with expertly applied eyelash services designed to bring subtle definition and charm to your look.',
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
