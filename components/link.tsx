/** @jsx h */
import { h } from "preact";

type LinkProps = h.JSX.IntrinsicElements["a"];

const Link = (props: LinkProps) => {
  if (props.href?.includes("http")) {
    const { children, href, ...externalProps } = props;

    return (
      // eslint-disable-next-line react/jsx-no-target-blank
      <a href={href} rel="noreferrer" target="_blank" {...externalProps}>
        {children}
      </a>
    );
  }

  const { children, href, ...internalProps } = props;

  return (
    <a href={href} {...internalProps}>
      {children}
    </a>
  );
};

export type { LinkProps };
export { Link };
