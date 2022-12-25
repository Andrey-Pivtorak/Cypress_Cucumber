import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { developersPage } from "@pages/developers.page";

Given('Open the site developers.telnyx.com', () => {
  developersPage.openDevelopersPage();
});

When('Click the API v1 tab', () => {
  developersPage.clickApi1Button();
});
Then('The Telnyx API V1 Documentation is displayed', () => {
  developersPage.elements.api1Title().should('have.text', 'Telnyx API V1 Documentation');
})

When('Click the API v2 tab', () => {
  developersPage.clickApi2Button();
})
Then('The Telnyx API Documentation is displayed', () => {
  developersPage.elements.api2Title().should('have.text', 'Telnyx API Documentation');
})


