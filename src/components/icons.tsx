import { Sparkles, Gem, Hand, Footprints, Eye, LucideProps } from 'lucide-react';

export const Icons = {
  Sparkles: (props: LucideProps) => <Sparkles {...props} />,
  Gem: (props: LucideProps) => <Gem {...props} />,
  Hand: (props: LucideProps) => <Hand {...props} />,
  Footprints: (props: LucideProps) => <Footprints {...props} />,
  Eye: (props: LucideProps) => <Eye {...props} />,
};

export type IconName = keyof typeof Icons;
