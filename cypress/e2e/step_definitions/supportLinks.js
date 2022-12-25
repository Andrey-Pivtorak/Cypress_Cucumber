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

When('Click the support 24\\/7 link', () => {
  supportPage.clickSupportFooterLink();
});
Then('The Talk to an expert page is opened', () => {
  cy.visit('https://telnyx.com/contact-us', {
    onBeforeLoad(win) {
      cy.stub(win, 'open')
    }
  });
})

When('Click the FaceBook icon link', () => {
  supportPage.clickFacebookFooterLink();
})
Then('The Telnyx FaceBook page is opened', () => {
  cy.visit('https://www.facebook.com/Telnyx/', {
    onBeforeLoad(win) {
      cy.stub(win, 'open')
    }
  });
})

When('Click the LinkedIn icon link', () => {
  supportPage.clickLinkedinFooterLink();
})
Then('The Telnyx LinkedIn page is opened', () => {
  cy.visit('https://www.linkedin.com/authwall?trk=bf&trkInfo=AQE-rJ4Vrvsb5AAAAYVGngQY_-TVEHX5XGOHmM5ftB9XdYvDJPsGCHv3hsn3ek_WBqleFS1K1MTEcQEdo92DlrZs-x7idSnUTrzXVPtRZZR4292-BkMLbTw5Pju2RvNxU9PnXCU=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F3349412%2F', {
    onBeforeLoad(win) {
      cy.stub(win, 'open')
    }
  });
})
