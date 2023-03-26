The test scenario is to verify that the "News" link in the top navigation menu takes the user to the correct page when clicked.
ManualSteps:
a) navigate to the BBC website
b)select the "News" link in the top navigation menu and click on it
c)verify that the URL contains '/news'.
d)Verify that Local news tab under news section.

Below are the steps to run the code:
a) To run this test script, you will need to have Node.js and Cypress installed on your machine. You can download Node.js from https://nodejs.org/en/ and install Cypress by running the command npm install cypress in your terminal.Once you have Node.js and Cypress installed, you can save the following code into a file called bbc_website_test.cy.js in the cypress/integration folder of your Cypress project and then run the test using the Cypress Test Runner.
b)To run the test script, you can open the Cypress Test Runner by running the command npx cypress open in your terminal, and then select the bbc_website_test.cy.js file from the list of integration tests. The test should then run automatically, and you should see the results in the Test Runner window.
