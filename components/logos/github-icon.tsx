import Image from 'next/image';
import type {ImageProps} from 'next/image';
import type {FC} from 'react';

type GithubIconProps = Omit<ImageProps, 'alt' | 'src'> & {
    imageClassName?: string;
};

const GithubIcon: FC<GithubIconProps> = ({className, imageClassName, ...props}) => (
    <div className={className}>
        <Image {...props} alt="GitHub" className={imageClassName} src="/images/logos/github-icon.svg" />
    </div>
);

export type {GithubIconProps};
export {GithubIcon};
