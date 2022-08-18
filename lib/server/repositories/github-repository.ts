import { graphql } from "@octokit/graphql";

export type PinnedRepository = {
  id: string;
  nameWithOwner: string;
  description: string;
};

export async function getPinnedRepositories() {
  const octokit = graphql.defaults({
    headers: {
      authorization: `token ${Deno.env.get("GITHUB_API_TOKEN") ?? ""}`,
    },
  });

  const result: {
    viewer: {
      pinnedItems: {
        nodes: PinnedRepository[];
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

  return result.viewer.pinnedItems.nodes;
}
