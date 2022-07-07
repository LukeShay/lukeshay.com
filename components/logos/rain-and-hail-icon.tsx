import Image from 'next/future/image';
import type { ImageProps } from 'next/future/image';
import type { FC } from 'react';

type RainAndHailIconProps = Omit<ImageProps, 'alt' | 'src'> & {
  imageClassName?: string;
};

const RainAndHailIcon: FC<RainAndHailIconProps> = ({ className, imageClassName, ...props }) => (
  <div className={className}>
    <Image {...props} alt="Vertex Software" className={imageClassName} src="/images/logos/rain-and-hail-icon.ico" />
  </div>
);

export type { RainAndHailIconProps };
export { RainAndHailIcon };
