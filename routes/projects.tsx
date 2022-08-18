/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { List } from "~/components/list/List.tsx";
import { ListItem } from "~/components/list/ListItem.tsx";
import { Link } from "~/components/Link.tsx";
import { Handlers, PageProps } from "fresh/server.ts";
import { PageContainer } from "~/components/PageContainer.tsx";
import {
  getPinnedRepositories,
  PinnedRepository,
} from "~/lib/server/repositories/github-repository.ts";
import { ArrowRightIcon } from "../components/heroicons/outline.tsx";

export const handler: Handlers<PinnedRepository[]> = {
  async GET(_, ctx) {
    try {
      const pinnedRepositories = await getPinnedRepositories();

      return ctx.render(pinnedRepositories);
    } catch {
      return ctx.render([]);
    }
  },
};

export default function ProjectsPage(props: PageProps<PinnedRepository[]>) {
  const { data: repos } = props;

  return (
    <PageContainer
      pageProps={props}
      title="Contact"
      description="Contains list of my pinned projects."
    >
      <div className={tw`mb-28`}>
        <div className={tw`pb-12`}>
          <h1 className={tw`pb-6 text-4xl font-bold`}>{"My Projects"}</h1>
          <p className={tw`text-slate-600`}>
            {"The following is a list of open source projects I have worked on that showcase my skills and experience. The source code for the projects can be found by clicking on the link."}
          </p>
        </div>
        <List>
          {repos.map(({ id, nameWithOwner, description }) => (
            <Link href={`projects/${nameWithOwner}`} key={id}>
              <ListItem
                className={tw`-mx-2 rounded-md px-2 hover:bg-slate-200`}
                contentClassName={tw`flex justify-between`}
                description={description}
                title={nameWithOwner}
                titleAs="h2"
              >
                <ArrowRightIcon className={tw`h6 w-6 text-slate-500`} />
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    </PageContainer>
  );
}
