import Image from 'next/future/image';
import type { ImageProps } from 'next/future/image';
import type { FC } from 'react';

type SourceAlliesIconProps = Omit<ImageProps, 'alt' | 'src'> & {
  imageClassName?: string;
};

const SourceAlliesIcon: FC<SourceAlliesIconProps> = ({ className, imageClassName, ...props }) => (
  <div className={className}>
    <Image {...props} alt="Source Allies" className={imageClassName} src="/images/logos/source-allies-icon.png" />
  </div>
);

export type { SourceAlliesIconProps };
export { SourceAlliesIcon };
