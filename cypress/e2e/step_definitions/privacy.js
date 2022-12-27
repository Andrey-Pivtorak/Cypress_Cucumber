import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { privacyPage } from "@pages/privacy.page";

Given('Visit privacy page', () => {
  privacyPage.openPrivacyPage();
});

When('Click the Telnyx Product Updates link', () => {
  privacyPage.clickProductUpdatesLink();
});
Then('The Telnyx Product Updates information is displayed', () => {
  privacyPage.elements.productUpdatesTitle().should('contain', 'Telnyx Product Updates');
});

When('Scroll to the Data & Privacy title', () => {
  privacyPage.scrollDataPrivacyTitle();
});
Then('The Data & Privacy title is displayed', () => {
  privacyPage.elements.dataPrivacyTitle().should('contain', 'Data & Privacy');
});

When('Click the GDPR Frequently Asked... link', () => {
  privacyPage.clickGdprLink();
});
Then('The GDPR Frequently Asked... information is displsyed', () => {
  privacyPage.elements.gdprTitle().should('contain', 'GDPR Frequently Asked Questions');
  privacyPage.scrollDataPrivacyTitle();
});

When('Click the Data Transfer Impact... link', () => {
  privacyPage.clickDataTransferLink();
});
Then('The Data Transfer Impact... information is displsyed', () => {
  privacyPage.elements.dataTransferTitle().should('contain', 'Data Transfer Impact Assessment');
});
