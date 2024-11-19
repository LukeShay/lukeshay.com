import { Entity } from "electrodb"
import { ulid } from "ulidx"
import { Resource } from "sst"
import { ddbdc } from "./db"

export const Contact = new Entity(
	{
		model: {
			entity: "contact",
			service: "app",
			version: "1",
		},
		attributes: {
			contactId: {
				type: "string",
				default: ulid,
				required: true,
			},
			email: {
				type: "string",
				required: true,
			},
			linkedin: {
				type: "string",
				required: true,
			},
			fullName: {
				type: "string",
				required: true,
			},
			message: {
				type: "string",
				required: true,
			},
		},
		indexes: {
			contactById: {
				pk: {
					field: "pk",
					composite: ["contactId"],
				},
				sk: {
					field: "sk",
					composite: ["email"],
				},
			},
		},
	},
	{
		client: ddbdc,
		table: Resource.Table.name,
	},
)
