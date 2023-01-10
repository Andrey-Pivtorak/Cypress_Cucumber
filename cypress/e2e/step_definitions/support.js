import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { supportPage } from "@pages/support.page";

Given('Visit the website support.telnyx.com', () => {
    supportPage.openPage();
  });

When('Click the "Getting Started" section', () => {
  supportPage.clickElement(supportPage.gettingStartedSection);
});
Then('The "Getting Started" page is opened', () => {
  cy.wait(2000).url().should('contains', 'getting-started');
})

When('Click the "Tours and Videos" section', () => {
  supportPage.clickElement(supportPage.toursVideoSection);
})
Then('The "Tours and Videos" page is opened', () => {
  cy.wait(2000).url().should('contains', 'tours-and-videos');
})

When('Click the "Reference Material" section', () => {
  supportPage.clickElement(supportPage.referenceMaterialSection);
})
Then('The "Reference Material" page is opened', () => {
  cy.wait(2000).url().should('contains', 'reference-material');
})
