# MOSTLY.AI Automation - Cypress / BDD / TypeScript
This document describes the steps required to setip and run the Cypress tests devloped for MOSTLY.AI on your local machine.

## Setup

- run `npm install` on the root of the project.

## Overview

A plugin for Cypress called [cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor) is used to transform `.feature` files into runnable tests. The plugin is configured to look for step defintions in a sibling TypeScript file of the same name. Any files added to the `integration/common` folder will be included with every feature test.

## Testing locally

Open the Cypress test runner:

   `npm run cypress:open`

   Click any feature file to run the test.

Run tests in headless mode (Electron and Chrome commands for example below):

   `npm run cypress:run`
   
   `npm run cypress:run:chrome`

## Debugging failed CI tests

- The `cypress-failed-log` plugin will display the Cypress commands of any failed test in the CI log. This can help provide context of what hapenned leading up to the test failure.

- The result of the Cypress run is saved as an artifact in GitHub, you can find it on the summary page of the Action workflow. Inside the zip file you will find screenshots, videos, and logs of any failed tests.

## Reporting

In Cypress test runner, reporting is shown in real time. See video below of a successful test run.

Following a headless run, report is show in the console, or a simple mochawesome report can be generated using the following command from project root.

   `npm run generate-report`

Navigating to `cypress/reports/mochareports` and opening the html in browser would present results.

Note: screenshots are produced on failure at `cypress/screenshots` and videos are produced for each run at `cypress/videos/features`

## Notes

1/ All hover strategies in Cypress were failing to present the 'Company' menu. In reality I would have spent more time or consulted with peers or devs, but I simulated navigation to the contact page in the end to deliver on time. I would iterate or alter tooling were I presented with this challenge at work.

2/ There was a bug loading the contact form (appears to be Cypress related and existing in runner and headless) that required me to add a mouse move to simulate activity on the page for it to present. With more time I would resolve this in a more satisfactory way.
