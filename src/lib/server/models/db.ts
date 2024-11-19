import { DynamoDBClient } from "@aws-sdk/client-dynamodb"
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb"

export const ddbc = new DynamoDBClient({})
export const ddbdc = DynamoDBDocumentClient.from(ddbc)
