import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { partnershipsPage } from "@pages/partnerships.page";

Given('Visit partnerships page', () => {
  partnershipsPage.openPage(partnershipsPage.url);
  partnershipsPage.closePopUpButton();
});

When('Scroll to the "Become a Telnyx Partner" title', () => {
  partnershipsPage.scrollToElement(partnershipsPage.becomePartnerSection);
});
Then('The "Become a Telnyx Partner" title is displayed', () => {
  cy.get(partnershipsPage.becomePartnerSection).should('be.visible').wait(2000);
});

When('A user enter valid credentials, check entered data', (table) => {
  table.hashes().forEach(row => {
    cy.get(row.id).type(row.value).should('have.value', row.value);
  })
})

When('Set "Storage" in the Primary Use Case select', () => {
  partnershipsPage.enterUseCaseSelect();
});
Then('The "Storage" value is selected', () => {
  cy.get(partnershipsPage.primaryUseCase).should('have.value', 'Storage');
})

When('Enter "This is a test case by Andrii Pivtorak" text in the "Tell us more…" field', () => {
  partnershipsPage.enterInput(partnershipsPage.tellUsInput, partnershipsPage.inquiry);
});
Then('The "This is a test case by Andrii Pivtorak" text is entered', () => {
  cy.get(partnershipsPage.tellUsInput).should('have.value', partnershipsPage.inquiry);
})

When('Click the "Submit" button', () => {
  partnershipsPage.clickElement(partnershipsPage.submitButton);
});
Then('The "Partners" page is opened', () => {
  cy.get('h1.iNtgdk').should('contain', 'Build. Scale. Connect.  with Telnyx Partner Program');
});
