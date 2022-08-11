import { component$ } from '@builder.io/qwik';

type RainAndHailIconProps = Partial<Omit<HTMLImageElement, 'alt' | 'src'>> & {
  imageClassName?: string;
};

const RainAndHailIcon = component$<RainAndHailIconProps>(({ className, imageClassName, ...props }) => (
  <div className={className}>
    <img {...props} alt="Vertex Software" className={imageClassName} src="/images/logos/rain-and-hail-icon.ico" />
  </div>
));

export type { RainAndHailIconProps };
export { RainAndHailIcon };
