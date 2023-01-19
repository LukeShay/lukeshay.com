export type PinnedRepository = {
	id: string;
	nameWithOwner: string;
	description: string;
};

export async function getPinnedRepositories() {
	try {
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
	} catch (error) {
		const e = error as Error;

		console.error(e.name);
		console.error(e.message);
		console.error(e.stack);

		throw error;
	}
}
