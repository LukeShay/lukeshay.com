import type { FC } from 'react';
import { UserIcon, CodeIcon, ChatIcon } from '@heroicons/react/outline';

import { GithubIcon } from '../logos/github-icon';
import { LinkedInIcon } from '../logos/linked-in-icon';

import { NavigationLink } from './navigation-link';

const Navigation: FC = () => (
  <div className="fixed bottom-0 -ml-2 w-full px-2 pb-2 md:static md:h-full md:w-72 md:py-6">
    <h1 className="hidden px-4 font-semibold uppercase text-slate-900 md:block">{'Luke Shay'}</h1>
    <nav className="flex justify-between md:block md:space-y-1 md:py-4">
      <NavigationLink href="/" icon={<UserIcon className="h-4 w-4 md:mr-2" />} shortcut="1">
        {'About'}
      </NavigationLink>
      <NavigationLink href="/projects" icon={<CodeIcon className="h-4 w-4 md:mr-2" />} shortcut="2">
        {'Projects'}
      </NavigationLink>
      <NavigationLink href="/contact" icon={<ChatIcon className="h-4 w-4 md:mr-2" />} shortcut="3">
        {'Contact'}
      </NavigationLink>
      <p className="hidden px-4 pt-3 pb-1 text-xs text-slate-500 md:block">{'Links'}</p>
      <NavigationLink
        href="https://github.com/lukeshay"
        icon={<GithubIcon className="h-4 w-4 md:mr-2" height={16} width={16} />}
        shortcut="4"
      >
        {'GitHub'}
      </NavigationLink>
      <NavigationLink
        href="https://www.linkedin.com/in/luke-shay"
        icon={<LinkedInIcon className="h-4 w-4 md:mr-2" height={16} width={16} />}
        shortcut="5"
      >
        {'LinkedIn'}
      </NavigationLink>
    </nav>
  </div>
);

export { Navigation };
