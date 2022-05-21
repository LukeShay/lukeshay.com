import Link from 'next/link';
import type {FC, ReactNode} from 'react';
import {useEffect} from 'react';
import {useRouter} from 'next/router';
import {ExternalLinkIcon} from '@heroicons/react/outline';

const classNames = (...args: (boolean | string | null | undefined)[]): string => args.filter(Boolean).join(' ');

type NavigationLinkProps = {
    children: ReactNode;
    icon: ReactNode;
    href: string;
    shortcut?: string;
};

const NavigationLink: FC<NavigationLinkProps> = ({children, href, icon, shortcut}) => {
    const router = useRouter();

    const ariaCurrent =
        router.asPath.includes(href) && href !== '/' ? 'page' : router.pathname === href ? 'page' : undefined;

    useEffect(() => {
        document.addEventListener('keypress', (event) => {
            if (event.key === shortcut) {
                void router.push(href);
            }
        });
    });

    // eslint-disable-next-line unicorn/string-content
    const external = href.includes('https://') || href.includes('http://');

    const content = (
        <div className="flex justify-between">
            <div className="flex items-center">
                {icon}
                <span className="sr-only md:not-sr-only">{children}</span>
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

    const className = classNames(
        'block items-center rounded-md py-1.5 px-4 text-sm text-slate-700 duration-200 ease-in-out hover:bg-slate-100 mb-0.5',
        ariaCurrent === 'page' && 'bg-slate-100'
    );

    return external ? (
        <a aria-current={ariaCurrent} className={className} href={href} rel="noopener noreferrer" target="_blank">
            {content}
        </a>
    ) : (
        <Link href={href} passHref>
            <a aria-current={ariaCurrent} className={className}>
                {content}
            </a>
        </Link>
    );
};

export type {NavigationLinkProps};
export {NavigationLink};
