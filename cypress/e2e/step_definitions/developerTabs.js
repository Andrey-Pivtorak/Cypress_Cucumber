import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { developersPage } from "@pages/developers.page";

Given('Open the site developers.telnyx.com', () => {
  developersPage.openDevelopersPage();
});

When('Click the "API v1" tab', () => {
  developersPage.clickElement(developersPage.api1Button);
});
Then('The Telnyx "API V1 Documentation" text is displayed', () => {
  cy.wait(4000).get(developersPage.api1Title).should('contain', 'Telnyx API V1 Documentation');
});

When('Click the "API v2" tab', () => {
  developersPage.clickElement(developersPage.api2Button);
});
Then('The "Telnyx API Documentation" text is displayed', () => {
  cy.wait(4000).get(developersPage.api2Title).should('have.text', 'Telnyx API Documentation');
});
