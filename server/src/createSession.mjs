import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { v4 as uuidv4 } from 'uuid';

const dynamoDbClient = new DynamoDBClient();

export const lambdaHandler = async (event) => {
    const body = JSON.parse(event.body);
    const { hostname, players, map, mode } = body;

    const params = {
        TableName: process.env.TABLE_NAME,
        Item: {
            sessionId: { S: uuidv4() },
            hostname: { S: hostname },
            players: { N: players.toString() },
            map: { S: map },
            mode: { S: mode }
        }
    };

    try {
        await dynamoDbClient.send(new PutItemCommand(params));
        return {
            statusCode: 201,
            body: JSON.stringify({ message: "Game session created successfully" })
        };
    } catch (err) {
        console.error(err);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Could not create game session" })
        };
    }
};
