import { component$, Slot } from '@builder.io/qwik';

type ListProps = {
};

const List = component$<ListProps> (() => <div><Slot /></div>);

export type { ListProps };
export { List };
