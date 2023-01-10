import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { supportPage } from "@pages/support.page";

Given('Visit the website support.telnyx.com\\/en, scroll to footer', () => {
  supportPage.openPage();
  supportPage.scrollToElement(supportPage.footer);
});

When('Click the "telnyx.com" link', () => {
  supportPage.clickNoTargetElement(supportPage.telnyxFooterLink);
});
Then('The "telnyx.com" page is opened', () => {
  supportPage.closePopUpButton();
  cy.wait(2000).url().should('include', 'telnyx.com');
});

When('Click the "support 24" link', () => {
  supportPage.clickNoTargetElement(supportPage.supportFooterLink);
});
Then('The "Talk to an expert" page is opened', () => {
  supportPage.closePopUpButton();
  cy.wait(2000).url().should('include', 'contact-us');
});

When('Click the "FaceBook" icon link', () => {
  supportPage.clickNoTargetElement(supportPage.facebookFooterLink);
});
Then('The Telnyx "FaceBook" page is opened', () => {
  cy.wait(2000).url().should('include', 'facebook');
});
