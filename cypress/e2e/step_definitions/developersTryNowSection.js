import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { developersPage } from "@pages/developers.page";

Given('The site developers.telnyx.com is opened', () => {
  developersPage.openDevelopersPage();
});

When('Scroll to the Try Now tab list', () => {
  developersPage.scrollTryNowSectionTitle();
});
Then('The Try Now tab list is displayed', () => {
  developersPage.elements.tryNowSectionTabList().should('be.visible');
});

When('Click the Search Number tab', () => {
  developersPage.clickTryNowSearchNumberTab();
});
Then('The Search Number tab content is displayed', () => {
  developersPage.elements.tryNowSearchNumberContent().should('be.visible');
});

When('Click the Order Number tab', () => {
  developersPage.clickTryNowOrderNumberTab();
});
Then('The Order Number tab content is displayed', () => {
  developersPage.elements.tryNowOrderNumberContent().should('be.visible');
});

When('Click the Send Message tab', () => {
  developersPage.clickTryNowSendMessageTab();
});
Then('The Send Message tab content is displayed', () => {
  developersPage.elements.tryNowSendMessageContent().should('be.visible');
});
