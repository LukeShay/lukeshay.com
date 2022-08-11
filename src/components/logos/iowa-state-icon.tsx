import { component$ } from '@builder.io/qwik';

type IowaStateIconProps = Partial<Omit<HTMLImageElement, 'alt' | 'src'>> & {
  imageClassName?: string;
};

const IowaStateIcon = component$<IowaStateIconProps>(({ className, imageClassName, ...props }) => (
  <div className={className}>
    <img {...props} {...props} alt="Iowa State" className={imageClassName} src="/images/logos/iowa-state-icon.svg" />
  </div>
));

export type { IowaStateIconProps };
export { IowaStateIcon };
