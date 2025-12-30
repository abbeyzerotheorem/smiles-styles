import { Sparkles, Gem, Hand, Footprints, LucideProps, Palette } from 'lucide-react';

export const Icons = {
  Sparkles: (props: LucideProps) => <Sparkles {...props} />,
  Gem: (props: LucideProps) => <Gem {...props} />,
  Hand: (props: LucideProps) => <Hand {...props} />,
  Footprints: (props: LucideProps) => <Footprints {...props} />,
  Logo: (props: LucideProps) => <Palette {...props} />,
};

export type IconName = keyof typeof Icons;
