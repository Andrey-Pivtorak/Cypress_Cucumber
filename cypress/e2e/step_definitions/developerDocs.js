import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { developersPage } from "@pages/developers.page";

Given('Visit the site developers.telnyx.com', () => {
  developersPage.openDevelopersPage();
});

When('Click the "Messaging" product', () => {
  developersPage.clickElement(developersPage.messagingButton);
});
Then('The "Messaging" product page is opened', () => {
  cy.wait(2000).url().should('include', '/messaging');
  cy.go('back').wait(2000);
});

When('Click the "Sip Trunking" product', () => {
  developersPage.clickElement(developersPage.sipTrunkingButton);
});
Then('The "Sip Trunking" product page is opened', () => {
  cy.wait(2000).url().should('include', '/sip-trunk-setup');
});
