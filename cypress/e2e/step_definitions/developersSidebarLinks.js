import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { developersPage } from "@pages/developers.page";

Given('Go developers.telnyx.com', () => {
  developersPage.openDevelopersPage();
});

When('Click the "Account" link', () => {
  developersPage.clickElement(developersPage.accountLink);
});
Then('The "Account" page is opened', () => {
  cy.wait(1500).url().should('include', '/account');
});

When('Click the "Porting" link', () => {
  developersPage.clickElement(developersPage.portingLink);
});
Then('The "Porting" page is opened', () => {
  cy.wait(1500).url().should('include', '/porting');
});

When('Click the "WebRTC" link', () => {
  developersPage.clickElement(developersPage.webrtcLink);
});
Then('The "WebRTC" page is opened', () => {
  cy.wait(1500).url().should('include', '/webrtc');
});

When('Click the "Debugging" link', () => {
  developersPage.clickElement(developersPage.debuggingLink);
});
Then('The "Debugging" page is opened', () => {
  cy.wait(1500).url().should('include', '/debugging');
});
