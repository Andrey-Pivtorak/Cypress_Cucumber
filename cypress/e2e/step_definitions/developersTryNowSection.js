import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { developersPage } from "@pages/developers.page";

Given('The site developers.telnyx.com is opened', () => {
  developersPage.openDevelopersPage();
});

When('Scroll to the "Try Now" tab list', () => {
  developersPage.scrollToElement(developersPage.tryNowSectionTitle);
});
Then('The "Try Now" tab list is displayed', () => {
  cy.get(developersPage.tryNowSectionTabList).should('be.visible');
});

When('Click the "Search Number" tab', () => {
  developersPage.clickElement(developersPage.tryNowSearchNumberTab);
});
Then('The "Search Number" tab content is displayed', () => {
  cy.wait(1000).get(developersPage.tryNowSearchNumberContent).should('be.visible');
});

When('Click the "Order Number" tab', () => {
  developersPage.clickElement(developersPage.tryNowOrderNumberTab);
});
Then('The "Order Number" tab content is displayed', () => {
  cy.wait(1000).get(developersPage.tryNowOrderNumberContent).should('be.visible');
});

When('Click the "Send Message" tab', () => {
  developersPage.clickElement(developersPage.tryNowSendMessageTab);
});
Then('The "Send Message" tab content is displayed', () => {
  cy.wait(1000).get(developersPage.tryNowSendMessageContent).should('be.visible');
});
