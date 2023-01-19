export type PinnedRepository = {
	id: string;
	nameWithOwner: string;
	description: string;
};

export async function getPinnedRepositories() {
	const resp = await fetch("https://api.github.com/graphql", {
		method: "POST",
		body: JSON.stringify({
			query: `query {
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
			}`,
		}),
		headers: {
			Authorization: `bearer ${import.meta.env.GITHUB_API_TOKEN}`,
		},
	});

	const result: {
		data: {
			viewer: {
				pinnedItems: {
					nodes: PinnedRepository[];
				};
			};
		};
	} = await resp.json();

	return result.data.viewer.pinnedItems.nodes;
}
