import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { supportPage } from "@pages/support.page";

Given('Visit the website support.telnyx.com\\/en, scroll to footer', () => {
  supportPage.openPage();
  supportPage.scrollToFooter();
});

When('Click the telnyx.com link', () => {
  supportPage.clickTelnyxFooterLink();
});
Then('The telnyx.com page is opened', () => {
  cy.visit('https://telnyx.com/', {
    onBeforeLoad(win) {
      cy.stub(win, 'open')
    }
  });
})

When('Click the support 24 link', () => {
  supportPage.clickSupportFooterLink();
});
Then('The Talk to an expert page is opened', () => {
  cy.visit('https://telnyx.com/contact-us', {
    onBeforeLoad(win) {
      cy.stub(win, 'open')
    }
  });
})

// When('Click the FaceBook icon link', () => {
//   supportPage.clickFacebookFooterLink();
// })
// Then('The Telnyx FaceBook page is opened', () => {
//   cy.visit('https://www.facebook.com/Telnyx/', {
//     onBeforeLoad(win) {
//       cy.stub(win, 'open')
//     }
//   });
// })
