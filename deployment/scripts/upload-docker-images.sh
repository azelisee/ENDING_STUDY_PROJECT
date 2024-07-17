#!/bin/bash

DOCKERHUB_USERNAME=your-dockerhub-username
FRONTEND_IMAGE=$DOCKERHUB_USERNAME/frontend:latest
BACKEND_IMAGE=$DOCKERHUB_USERNAME/backend:latest
RECOMMENDATION_IMAGE=$DOCKERHUB_USERNAME/recommendation:latest

# Build Docker images
echo "Building Docker images..."
docker build -t $FRONTEND_IMAGE ../../frontend
docker build -t $BACKEND_IMAGE ../../backend
docker build -t $RECOMMENDATION_IMAGE ../../recommendation-system

# Push Docker images to Docker Hub
echo "Pushing Docker images to Docker Hub..."
docker push $FRONTEND_IMAGE
docker push $BACKEND_IMAGE
docker push $RECOMMENDATION_IMAGE
