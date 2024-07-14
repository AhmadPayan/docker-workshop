# Docker Compose Networking Example

This project demonstrates how to use Docker Compose to manage multiple services that interact with each other through Docker networking. It includes two Node.js projects (`producer` and `consumer`) written in TypeScript.

## Setup

### Prerequisites

- Docker
- Docker Compose
- Node.js
- npm
- Visual Studio Code or another code editor

### Installing Dependencies

Before running the services, make sure to install the necessary dependencies for both projects.

#### Producer Project

Navigate to the `producer` directory and install the dependencies:

```sh
cd producer
npm install
```

#### Consumer Project
Navigate to the consumer directory and install the dependencies:

```sh
cd consumer
npm install
```

Running the Projects
You can use Docker Compose to build and run the projects.

```sh
docker-compose up --build
```
This command will:

Build the Docker images for both the producer and consumer services.
Start the services and make them available on ports 3000 and 4000, respectively.

## Usage
Once the services are running, you can interact with them using a web browser or a tool like curl.

## Sending a Message
To send a message from the `producer` to the `consumer`, access the following URL:

```sh
curl http://localhost:3000/send
```

You should receive a response indicating that the `producer` successfully communicated with the `consumer`.