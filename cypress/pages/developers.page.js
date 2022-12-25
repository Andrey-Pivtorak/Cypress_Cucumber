import Base from "./base";

class DevelopersPage extends Base {

  baseUrl = 'https://developers.telnyx.com/docs';

  elements = {
    api1Button: () => cy.get('.fsStYO .hYETLD > :first-child'),
    api2Button: () => cy.get('.fsStYO .hYETLD > :last-child'),
    api1Title: () => cy.get('#telnyx-api-v1-documentation'),
    api2Title: () => cy.get('#telnyx-api-v2-documentation')
  }

  openDevelopersPage() {
    cy.visit(`${this.baseUrl}`);
  }

  clickApi1Button() {
    this.clickElement(this.elements.api1Button());
  }

  clickApi2Button() {
    this.clickElement(this.elements.api2Button());
  }

}

export const developersPage = new DevelopersPage();
