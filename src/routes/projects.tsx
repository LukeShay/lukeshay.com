import { graphql } from '@octokit/graphql';
import type { RequestHandler } from '@builder.io/qwik-city';
import { useEndpoint } from '@builder.io/qwik-city';
import { component$, Resource } from '@builder.io/qwik';
import type { JSX } from '@builder.io/qwik/jsx-runtime';

import { ExternalLinkIcon } from '~/components/heroicons/outline';
import { List, ListItem } from '~/components/list';
import { Link } from '~/components/link';

type OnGetResult = {
  repos: { id: string; nameWithOwner: string; description: string }[];
};

const onGet: RequestHandler<OnGetResult | null> = async ({ response }) => {
  response.headers.append('Cache-Control', ' public, max-age=86400');

  const octokit = graphql.defaults({
    headers: {
      authorization: `token ${(process.env.GITHUB_API_TOKEN as string | undefined) ?? ''}`,
    },
  });

  const result: {
    viewer: {
      pinnedItems: {
        nodes: {
          id: string;
          nameWithOwner: string;
          description: string;
        }[];
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

  return {
    repos: result.viewer.pinnedItems.nodes,
  };
};

const ProjectsPage = component$(() => {
  const resource = useEndpoint<typeof onGet>();

  return (
    <Resource
      resource={resource}
      onRejected={(): JSX.Element => <div>Error</div>}
      onPending={(): JSX.Element => <div>Loading...</div>}
      onResolved={(props): JSX.Element => (
        <div className="mb-28">
          <div className="pb-12">
            <h1 className="pb-6 text-4xl font-bold">{'My Projects'}</h1>
            <p className="text-slate-600">
              {
                'The following is a list of open source projects I have worked on that showcase my skills and experience. The source code for the projects can be found by clicking on the link.'
              }
            </p>
          </div>
          <List>
            {props?.repos.map(({ id, nameWithOwner, description }) => (
              <Link href={`https://github.com/${nameWithOwner}`} key={id}>
                <ListItem
                  className="-mx-2 rounded-md px-2 hover:bg-slate-200"
                  contentClassName="flex justify-between"
                  description={description}
                  title={nameWithOwner}
                  titleAs="h2"
                >
                  <span q:slot="icon">
                    <ExternalLinkIcon className="h4 w-4 text-slate-500" />
                  </span>
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
      )}
    />
  );
});

// ProjectsPage.title = 'Luke Shay | Projects';
// ProjectsPage.description =
//   'Software Engineer II at Hy-Vee. Built using Next.js and TailwindCSS. Contains list of my pinned projects.';

export { onGet };
export default ProjectsPage;
