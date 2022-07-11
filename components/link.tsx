import type { FC } from 'react';
import type { LinkProps as NextLinkProps } from 'next/link';
import NextLink from 'next/link';

type ExternalLinkProps = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

type InternalLinkProps = Omit<NextLinkProps, 'href' | 'passHref'> & { href: string; children: React.ReactNode };

type LinkProps = ExternalLinkProps | InternalLinkProps;

const Link: FC<LinkProps> = (props) => {
  if (props.href?.includes('http')) {
    const { children, href, ...externalProps } = props as ExternalLinkProps;

    return (
      // eslint-disable-next-line react/jsx-no-target-blank
      <a href={href} rel="noreferrer" target="_blank" {...externalProps}>
        {children}
      </a>
    );
  }

  const { children, href, ...internalProps } = props as InternalLinkProps;

  return (
    <NextLink href={href} passHref {...internalProps}>
      <a>{children}</a>
    </NextLink>
  );
};

export type { LinkProps };
export { Link };
