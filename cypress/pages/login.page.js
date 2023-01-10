import Base from "./base";

class LoginPage extends Base {
  baseUrl = 'https://portal.telnyx.com/#/login/sign-in';

  forgotPasswordLink = '.eNJyDb a';
  emailInput = 'input[name="email"]';
  resetPasswordButton = '.QRlWQ';
  responseMessage = '.hGlGBT';
  email = 'email: testemailcucumber@gmail.com';

  openLoginPage() {
    cy.visit(`${this.baseUrl}`);
    cy.url().should('include', '/login');
  }

}

export const loginPage = new LoginPage();
