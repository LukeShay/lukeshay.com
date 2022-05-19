import type {FC} from 'react';
import {UserIcon, CodeIcon, ChatIcon} from '@heroicons/react/outline';

import {GithubIcon} from '../logos/github-icon';
import {LinkedInIcon} from '../logos/linked-in-icon';

import {NavigationLink} from './navigation-link';

const Navigation: FC = () => (
    <div className="-ml-2 h-full w-full py-6 pl-2">
        <h1 className="px-4 font-semibold uppercase text-slate-900">{'Luke Shay'}</h1>
        <nav className="block space-y-1 py-4">
            <ul>
                <NavigationLink href="/" icon={<UserIcon className="mr-2 h-4 w-4" />} shortcut="1">
                    {'About'}
                </NavigationLink>
                <NavigationLink href="/projects" icon={<CodeIcon className="mr-2 h-4 w-4" />} shortcut="2">
                    {'Projects'}
                </NavigationLink>
                <NavigationLink href="/contact" icon={<ChatIcon className="mr-2 h-4 w-4" />} shortcut="3">
                    {'Contact'}
                </NavigationLink>
            </ul>
            <p className="px-4 pt-3 pb-1 text-xs text-slate-500">{'Links'}</p>
            <ul>
                <NavigationLink
                    href="https://github.com/lukeshay"
                    icon={<GithubIcon className="mr-2 h-4 w-4" height={16} width={16} />}
                    shortcut="4"
                >
                    {'GitHub'}
                </NavigationLink>
                <NavigationLink
                    href="https://www.linkedin.com/in/luke-shay"
                    icon={<LinkedInIcon className="mr-2 h-4 w-4" height={16} width={16} />}
                    shortcut="5"
                >
                    {'LinkedIn'}
                </NavigationLink>
            </ul>
            {/* <NavigationLink href="/">{'About'}</NavigationLink>
            <NavigationLink href="/">{'About'}</NavigationLink> */}
        </nav>
    </div>
);

export {Navigation};
