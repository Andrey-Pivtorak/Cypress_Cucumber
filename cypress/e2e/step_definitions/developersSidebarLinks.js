import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { developersPage } from "@pages/developers.page";

Given('Go developers.telnyx.com', () => {
  developersPage.openDevelopersPage();
  cy.wait(2000);
});

When('Click the Account link', () => {
  developersPage.clickAccountLink();
});
Then('The Account page is opened', () => {
  cy.url().should('include', '/account');
});

When('Click the Porting link', () => {
  developersPage.clickPortingLink();
});
Then('The Porting page is opened', () => {
  cy.url().should('include', '/porting');
});

When('Click the WebRTC link', () => {
  developersPage.clickWebrtcLink();
});
Then('The WebRTC page is opened', () => {
  cy.url().should('include', '/webrtc');
});

When('Click the Debugging link', () => {
  developersPage.clickDebuggingLink();
});
Then('The Debugging page is opened', () => {
  cy.url().should('include', '/debugging');
});
