import { Resource } from "sst"

export const getEnvVar = (key: string) => {
	return (
		(process.env[key] as string | undefined) ??
		(import.meta.env[key] as string | undefined) ??
		Resource.GitHubApiToken.value
	)
}
