# Serverless CloudWatch Monitoring Cross Account

AWS CloudWatch monitoring cross accounts need 2 type of accounts
- Monitoring Account
- Source Accounts

The **Source Accounts** are metric and log data publisher to **Monitoring Account**
This project is source account data publisher with **AWS Lambda**. It will feed healthy status to metric and log.

## Prerequisites

## Setup

### Configure AWS Profile

Config profile `demo-dev` to deploy to development account
```sh
 aws configure --profile demo-dev
```

Config profile `demo-prod` to deploy to production account
```sh
 aws configure --profile demo-dev
```

## Usage

### Service config


### Run locally

run service locally with `serverless-offline`

```bash
npm run start
```

### Deploy to environment

## Resources
- https://www.youtube.com/watch?v=bfyThV6eSdg
- https://www.youtube.com/watch?v=UbBZk9aCYj8
- https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account-Setup.html#Unified-Cross-Account-SetupSource-OrgTemplate