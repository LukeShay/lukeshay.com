import Image from 'next/image';
import type {ImageProps} from 'next/image';
import type {FC} from 'react';

type IowaStateIconProps = Omit<ImageProps, 'alt' | 'src'> & {
    imageClassName?: string;
};

const IowaStateIcon: FC<IowaStateIconProps> = ({className, imageClassName, ...props}) => (
    <div className={className}>
        <Image {...props} alt="Iowa State" className={imageClassName} src="/images/logos/iowa-state-icon.svg" />
    </div>
);

export type {IowaStateIconProps};
export {IowaStateIcon};
