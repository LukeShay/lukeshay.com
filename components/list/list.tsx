/** @jsx h */
import { h } from "preact";

type ListProps = {
  children: h.JSX.Element;
};

const List = ({ children }: ListProps) => <div>{children}</div>;

export type { ListProps };
export { List };
