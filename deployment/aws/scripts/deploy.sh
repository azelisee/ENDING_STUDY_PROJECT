#!/bin/bash

STACK_NAME_PREFIX=library-system

# Deploy network stack
aws cloudformation deploy \
    --template-file aws/AWS\ CloudFormation\ templates/network.yml \
    --stack-name $STACK_NAME_PREFIX-network

# Get VPC and Subnet IDs
VPC_ID=$(aws cloudformation describe-stacks \
    --stack-name $STACK_NAME_PREFIX-network \
    --query "Stacks[0].Outputs[?OutputKey=='VpcId'].OutputValue" \
    --output text)

SUBNET_IDS=$(aws cloudformation describe-stacks \
    --stack-name $STACK_NAME_PREFIX-network \
    --query "Stacks[0].Outputs[?OutputKey=='PublicSubnetIds'].OutputValue" \
    --output text)

# Deploy ECS cluster stack
aws cloudformation deploy \
    --template-file aws/AWS\ CloudFormation\ templates/ecs-cluster.yml \
    --stack-name $STACK_NAME_PREFIX-ecs-cluster

# Deploy ECS service stack
aws cloudformation deploy \
    --template-file aws/AWS\ CloudFormation\ templates/ecs-service.yml \
    --stack-name $STACK_NAME_PREFIX-ecs-service \
    --parameter-overrides VPC=$VPC_ID Subnets=$SUBNET_IDS
