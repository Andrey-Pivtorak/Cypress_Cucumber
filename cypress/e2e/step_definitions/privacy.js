import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { privacyPage } from "@pages/privacy.page";

Given('Visit privacy page', () => {
  privacyPage.openPage(privacyPage.url);
  privacyPage.closePopUpButton();
});

When('Click the "Telnyx Product Updates" link', () => {
  privacyPage.clickElement(privacyPage.productUpdatesLink);
});
Then('The "Telnyx Product Updates" information is displayed', () => {
  cy.get(privacyPage.productUpdatesTitle).should('contain', 'Telnyx Product Updates');
});

When('Scroll to the "Data & Privacy" title', () => {
  privacyPage.scrollToElement(privacyPage.dataPrivacyTitle);
});
Then('The "Data & Privacy" title is displayed', () => {
  cy.get(privacyPage.dataPrivacyTitle).should('contain', 'Data & Privacy');
});

When('Click the "GDPR Frequently Asked..." link', () => {
  privacyPage.clickElement(privacyPage.gdprLink);
});
Then('The "GDPR Frequently Asked..." information is displsyed', () => {
  cy.get(privacyPage.gdprTitle).should('contain', 'GDPR Frequently Asked Questions');
});

When('Click the "Data Transfer Impact..." link', () => {
  privacyPage.clickElement(privacyPage.dataTransferLink);
});
Then('The "Data Transfer Impact..." information is displsyed', () => {
  cy.get(privacyPage.dataTransferTitle).should('contain', 'Data Transfer Impact Assessment');
});
