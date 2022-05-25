import type {FC, ReactNode} from 'react';

import {cn} from 'lib/client/helpers/classnames';

type ListItemProps = {
    children?: ReactNode;
    className?: string;
    contentClassName?: string;
    description?: string;
    icon?: ReactNode;
    title?: string;
};

const ListItem: FC<ListItemProps> = ({children, icon, title, description, className, contentClassName}) => (
    <div className={cn(className, 'flex items-center')}>
        {icon && <div className="pr-4">{icon}</div>}
        <div className={cn(contentClassName, 'w-full items-center border-b border-slate-200 py-5')}>
            {title && description && (
                <div>
                    <h3>{title}</h3>
                    <p className="text-sm text-slate-500">{description}</p>
                </div>
            )}
            {children}
        </div>
    </div>
);

export type {ListItemProps};
export {ListItem};
