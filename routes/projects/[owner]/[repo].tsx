/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "fresh/server.ts";
import { tw } from "@twind";
import { Markdown } from "~/components/Markdown.tsx";
import { PageContainer } from "~/components/PageContainer.tsx";
import { Link } from "~/components/Link.tsx";
import { ExternalLinkIcon } from "~/components/heroicons/outline.tsx";

type HandlerResponse = {
  source: string;
};

export const handler: Handlers<HandlerResponse> = {
  async GET(_, ctx) {
    const { owner, repo } = ctx.params;

    const resp = await fetch(
      `https://raw.githubusercontent.com/${owner}/${repo}/main/README.md`
    );
    const source = await resp.text();

    return ctx.render({ source });
  },
};

export default function RepositoryPage(props: PageProps<HandlerResponse>) {
  const {
    data: { source },
    params: { owner, repo },
  } = props;

  return (
    <PageContainer pageProps={props} wide>
      <Link href={`https://github.com/${owner}/${repo}`} className={tw`flex row`}>
        <h1 className={tw`px-4 lg:px-12 pb-8 text-4xl font-bold`}>
          {`${owner}/${repo}`}
        </h1>
        <ExternalLinkIcon className={tw`h4 w-4 text-slate-500`} />
      </Link>
      <Markdown source={source} baseUrl={`/projects/${owner}/${repo}`} />
    </PageContainer>
  );
}
