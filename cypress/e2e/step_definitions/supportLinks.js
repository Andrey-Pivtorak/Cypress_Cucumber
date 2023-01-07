import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { supportPage } from "@pages/support.page";

Given('Visit the website support.telnyx.com\\/en, scroll to footer', () => {
  supportPage.openPage();
  supportPage.scrollToFooter();
});

When('Click the telnyx.com link', () => {
  supportPage.scrollElement(supportPage.elements.telnyxFooterLink());
});
Then('The telnyx.com page is opened', () => {
  supportPage.elements.telnyxFooterLink().should('have.attr', 'href', 'https://telnyx.com/');
})

When('Click the support 24 link', () => {
  supportPage.scrollElement(supportPage.elements.supportFooterLink());
});
Then('The Talk to an expert page is opened', () => {
  supportPage.elements.supportFooterLink().should('have.attr', 'href', 'https://telnyx.com/contact-us');
})

When('Click the FaceBook icon link', () => {
  supportPage.scrollElement(supportPage.elements.facebookFooterLink());
})
Then('The Telnyx FaceBook page is opened', () => {
  supportPage.elements.facebookFooterLink().should('have.attr', 'href', 'https://facebook.com/Telnyx/');
})
