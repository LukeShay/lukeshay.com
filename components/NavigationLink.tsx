/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
// import { useEffect } from 'preact/hooks';
import { ExternalLinkIcon } from "~/components/heroicons/outline.tsx";
import { cn } from "@twind";

type NavigationLinkProps = {
  active?: boolean;
  children: h.JSX.Element | string;
  icon: h.JSX.Element | string;
  href: string;
  shortcut?: string;
};

const NavigationLink = ({
  active,
  children,
  href,
  icon,
  shortcut,
}: NavigationLinkProps) => {
  const ariaCurrent = active ? "page" : undefined;

  shortcut = undefined;

  // useEffect(() => {
  //   document.addEventListener('keypress', (event) => {
  //     if (event.key === shortcut) {
  //       window.location.href = href;
  //     }
  //   });
  // });

  // eslint-disable-next-line unicorn/string-content
  const external = href.includes("https://") || href.includes("http://");

  const content = (
    <div className={tw`flex justify-between`}>
      <div className={tw`flex items-center`}>
        {icon}
        <span className={tw`sr-only md:not-sr-only`}>{children}</span>
      </div>
      {shortcut && !external && (
        <div
          className={tw`hidden h-5 w-5 items-center justify-center rounded bg-slate-300 text-xs md:flex`}
        >
          <p className={tw`text-slate-500`}>{shortcut}</p>
        </div>
      )}
      {external && (
        <div className={tw`hidden h-5 w-5 items-center justify-center md:flex`}>
          <p className={tw`text-slate-500`}>
            <ExternalLinkIcon className={tw`h-4 w-4`} />
          </p>
        </div>
      )}
    </div>
  );

  const className = cn(
    "block items-center rounded-md py-1.5 px-4 text-sm text-slate-700 duration-200 ease-in-out hover:bg-slate-100 mb-0.5",
    ariaCurrent === "page" && "bg-slate-100",
  );

  return external
    ? (
      <a
        aria-current={ariaCurrent}
        className={className}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {content}
      </a>
    )
    : (
      <a aria-current={ariaCurrent} className={className} href={href}>
        {content}
      </a>
    );
};

export type { NavigationLinkProps };
export { NavigationLink };
