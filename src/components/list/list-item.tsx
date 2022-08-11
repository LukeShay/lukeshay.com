import { component$, Slot } from '@builder.io/qwik';

import { cn } from '~/client/helpers/classnames';

type ListItemProps = {
  className?: string;
  contentClassName?: string;
  description?: string;
  title?: string;
  titleAs?: string;
};

const ListItem = component$<ListItemProps>(({
  title,
  description,
  className,
  contentClassName,
  titleAs: TitleComponent = 'h3',
}) => (
  <div className={cn(className, 'flex items-center')}>
    <div className="pr-4"><Slot name="icon" /></div>
    <div className={cn(contentClassName, 'w-full items-center border-b border-slate-200 py-5')}>
      {title && description && (
        <div>
          <TitleComponent>{title}</TitleComponent>
          <p className="text-sm text-slate-700">{description}</p>
        </div>
      )}
      <Slot />
    </div>
  </div>
));

export type { ListItemProps };
export { ListItem };
