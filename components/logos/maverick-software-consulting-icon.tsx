import Image from 'next/future/image';
import type { ImageProps } from 'next/future/image';
import type { FC } from 'react';

type MaverickSoftwareConsultingIconProps = Omit<ImageProps, 'alt' | 'src'> & {
  imageClassName?: string;
};

const MaverickSoftwareConsultingIcon: FC<MaverickSoftwareConsultingIconProps> = ({
  className,
  imageClassName,
  ...props
}) => (
  <div className={className}>
    <Image
      {...props}
      alt="Maverick Software Consulting"
      className={imageClassName}
      src="/images/logos/maverick-software-consulting-icon.png"
    />
  </div>
);

export type { MaverickSoftwareConsultingIconProps };
export { MaverickSoftwareConsultingIcon };
