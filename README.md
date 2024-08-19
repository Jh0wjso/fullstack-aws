
# Fullstack Project

## Overview

Welcome to the Game Fullstack Project! This project is designed to help you explore full-stack development by building a complete application from front-end to back-end. You'll be working on two main components:

- A front-end application using **React** and **Vite**.
- A back-end application using **AWS Serverless Application Model (SAM)**.

### Objective

Your task is to create a form on the front-end that allows users to create a new game session. This session will be persisted in a DynamoDB table through a RESTful API developed in the back-end. Once a session is created, the user will be redirected to a list of all game sessions.

## General Guidelines

### Code Quality

- **Clean Code**: Ensure that your code is well-structured, clean, and adheres to best practices.
- **Documentation**: Provide comprehensive instructions for setting up and running your application.
- **Version Control**: Use Git for version control, and maintain a clear commit history in a public GitHub repository.

## Part 1: Front-End Project

### Objective

Develop a **React** application using **Vite** that includes:

- A form for creating new game sessions.
- A list view to display all created game sessions.
- Integration with the back-end to persist session data.

### Requirements

#### Form

- Collect the following details for each game session: hostname, number of players, map, and mode.
- On form submission, send a POST request to the back-end API to create the session.

#### List View

- Fetch and display a list of all game sessions from the back-end API.
- Display details such as hostname, players, map, and mode.

#### User Experience (UX/UI)

- Implement a responsive and user-friendly design.
- Feel free to use a CSS framework or library of your choice (e.g., **Tailwind CSS**, **Bootstrap**).

### Code Quality

- Ensure the code is readable and maintainable.
- Utilize modern React practices such as hooks and functional components.

### Submission Guidelines

- Create a new GitHub repository for the front-end project.
- Include a `README.md` with instructions on how to run the application locally.

## Part 2: Back-End Project

### Objective

Develop an AWS Serverless application using SAM that provides a RESTful API for managing game sessions.

### Requirements

#### RESTful API

- Implement endpoints for creating and retrieving game sessions.
- Use **AWS API Gateway**, **AWS Lambda**, and **DynamoDB**.

#### Game Session Persistence

- Store game session data in a DynamoDB table with the following fields: `sessionId` (UUID), `hostname`, `players`, `map`, and `mode`.

#### Adherence to REST Principles

- Design API endpoints that follow REST conventions.

#### Infrastructure as Code (IaC)

- Use SAM to define and deploy your AWS resources.
- Ensure that your SAM template is well-structured and follows best practices.

### Unit Tests

- Write unit tests for your Lambda functions using a testing framework such as **Jest** or **Mocha**.

### Example API Endpoints

- **Create Game Session**: `POST /sessions`

  ```json
  {
    "hostname": "<hostname>",
    "players": <number_of_players>,
    "map": "<game_map>",
    "mode": "<game_mode>"
  }
  ```
- **List Game Sessions**: `GET /sessions`

### Submission Guidelines

- Create a separate GitHub repository for the back-end project.
- Include a `README.md` with instructions on how to deploy and test your application.
- Provide a `NOTES.md` detailing your approach, any assumptions made, and instructions for running unit tests.

## Bonus Points

- Implement authentication for the API using **AWS Cognito**.
- Use **GraphQL** with **AWS AppSync** instead of REST for a more flexible API.
- Include end-to-end tests to ensure the entire workflow functions as expected.

## Evaluation Criteria

### Front-End

- UI/UX design and responsiveness.
- Code quality and modern React practices.

### Back-End

- Adherence to REST principles.
- Code quality and effective use of AWS services.
- Effectiveness of IaC and unit tests.

### Documentation

- Clarity and completeness of instructions for running and deploying both applications.
