/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import {
  ChatIcon,
  CodeIcon,
  UserIcon,
} from "~/components/heroicons/outline.tsx";

import { GithubIcon } from "~/components/logos/GithubIcon.tsx";
import { LinkedInIcon } from "~/components/logos/LinkedInIcon.tsx";

import { NavigationLink } from "./NavigationLink.tsx";
import { PageProps, UnknownPageProps } from "fresh/server.ts";

export type NavigationProps = {
  pageProps: PageProps | UnknownPageProps;
};

function Navigation(props: NavigationProps) {
  const {
    pageProps: { url },
  } = props;

  return (
    <div
      className={tw
        `fixed bottom-0 -ml-2 w-full px-2 pb-2 md:static md:h-full md:w-72 md:py-6`}
    >
      <h1 className={tw`hidden px-4 font-semibold text-slate-900 md:block`}>
        {"Luke Shay"}
      </h1>
      <nav className={tw`flex justify-between md:block md:space-y-1 md:py-4`}>
        <NavigationLink
          active={url.href === "/"}
          href="/"
          icon={<UserIcon className={tw`h-4 w-4 md:mr-2`} />}
          shortcut="1"
        >
          {"About"}
        </NavigationLink>
        <NavigationLink
          active={url.href === "/projects"}
          href="/projects"
          icon={<CodeIcon className={tw`h-4 w-4 md:mr-2`} />}
          shortcut="2"
        >
          {"Projects"}
        </NavigationLink>
        <NavigationLink
          active={url.href === "/contact"}
          href="/contact"
          icon={<ChatIcon className={tw`h-4 w-4 md:mr-2`} />}
          shortcut="3"
        >
          {"Contact"}
        </NavigationLink>
        <p
          className={tw`hidden px-4 pt-3 pb-1 text-xs text-slate-500 md:block`}
        >
          {"Links"}
        </p>
        <NavigationLink
          href="https://github.com/lukeshay"
          icon={
            <GithubIcon
              className={tw`h-4 w-4 md:mr-2`}
              height={16}
              width={16}
            />
          }
          shortcut="4"
        >
          {"GitHub"}
        </NavigationLink>
        <NavigationLink
          href="https://www.linkedin.com/in/luke-shay"
          icon={
            <LinkedInIcon
              className={tw`h-4 w-4 md:mr-2`}
              height={16}
              width={16}
            />
          }
          shortcut="5"
        >
          {"LinkedIn"}
        </NavigationLink>
      </nav>
    </div>
  );
}

export { Navigation };
