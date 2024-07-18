# Host a TASKS web application with AWS Amplify

Workshop Link: <https://catalog.us-east-1.prod.workshops.aws/v2/workshops/841ce16b-9d86-48ac-a3f6-6a1b29f95d2b>

The Jira for this project: CLOUDY-4636

## Overview

In this project, I will create a TODO web application that usesan API to store and retrieve tasks in a cloud database. In addition, this app also uses Amazon Rekognition to detect objects in images uploaded to the app.

## Application Architecture

-   The application architecture uses AWS Lambda, Amazon API Gateway, Amazon DynamoDB, Amazon Simple Storage Service (S3), and AWS Amplify Console.
-   Amplify Console provides continuous deployment and hosting of the static web resources including HTML, CSS, JavaScript, and image files which are loaded in the user's browser.
-   JavaScript executed in the browser sends and receives data from a public backend API built using Lambda and API Gateway.
-   DynamoDB provides a persistence layer where data can be stored by the API's Lambda function.
-   S3 is used to store uploaded images.
-   Finally, Amazon Rekognition is used to detect and label objects in those images.

![Architecture](/img/architecture.svg)

## Modules

Steps:

1. Install AND Configure the AWS Cloud9 IDE
2. Build a serverless backend: Lambda and SAM
    - Add DynamoDB to the the SAM template
    - Create Lambda function
3. Configure API Authorisation - API Gateway
    - Config code for Lambda Authorizer
4. Build and deploy the web application - Amplify
    - Deploy Serverless App
    - Config API Gateway Endpoint
    - Init Amplify
    - Build the web application
    - Add Amplify Hosting
    - Deploy the web application
5. Test the application
    - Test adding several tasks into the app
    - View data in DynamoDB
6. Configure Amazon Rekognition Integration for Image metadata and extraction
    - Add js code to detect labels in images
    - Add lambda function to the template
7. Deploy the changes
8. Test function recognition
   This is how it works:
    - Image uploaded to S3 via the URL
    - S3 bucket config to trigger DetectLabels function when object is created in the bucket
    - Lambda function invokes Rekognition DetectLabels function to detect labels
    - Detected labels returnr to Lambda
    - Lambda saves the labels to the DynamoDB table

This is how Detect Labels function works after the image is uploaded to S3:

![Workflow](/img/work-flow.png)
