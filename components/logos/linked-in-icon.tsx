import Image from 'next/image';
import type {ImageProps} from 'next/image';
import type {FC} from 'react';

type LinkedInIconProps = Omit<ImageProps, 'alt' | 'src'> & {
    imageClassName?: string;
};

const LinkedInIcon: FC<LinkedInIconProps> = ({className, imageClassName, ...props}) => (
    <div className={className}>
        <Image {...props} alt="LinkedIn" className={imageClassName} src="/images/logos/linked-in-icon.svg" />
    </div>
);

export type {LinkedInIconProps};
export {LinkedInIcon};
