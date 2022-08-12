import { component$ } from '@builder.io/qwik';

type GravatarProps = {
  className?: string;
  height?: number;
  width?: number;
  alt?: string;
};

const Gravatar = component$<GravatarProps>(({ className, alt, height, width }) => (
  <img
    alt={alt ?? 'Luke Shay'}
    className={`${String(className)} h-32 w-32 rounded-full`}
    height={height ?? 128}
    src="https://www.gravatar.com/avatar/c57099d7997c3af5a04728e920d8e243.png?s=2048"
    width={width ?? 128}
  />
));

export type { GravatarProps };
export { Gravatar };
