import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { careersPage } from "@pages/careers.page";

Given('Visit careers page', () => {
  careersPage.openCareersPage();
});

When('Scroll to the Mobile Core Engineer link', () => {
  careersPage.scrollMobCoreEngineerLink();
});
Then('The Mobile Core Engineer link is displayed', () => {
  careersPage.elements.mobCoreEngineerLink().should('be.visible');
});

When('Click the Mobile Core Engineer link', () => {
  careersPage.clickMobCoreEngineerLink();
});
Then('The Mobile Core Engineer job application is opened', () => {
  cy.visit('https://boards.greenhouse.io/telnyx54/jobs/5385619003', {
    onBeforeLoad(win) {
      cy.stub(win, 'open')
    }
  });
});

When('Scroll to the Apply for this Job form', () => {
  careersPage.scrollApplyFormTitle();
});
Then('The Apply for this Job form is displayed', () => {
  careersPage.elements.applyForm().should('be.visible');
});

When('Enter First Name', () => {
  careersPage.enterFirstName();
});
Then('The First Name is entered', () => {
  careersPage.elements.firstNameInput().should('have.value', `${careersPage.inputValues.firstName}`);
});

When('Enter Last Name', () => {
  careersPage.enterLastName();
});
Then('The Last Name is entered', () => {
  careersPage.elements.lastNameInput().should('have.value', `${careersPage.inputValues.lastName}`);
});

When('Enter Email', () => {
  careersPage.enterEmail();
});
Then('The Email is entered', () => {
  careersPage.elements.emailInput().should('have.value', `${careersPage.inputValues.email}`);
});

When('Enter Yes in the visa sponsorship field', () => {
  careersPage.enterVisaSelect();
});
Then('Yes is entered in the visa sponsorship field', () => {
  cy.get('#select2-chosen-1').should('be.visible');
});
// When('', () => {

// });
// Then('', () => {

// });
// When('', () => {

// });
// Then('', () => {

// });

// When('', () => {

// });
// Then('', () => {

// });
