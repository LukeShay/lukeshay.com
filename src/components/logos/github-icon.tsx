import { component$ } from '@builder.io/qwik';

type GithubIconProps = {
  imageClassName?: string;
  className?: string;
  width?: number;
  height?: number;
};

const GithubIcon = component$<GithubIconProps>(({ className, imageClassName, ...props }) => (
  <div className={className}>
    <img {...props} alt="GitHub" className={imageClassName} src="/images/logos/github-icon.svg" />
  </div>
));

export type { GithubIconProps };
export { GithubIcon };
