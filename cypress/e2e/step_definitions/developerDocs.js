import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { developersPage } from "@pages/developers.page";

Given('Visit the site developers.telnyx.com', () => {
  developersPage.openDevelopersPage();
});

When('Click the Messaging product', () => {
  developersPage.clickMessagingButton();
});
Then('The Messaging product page is opened', () => {
  cy.url().should('include', '/messaging');
  cy.go('back');
});

When('Click the Sip Trunking product', () => {
  developersPage.clickSipTrunkingButton();
});
Then('The Sip Trunking product page is opened', () => {
  cy.url().should('include', '/sip-trunk-setup');
});

