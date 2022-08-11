import { component$ } from '@builder.io/qwik';

type LinkedInIconProps = Partial<Omit<HTMLImageElement, 'alt' | 'src'>> & {
  imageClassName?: string;
};

const LinkedInIcon = component$<LinkedInIconProps>(({ className, imageClassName, ...props }) => (
  <div className={className}>
    <img {...props} {...props} alt="LinkedIn" className={imageClassName} src="/images/logos/linked-in-icon.svg" />
  </div>
));

export type { LinkedInIconProps };
export { LinkedInIcon };
