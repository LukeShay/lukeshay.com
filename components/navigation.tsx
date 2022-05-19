import Link from 'next/link';
import type {FC} from 'react';
import {useEffect} from 'react';
import {UserIcon, CodeIcon, ChatIcon} from '@heroicons/react/outline';
import {useRouter} from 'next/router';

const classNames = (...args: (boolean | string | null | undefined)[]): string => args.filter(Boolean).join(' ');

type NavigationLinkProps = {
    children: React.ReactNode;
    icon: React.ReactNode;
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

    return (
        <li>
            <Link href={href} passHref>
                <a
                    aria-current={ariaCurrent}
                    className={classNames(
                        'block py-2 px-4 rounded-md items-center hover:bg-slate-100 ease-in-out duration-200 text-sm text-slate-700',
                        ariaCurrent === 'page' && 'bg-slate-100'
                    )}
                >
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            {icon}
                            {children}
                        </div>
                        {shortcut && (
                            <div className="h-5 w-5 flex justify-center items-center rounded bg-slate-300 text-xs">
                                <p className="text-slate-500">{shortcut}</p>
                            </div>
                        )}
                    </div>
                </a>
            </Link>
        </li>
    );
};

const Navigation: FC = () => (
    <div className="w-full h-full py-6 -ml-2 pl-2">
        <h1 className="text-slate-900 font-semibold px-4 uppercase">{'Luke Shay'}</h1>
        <nav className="py-4 space-y-1 block">
            <ul>
                <NavigationLink href="/" icon={<UserIcon className="h-4 w-4 mr-2" />} shortcut="1">
                    {'About'}
                </NavigationLink>
                <NavigationLink href="/projects" icon={<CodeIcon className="h-4 w-4 mr-2" />} shortcut="2">
                    {'Projects'}
                </NavigationLink>
                <NavigationLink href="/contact" icon={<ChatIcon className="h-4 w-4 mr-2" />} shortcut="3">
                    {'Contact'}
                </NavigationLink>
            </ul>
            <p className="text-xs text-slate-500 pt-3 pb-1 px-4">{'Links'}</p>
            <ul>
                <NavigationLink href="/github" icon={<UserIcon className="h-4 w-4 mr-2" />} shortcut="4">
                    {'GitHub'}
                </NavigationLink>
                <NavigationLink href="/linkedin" icon={<UserIcon className="h-4 w-4 mr-2" />} shortcut="5">
                    {'LinkedIn'}
                </NavigationLink>
            </ul>
            {/* <NavigationLink href="/">{'About'}</NavigationLink>
            <NavigationLink href="/">{'About'}</NavigationLink> */}
        </nav>
    </div>
);

export {Navigation};
