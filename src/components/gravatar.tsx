import { component$ } from '@builder.io/qwik';

type GravatarProps = Omit<HTMLImageElement, 'src'>;

const Gravatar = component$<GravatarProps>(({ className, alt, height, width, ...props }) => (
  <img
    alt={alt ?? 'Luke Shay'}
    className={`${String(className)} h-32 w-32 rounded-full`}
    height={height ?? 128}
    src="https://www.gravatar.com/avatar/c57099d7997c3af5a04728e920d8e243.png?s=2048"
    width={width ?? 128}
    {...props}
  />
));

export type { GravatarProps };
export { Gravatar };
