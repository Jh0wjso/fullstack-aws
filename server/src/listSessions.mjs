import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";

const dynamoDbClient = new DynamoDBClient();

export const lambdaHandler = async () => {
    const params = {
        TableName: process.env.TABLE_NAME,
    };

    try {
        const data = await dynamoDbClient.send(new ScanCommand(params));
        const items = data.Items.map(item => ({
            sessionId: item.sessionId.S,
            hostname: item.hostname.S,
            players: parseInt(item.players.N),
            map: item.map.S,
            mode: item.mode.S
        }));

        return {
            statusCode: 200,
            body: JSON.stringify(items)
        };
    } catch (err) {
        console.error(err);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Could not retrieve game sessions" })
        };
    }
};
