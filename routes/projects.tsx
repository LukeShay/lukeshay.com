/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { graphql } from "@octokit/graphql";
import { ExternalLinkIcon } from "~/components/heroicons/outline.tsx";
import { List } from "~/components/list/List.tsx";
import { ListItem } from "~/components/list/ListItem.tsx";
import { Link } from "~/components/Link.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { PageContainer } from "~/components/PageContainer.tsx";

type PinnedRepo = {
  id: string;
  nameWithOwner: string;
  description: string;
};

export const handler: Handlers<PinnedRepo[]> = {
  async GET(_, ctx) {
    try {
      const octokit = graphql.defaults({
        headers: {
          authorization: `token ${Deno.env.get("GITHUB_API_TOKEN") ?? ""}`,
        },
      });

      const result: {
        viewer: {
          pinnedItems: {
            nodes: PinnedRepo[];
          };
        };
      } = await octokit(`{
          viewer { 
              pinnedItems(first: 6, types: [REPOSITORY]) {
                  nodes {
                      __typename
                      ... on Repository {
                          id
                          nameWithOwner
                          description
                      }
                  }
              }
          }
      }`);

      return ctx.render(result.viewer.pinnedItems.nodes);
    } catch {
      return ctx.render([]);
    }
  },
};

const ProjectsPage = ({ data: repos }: PageProps<PinnedRepo[]>) => (
  <PageContainer>
    <div className={tw`mb-28`}>
      <div className={tw`pb-12`}>
        <h1 className={tw`pb-6 text-4xl font-bold`}>{"My Projects"}</h1>
        <p className={tw`text-slate-600`}>
          {"The following is a list of open source projects I have worked on that showcase my skills and experience. The source code for the projects can be found by clicking on the link."}
        </p>
      </div>
      <List>
        {repos.map(({ id, nameWithOwner, description }) => (
          <Link href={`https://github.com/${nameWithOwner}`} key={id}>
            <ListItem
              className={tw`-mx-2 rounded-md px-2 hover:bg-slate-200`}
              contentClassName={tw`flex justify-between`}
              description={description}
              title={nameWithOwner}
              titleAs="h2"
            >
              <ExternalLinkIcon className={tw`h4 w-4 text-slate-500`} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  </PageContainer>
);

// ProjectsPage.title = "Luke Shay | Projects";
// ProjectsPage.description =
//   "Software Engineer II at Hy-Vee. Built using Next.js and TailwindCSS. Contains list of my pinned projects.";

export default ProjectsPage;
