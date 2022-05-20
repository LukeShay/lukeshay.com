import Image from 'next/image';
import type {ImageProps} from 'next/image';
import type {FC} from 'react';

type VertexSoftwareIconProps = Omit<ImageProps, 'alt' | 'src'> & {
    imageClassName?: string;
};

const VertexSoftwareIcon: FC<VertexSoftwareIconProps> = ({className, imageClassName, ...props}) => (
    <div className={className}>
        <Image
            {...props}
            alt="Vertex Software"
            className={imageClassName}
            src="/images/logos/vertex-software-icon.png"
        />
    </div>
);

export type {VertexSoftwareIconProps};
export {VertexSoftwareIcon};
