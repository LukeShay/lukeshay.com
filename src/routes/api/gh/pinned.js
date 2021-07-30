import { graphql } from '@octokit/graphql';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get() {
  try {
    const pinnedRepos = await graphql(
      `
        {
          viewer {
            pinnedItems(first: 6, types: REPOSITORY) {
              nodes {
                ... on Repository {
                  nameWithOwner
                  description
                }
              }
            }
          }
        }
      `,
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_API_TOKEN}`,
        },
      },
    );

    return {
      body: pinnedRepos.viewer.pinnedItems.nodes,
      status: 200,
    };
  } catch (e) {
    console.error(e.message);
    console.error(e);
  }

  return {
    status: 500,
  };
}
