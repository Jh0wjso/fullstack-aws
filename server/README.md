# Game Sessions API

This project is the back-end part of a full-stack application that manages game sessions. It provides a RESTful API for creating and retrieving game sessions, using AWS Serverless technologies like AWS Lambda, API Gateway, and DynamoDB.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Running Locally](#running-locally)
- [Testing](#testing)
- [Deployment](#deployment)
- [API Endpoints](#api-endpoints)

## Prerequisites

Before you start, make sure you have the following installed on your machine:

- [AWS CLI](https://aws.amazon.com/cli/) configured with your AWS credentials.
- [AWS SAM CLI](https://aws.amazon.com/serverless/sam/) for running and deploying the application.
- [Docker](https://www.docker.com/get-started) for running the application locally.
- Node.js (at least version 18.x)
- npm (comes with Node.js)

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/game-sessions-api.git
   cd game-sessions-api
   ```
2. **Install dependencies:**

   Navigate to the `src` directory and install the Node.js dependencies:

   ```bash
   cd src
   npm install
   ```
3. **Project Structure:**

   - `README.md` - This file.
   - `template.yaml` - AWS SAM template that defines the serverless resources.
   - `src/` - Contains the Lambda function code.
     - `app.mjs` - Main handler for the Lambda function.
     - `package.json` - Node.js dependencies.
     - `tests/` - Directory for unit tests.
   - `events/` - Sample event payloads for testing locally.
   - `samconfig.toml` - Configuration for deploying with SAM.
4. **Environment Variables:**

   Create a `.env` file in the root directory of your project with the following content:

   ```bash
   TABLE_NAME=GameSessions
   AWS_REGION=sa-east-1
   ```

   Ensure that `TABLE_NAME` matches the name of the DynamoDB table you are using.

## Running Locally

1. **Start Docker:**

   Ensure Docker is running on your machine.
2. **Run the API Locally:**

   Use the SAM CLI to start the API locally:

   ```bash
   sam local start-api
   ```

   This command will start the API on `http://127.0.0.1:3000`.
3. **Test the API:**

   You can use `curl` to interact with the API endpoints:

   ```bash
   # Create a new game session
   curl -X POST http://127.0.0.1:3000/sessions -d '{"hostname":"test","players":4,"map":"island","mode":"survival"}'

   # Get all game sessions
   curl -X GET http://127.0.0.1:3000/sessions
   ```

## Testing

To run the unit tests defined in the `tests/` directory:

```bash
npm test
```

## Deployment

To deploy the application to AWS, run the following command:

```bash
sam deploy --guided
```

Follow the prompts, providing the stack name, region, and other required parameters. SAM will package and deploy your application.

## API Endpoints

- **POST /sessions**

  - Description: Creates a new game session.
  - Request Body:
    ```json
    {
      "hostname": "string",
      "players": integer,
      "map": "string",
      "mode": "string"
    }
    ```
  - Response: Returns a status code indicating the result of the operation.
- **GET /sessions**

  - Description: Retrieves a list of all game sessions.
  - Response: Returns an array of game sessions stored in DynamoDB.

---
