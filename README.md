

## Description

Selennium UI and Supertest API automation framework


## Setting up the project
```bash
cd Selennium_Supertest

# Install deps
npm install

# Copy Pet Store API into .env file
# You can visit https://petstore.swagger.io/v2

DEV_API_ENDPOINT= <'API URL HERE'>

# Copy Dell url into .env file
# https://www.dell.com/en-us

DEV_UI_ENDPOINT= <'UI URL HERE'>

```

## Running the Automation

To run the automation suites, run the following:


```bash
# ui e2e tests
$ npm run test:ui

# api e2e tests
$ npm run test:api

```
