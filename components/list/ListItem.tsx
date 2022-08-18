/** @jsx h */
import { h } from "preact";
import { cn, tw } from "@twind";

type ListItemProps = {
  children?: h.JSX.Element;
  className?: string;
  contentClassName?: string;
  description?: string;
  icon?: h.JSX.Element;
  title?: string;
  // deno-lint-ignore no-explicit-any
  titleAs?: any;
};

const ListItem = ({
  children,
  icon,
  title,
  description,
  className,
  contentClassName,
  titleAs: TitleComponent = "h3",
}: ListItemProps) => (
  <div className={cn(className, "flex items-center")}>
    {icon && <div className={tw`pr-4`}>{icon}</div>}
    <div
      className={cn(
        contentClassName,
        "w-full items-center border-b border-slate-200 py-5",
      )}
    >
      {title && description && (
        <div>
          <TitleComponent>{title}</TitleComponent>
          <p className={tw`text-sm text-slate-700`}>{description}</p>
        </div>
      )}
      {children}
    </div>
  </div>
);

export type { ListItemProps };
export { ListItem };
