import Base from "./base";

class LoginPage extends Base {
  baseUrl = 'https://portal.telnyx.com/#/login/sign-in';

  elements = {
    forgotPasswordLink: () => cy.get('.eNJyDb a'),
    emailInput: () => cy.get('input[name="email"]'),
    resetPasswordButton: () => cy.get('.QRlWQ'),
    responseMessage: () => cy.get('.hGlGBT')
  }

  inputValues = {
    email: 'email: testemailcucumber@gmail.com'
  }

  openLoginPage() {
    cy.visit(`${this.baseUrl}`);
    cy.url().should('include', '/login');
  }

  clickForgotPasswordLink() {
    this.clickElement(this.elements.forgotPasswordLink());
  }

  enterEmail() {
    this.enterInput(this.elements.emailInput(), this.inputValues.email);
  }

  clickResetPasswordButton() {
    this.clickElement(this.elements.resetPasswordButton());
  }

}

export const loginPage = new LoginPage();
