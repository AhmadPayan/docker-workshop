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


# Kubernetes Deployment Guide
This is an alternative approach to the docker-compose.

## How to install k8s + helm + helmfile
Follow this article:
https://gist.github.com/genedy2017/142861e20a7c88b3ac7a78c86e09a5da

## Configure Minikube
Start Minikube using Docker as the driver and configure Docker environment:

```sh
minikube start --driver=docker
eval $(minikube -p minikube docker-env)
```

## Build Docker Images
Build the Docker images locally for producer and consumer services:

```sh
docker build -t producer:local -f producer/Dockerfile --no-cache ./producer
docker build -t consumer:local -f consumer/Dockerfile --no-cache ./consumer
```

## Test the Services:
### Port Forwarding with kubectl
Forward ports to access the services locally:
```sh
kubectl port-forward svc/producer 3000:3000
kubectl port-forward svc/consumer 4000:4000
```

Then, you can test the endpoints
- curl http://localhost:3000/send
- curl http://localhost:4000/receive

### Use minikube service to access the services:
```sh
minikube service producer
minikube service consumer
```

## Verify Deployment:
```sh
kubectl get deployments
kubectl get services
```

## Delete the Deployments:
```sh
kubectl delete deployment consumer
kubectl delete deployment producer
```

## Deploy Changes with Helmfile:
```sh
helmfile apply
helmfile --log-level=debug apply

helmfile sync
```

## Check Image Pulling Status:
```sh
kubectl describe pods -l app=consumer
kubectl describe pods -l app=producer
```

## View Logs:
```sh
kubectl logs -l app=consumer
kubectl logs -l app=producer
```

## Verify Helm Releases:
Check if the Helm releases are actually deployed:

```sh
helm ls --namespace default
```
This should list the consumer and producer releases if they are deployed.

## Manually Inspect Helm Templates:

```sh
helm template ./k8s/helm/consumer -f ./k8s/helm/consumer/values.yaml
helm template ./k8s/helm/producer -f ./k8s/helm/producer/values.yaml
```

## Verify the Images
```sh
docker images | grep local
```