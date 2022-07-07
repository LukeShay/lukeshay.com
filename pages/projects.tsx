import process from 'node:process';

import type { InferGetStaticPropsType, NextPage } from 'next';
import { graphql } from '@octokit/graphql';
import { ExternalLinkIcon } from '@heroicons/react/outline';

import { List, ListItem } from 'components/list';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type,@typescript-eslint/explicit-module-boundary-types
const getStaticProps = async () => {
  const octokit = graphql.defaults({
    headers: {
      authorization: `token ${process.env.GITHUB_API_TOKEN ?? ''}`,
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
    props: {
      repos: result.viewer.pinnedItems.nodes,
    },
    revalidate: 60 * 60 * 24,
  };
};

const ProjectsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ repos }) => (
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
      {repos.map(({ id, nameWithOwner, description }) => (
        <a href={`https://github.com/${nameWithOwner}`} key={id} rel="noopener noreferrer" target="_blank">
          <ListItem
            className="-mx-2 rounded-md px-2 hover:bg-slate-200"
            contentClassName="flex justify-between"
            description={description}
            title={nameWithOwner}
          >
            <ExternalLinkIcon className="h4 w-4 text-slate-500" />
          </ListItem>
        </a>
      ))}
    </List>
  </div>
);

export { getStaticProps };
export default ProjectsPage;
