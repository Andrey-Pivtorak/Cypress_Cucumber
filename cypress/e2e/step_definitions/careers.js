import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import { careersPage } from "@pages/careers.page";

Given('Visit "careers" page', () => {
  careersPage.openPage(careersPage.url);
  careersPage.closePopUpButton();
});

When('Scroll to the "Mobile Core Engineer" link', () => {
  careersPage.scrollToElement(careersPage.mobCoreEngineerLink);
});
Then('The "Mobile Core Engineer" link is displayed', () => {
  cy.get(careersPage.mobCoreEngineerLink).should('be.visible');
});

When('Click the "Mobile Core Engineer" link', () => {
  careersPage.clickNoTargetElement(careersPage.mobCoreEngineerLink);
});
Then('The "Mobile Core Engineer" job application is opened', () => {
  cy.url().should('include', 'jobs/5385619003');
});

When('Scroll to the "Apply for this Job" form', () => {
  careersPage.scrollToElement(careersPage.applyFormTitle);
});
Then('The "Apply for this Job" form is displayed', () => {
  cy.get(careersPage.applyFormTitle).should('be.visible');
});

When('A user enter correct credentials, check entered data', (table) => {
  table.hashes().forEach(row => {
    cy.get(row.id).type(row.value).should('have.value', row.value);
  })
})

When('Enter "Yes" in the visa sponsorship field', () => {
  careersPage.enterVisaSelect();
});
Then('"Yes" is entered in the visa sponsorship field', () => {
  cy.get('#select2-chosen-1').should('have.text', 'Yes');
});

When('Enter "two thousand dollars" in the salary field', () => {
  careersPage.enterInput(careersPage.salaryInput, careersPage.salary);
});
Then('"Two thousand dollars" is entered in the salary field', () => {
  cy.get(careersPage.salaryInput).should('have.value', 'two thousand dollars');
});

When('Enter "No" in the countries field', () => {
  careersPage.enterCitizenSelect();
});
Then('"No" is entered in the countries field', () => {
  cy.get('#select2-chosen-2').should('have.text', 'No');
});

When('Enter "Male" in the Gender field', () => {
  careersPage.enterGenderInput();
});
Then('"Male" is entered in the Gender field', () => {
  cy.get('#select2-chosen-3').should('have.text', 'Male');
});

When('Scroll to the "Submit" Application button', () => {
  careersPage.scrollToElement(careersPage.submitButton);
});
When('Click the  "Submit" Application button', () => {
  careersPage.clickElement(careersPage.submitButton);
});

Then('The "Thank you for applying" message is displayed', () => {
  cy.get(careersPage.applyingMessage).should('be.visible');
});
