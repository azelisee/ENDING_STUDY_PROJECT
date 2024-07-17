#!/bin/bash

STACK_NAME_PREFIX=library-system

# Delete ECS service stack
echo "Deleting ECS service stack..."
aws cloudformation delete-stack --stack-name $STACK_NAME_PREFIX-ecs-service

# Delete ECS cluster stack
echo "Deleting ECS cluster stack..."
aws cloudformation delete-stack --stack-name $STACK_NAME_PREFIX-ecs-cluster

# Delete network stack
echo "Deleting network stack..."
aws cloudformation delete-stack --stack-name $STACK_NAME_PREFIX-network

# Remove local Docker images
DOCKERHUB_USERNAME=your-dockerhub-username
FRONTEND_IMAGE=$DOCKERHUB_USERNAME/frontend:latest
BACKEND_IMAGE=$DOCKERHUB_USERNAME/backend:latest
RECOMMENDATION_IMAGE=$DOCKERHUB_USERNAME/recommendation:latest

echo "Removing local Docker images..."
docker rmi $FRONTEND_IMAGE
docker rmi $BACKEND_IMAGE
docker rmi $RECOMMENDATION_IMAGE
