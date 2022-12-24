import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { supportPage } from "@pages/support.page";

Given('Visit the website support.telnyx.com\\/en', () => {
  supportPage.openPage();
});

When('Click the Getting Started section', () => {
  supportPage.clickGettingStartedSection();
});
Then('The Getting Started page is opened', () => {
  cy.url().should('contains', 'getting-started');
})

When('Click the Tours and Videos section', () => {
  supportPage.clickToursVideoSection();
})
Then('The Tours and Videos page is opened', () => {
  cy.url().should('contains', 'tours-and-videos');
})

When('Click the Reference Material section', () => {
  supportPage.clickReferenceMaterialSection();
})
Then('The Reference Material page is opened', () => {
  cy.url().should('contains', 'reference-material');
})


