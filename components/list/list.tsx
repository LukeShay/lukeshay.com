import type { FC, ReactNode } from 'react';

type ListProps = {
  children: ReactNode;
};

const List: FC<ListProps> = ({ children }) => <div>{children}</div>;

export type { ListProps };
export { List };
