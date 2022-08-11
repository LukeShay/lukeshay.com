import { component$, Slot } from '@builder.io/qwik';

type LinkProps = Partial<Omit<HTMLAnchorElement, 'rel' | 'target'>>;

const Link = component$<LinkProps>(({ href, ...props }) => {
  if (href.startsWith('http')) {
    return (
      <a {...props} href={href} rel="noreferrer" target="_blank">
        <Slot />
      </a>
    );
  }

  return (
    <a {...props} href={href}>
      <Slot />
    </a>
  );
});

export type { LinkProps };
export { Link };
