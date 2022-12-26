import Base from "./base";

class DevelopersPage extends Base {

  baseUrl = 'https://developers.telnyx.com/docs/v2';

  elements = {
    api1Button: () => cy.get('.fsStYO .hYETLD > :first-child'),
    api2Button: () => cy.get('.fsStYO .hYETLD > :last-child'),
    api1Title: () => cy.get('#telnyx-api-v1-documentation'),
    api2Title: () => cy.get('#telnyx-api-v2-documentation'),
    messagingButton: () => cy.get('.fsayUj > :nth-child(1)'),
    sipTrunkingButton: () => cy.get('.fsayUj > :nth-child(4)'),

  }

  openDevelopersPage() {
    cy.visit(`${this.baseUrl}`);
    cy.url().should('include', 'developers');
  }

  clickApi1Button() {
    this.clickElement(this.elements.api1Button());
  }

  clickApi2Button() {
    this.clickElement(this.elements.api2Button());
  }

  clickMessagingButton() {
    this.clickElement(this.elements.messagingButton());
  }

  clickSipTrunkingButton() {
    this.clickElement(this.elements.sipTrunkingButton());
  }

}

export const developersPage = new DevelopersPage();
