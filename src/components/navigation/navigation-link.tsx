import { component$, Slot, useClientEffect$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { ExternalLinkIcon } from '~/components/heroicons/outline'; // TODO: wrap

import { cn } from '~/client/helpers/classnames';

type NavigationLinkProps = {
  href: string;
  shortcut?: string;
};

const NavigationLink = component$<NavigationLinkProps>(({ href, shortcut }) => {
  const pathname = useLocation().pathname;

  const ariaCurrent = pathname.includes(href) && href !== '/' ? 'page' : pathname === href ? 'page' : undefined;

  useClientEffect$(() => {
    document.addEventListener('keypress', (event) => {
      if (event.key === shortcut) {
        window.location.href = href;
      }
    });
  });

  // eslint-disable-next-line unicorn/string-content
  const external = href.includes('https://') || href.includes('http://');

  const content = (
    <div className="flex justify-between">
      <div className="flex items-center">
        <Slot name="icon" />
        <span className="sr-only md:not-sr-only">
          <Slot />
        </span>
      </div>
      {shortcut && !external && (
        <div className="hidden h-5 w-5 items-center justify-center rounded bg-slate-300 text-xs md:flex">
          <p className="text-slate-500">{shortcut}</p>
        </div>
      )}
      {external && (
        <div className="hidden h-5 w-5 items-center justify-center md:flex">
          <p className="text-slate-500">
            <ExternalLinkIcon className="h-4 w-4" />
          </p>
        </div>
      )}
    </div>
  );

  const className = cn(
    'block items-center rounded-md py-1.5 px-4 text-sm text-slate-700 duration-200 ease-in-out hover:bg-slate-100 mb-0.5',
    ariaCurrent === 'page' && 'bg-slate-100',
  );

  return external ? (
    <a aria-current={ariaCurrent} className={className} href={href} rel="noreferrer" target="_blank">
      {content}
    </a>
  ) : (
    <a aria-current={ariaCurrent} className={className} href={href}>
      {content}
    </a>
  );
});

export type { NavigationLinkProps };
export { NavigationLink };
