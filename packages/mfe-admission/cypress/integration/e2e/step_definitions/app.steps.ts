import { Then, Given, When } from "cypress-cucumber-preprocessor/steps";

// Step definition for navigating to the admission setup form page
When('I navigate to the admission setup form page', () => {
  cy.visit('/admission-setup');
  cy.get('.bc-text-primary').contains('Admission Portal').should('be.visible');
});

// Step definition for verifying the page loads without errors
Then('the page should load without errors', () => {
  cy.get('.error-message').should('not.exist');
});

// Step definition for checking the visibility of a specific tab
Then('I should see the tab {string}', (tabName) => {
  cy.get('.ant-tabs-tab-btn').contains(tabName).should('be.visible');
});