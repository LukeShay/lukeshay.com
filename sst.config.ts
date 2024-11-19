/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
	app(input) {
		return {
			name: "lukeshay.com",
			removal: input?.stage === "production" ? "retain" : "remove",
			home: "aws",
		}
	},
	async run() {
		const gitHubApiToken = new sst.Secret("GitHubApiToken")
		const table = new sst.aws.Dynamo("Table", {
			fields: {
				pk: "string",
				sk: "string",
			},
			primaryIndex: {
				hashKey: "pk",
				rangeKey: "sk",
			},
		})

		new sst.aws.Astro("Site", {
			link: [gitHubApiToken, table],
		})
	},
})
