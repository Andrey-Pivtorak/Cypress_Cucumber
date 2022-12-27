import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "@pages/login.page";

Given('Visit login page', (site) => {
  loginPage.openLoginPage();
});

When('Click the forgot your password link', () => {
  loginPage.clickForgotPasswordLink();
});
Then('The Password Reset form is opened', () => {
  cy.url().should('include', '/password-reset')
});

When('Enter email', () => {
  loginPage.enterEmail();
});
Then('The email is entered', () => {
  loginPage.elements.emailInput().should('have.value', `${loginPage.inputValues.email}`);
});

When('Click the Reset password button', () => {
  loginPage.clickResetPasswordButton();
});
Then('The message We have accepted... is displayed', () => {
  loginPage.elements.responseMessage().should('be.visible');
});
