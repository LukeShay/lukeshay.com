import Image from 'next/future/image';
import type { ImageProps } from 'next/future/image';
import type { FC } from 'react';

type GravatarProps = Omit<ImageProps, 'src'>;

const Gravatar: FC<GravatarProps> = ({ className, alt, height, width, ...props }) => (
  <Image
    alt={alt ?? 'Luke Shay'}
    className={`${String(className)} h-32 w-32 rounded-full`}
    height={height ?? 128}
    src="https://www.gravatar.com/avatar/c57099d7997c3af5a04728e920d8e243.png?s=2048"
    width={width ?? 128}
    {...props}
  />
);

export type { GravatarProps };
export { Gravatar };
