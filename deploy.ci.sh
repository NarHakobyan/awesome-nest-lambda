#!/bin/sh

set -e

# configuration
REGION="eu-central-1"

echo "Deploying Awesome NestJS lambda to the ${STAGE} stage"

# deploy serverless
serverless deploy --stage ${STAGE} --region ${REGION} --verbose
