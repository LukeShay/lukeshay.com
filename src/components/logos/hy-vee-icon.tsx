import { component$ } from '@builder.io/qwik';

type HyVeeIconProps = {
  imageClassName?: string;
  className?: string;
  width?: number;
  height?: number;
};

const HyVeeIcon = component$<HyVeeIconProps>(({ className, imageClassName, ...props }) => (
  <div className={className}>
    <img {...props} alt="Hy-Vee" className={imageClassName} src="/images/logos/hy-vee-icon.svg" />
  </div>
));

export type { HyVeeIconProps };
export { HyVeeIcon };
