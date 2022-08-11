import { component$ } from '@builder.io/qwik';
import { UserIcon, CodeIcon, ChatIcon } from '~/components/heroicons/outline'; // TODO: wrap

import { GithubIcon } from '../logos/github-icon';
import { LinkedInIcon } from '../logos/linked-in-icon';

import { NavigationLink } from './navigation-link';

const Navigation = component$(() => (
  <div className="fixed bottom-0 -ml-2 w-full px-2 pb-2 md:static md:h-full md:w-72 md:py-6">
    <h1 className="hidden px-4 font-semibold uppercase text-slate-900 md:block">{'Luke Shay'}</h1>
    <nav className="flex justify-between md:block md:space-y-1 md:py-4">
      <NavigationLink href="/" shortcut="1">
        <span q:slot="icon">
          <UserIcon className="h-4 w-4 md:mr-2" />
        </span>
        {'About'}
      </NavigationLink>
      <NavigationLink href="/projects" shortcut="2">
        <span q:slot="icon">
          <CodeIcon className="h-4 w-4 md:mr-2" />
        </span>
        {'Projects'}
      </NavigationLink>
      <NavigationLink href="/contact" shortcut="3">
        <span q:slot="icon">
          <ChatIcon className="h-4 w-4 md:mr-2" />
        </span>
        {'Contact'}
      </NavigationLink>
      <p className="hidden px-4 pt-3 pb-1 text-xs text-slate-500 md:block">{'Links'}</p>
      <NavigationLink href="https://github.com/lukeshay" shortcut="4">
        <span q:slot="icon">
          <GithubIcon className="h-4 w-4 md:mr-2" />
        </span>
        {'GitHub'}
      </NavigationLink>
      <NavigationLink href="https://www.linkedin.com/in/luke-shay" shortcut="5">
        <span q:slot="icon">
          <LinkedInIcon className="h-4 w-4 md:mr-2" />
        </span>
        {'LinkedIn'}
      </NavigationLink>
    </nav>
  </div>
));

export { Navigation };
