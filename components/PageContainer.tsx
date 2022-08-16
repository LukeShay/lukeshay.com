/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Navigation } from "./Navigation.tsx";
import { PageProps, UnknownPageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export type PageContainerProps = {
  pageProps: PageProps | UnknownPageProps;
  children: h.JSX.Element | h.JSX.Element[];
  title?: string;
  description?: string;
};

export function PageContainer(props: PageContainerProps) {
  const { children, pageProps, title, description } = props;

  const joinedTitle = ["Luke Shay", title].filter(Boolean).join(" | ");
  const joinedDescription = [
    "Software Engineer II at Hy-Vee. Built using Deno, Fresh, Deno Deploy, and TailwindCSS.",
    description,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <main>
      <Head>
        <title>{joinedTitle}</title>
        <meta name="description" content={joinedDescription} />
        <meta property="og:title" content={joinedTitle} />
        <meta property="og:description" content={joinedDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageProps.url.href} />
      </Head>
      <div className={tw`h-screen w-full bg-slate-200 p-2 pb-12 md:pb-0`}>
        <div className={tw`max-w[1600px] mx-auto h-full`}>
          <div className={tw`flex h-full w-full flex-row`}>
            <Navigation pageProps={pageProps} />
            <div
              className={tw`w-full overflow-y-scroll rounded-md bg-slate-100`}
            >
              <div
                className={tw`mx-auto mt-6 w-full max-w-2xl px-2 md:mt-12 lg:mt-24`}
              >
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
