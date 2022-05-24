import process from 'node:process';

import type {InferGetStaticPropsType, NextPage} from 'next';
import {graphql} from '@octokit/graphql';
import {ExternalLinkIcon} from '@heroicons/react/outline';

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

const ProjectsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({repos}) => (
    <>
        <h1 className="pb-6 text-4xl font-bold">{'My Projects'}</h1>
        {repos.map(({id, nameWithOwner, description}) => (
            <a href={`https://github.com/${nameWithOwner}`} key={id} rel="noopener noreferrer" target="_blank">
                <div className="relative my-6 rounded-md border border-slate-300 p-6 duration-300 ease-in-out hover:scale-y-[1.0125] hover:scale-x-[1.0125] hover:border-slate-500">
                    <ExternalLinkIcon className="absolute top-4 right-4 h-4 w-4 text-slate-500" />
                    <h2 className="text-lg font-semibold">{nameWithOwner}</h2>
                    <p className="text-slate-700">{description}</p>
                </div>
            </a>
        ))}
    </>
);

export {getStaticProps};
export default ProjectsPage;
