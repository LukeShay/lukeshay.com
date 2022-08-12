import { component$ } from '@builder.io/qwik';

type LinkedInIconProps = {
  imageClassName?: string;
  className?: string;
  width?: number;
  height?: number;
};

const LinkedInIcon = component$<LinkedInIconProps>(({ className, imageClassName, ...props }) => (
  <div className={className}>
    <img {...props} {...props} alt="LinkedIn" className={imageClassName} src="/images/logos/linked-in-icon.svg" />
  </div>
));

export type { LinkedInIconProps };
export { LinkedInIcon };
