import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "@pages/login.page";

Given('Visit login page', (site) => {
  loginPage.openLoginPage();
});

When('Click the "forgot your password" link', () => {
  loginPage.clickElement(loginPage.forgotPasswordLink);
});
Then('The "Password Reset" form is opened', () => {
  cy.wait(1000).url().should('include', '/password-reset')
});

When('Enter "email"', () => {
  loginPage.enterInput(loginPage.emailInput, loginPage.email);
});
Then('The "email" is entered', () => {
  cy.get(loginPage.emailInput).should('have.value', loginPage.email);
});

When('Click the "Reset password" button', () => {
  loginPage.clickElement(loginPage.resetPasswordButton);
});
Then('The message "We have accepted..." is displayed', () => {
  cy.wait(2000).get(loginPage.responseMessage).should('be.visible');
});
