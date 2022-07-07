import Image from 'next/future/image';
import type { ImageProps } from 'next/future/image';
import type { FC } from 'react';

type HyVeeIconProps = Omit<ImageProps, 'alt' | 'src'> & {
  imageClassName?: string;
};

const HyVeeIcon: FC<HyVeeIconProps> = ({ className, imageClassName, ...props }) => (
  <div className={className}>
    <Image {...props} alt="Hy-Vee" className={imageClassName} src="/images/logos/hy-vee-icon.svg" />
  </div>
);

export type { HyVeeIconProps };
export { HyVeeIcon };
