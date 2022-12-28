import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { partnershipsPage } from "@pages/partnerships.page";

Given('Visit partnerships page', () => {
  partnershipsPage.openPartnershipsPage();
});

When('Scroll to the Become a Telnyx Partner title', () => {
  partnershipsPage.scrollBecomePartnerSection();
});
Then('The Become a Telnyx Partner title is displayed', () => {
  partnershipsPage.elements.becomePartnerSection().should('be.visible');
  cy.wait(2000);
});

When('Enter FirstName', () => {
  partnershipsPage.enterFirstNameInput();
});
Then('The FirstName is entered', () => {
  partnershipsPage.elements.firstNameInput().should('have.value', `${partnershipsPage.inputValues.firstName}`);
});

When('Enter LastName', () => {
  partnershipsPage.enterLastNameInput();
});
Then('The LastName is entered', () => {
  partnershipsPage.elements.lastNameInput().should('have.value', `${partnershipsPage.inputValues.lastName}`);
});

When('Enter partners Email', () => {
  partnershipsPage.enterEmail();
});
Then('The Partners Email is entered', () => {
  partnershipsPage.elements.emailInput().should('have.value', `${partnershipsPage.inputValues.email}`);
});

When('Set Storage in the Primary Use Case select', () => {
  partnershipsPage.enterUseCaseSelect();
});
Then('The Storage value is selected', () => {
  cy.get('#Use_Case_Form__c').should('have.value', 'Storage');
})

When('Enter This is a test case by Andrii Pivtorak" text in the Tell us more… field', () => {
  partnershipsPage.enterTellUsInput();
});
Then('The This is a test case by Andrii Pivtorak text is entered', () => {
  partnershipsPage.elements.tellUsInput().should('have.value', `${partnershipsPage.inputValues.inquiry}`);
})

When('Click the Submit button', () => {
  partnershipsPage.clickSubmitButton();
});
Then('The Partners page is opened', () => {
  cy.get('h1.iNtgdk').should('contain', 'Build. Scale. Connect.  with Telnyx Partner Program');
});
