import Base from "./base";
import { mainPage } from "./main.page";

class PrivacyPage extends Base {

  baseUrl = 'https://telnyx.com/company/data-privacy#dtia';

  elements = {
    dataPrivacyTitle: () => cy.get('h1.eCGKsC'),
    productUpdatesLink: () => cy.get('ul a[href="#productupdates"]'),
    productUpdatesTitle: () => cy.get('#productupdates h2'),
    gdprLink: () => cy.get('ul a[href="#faq"]'),
    gdprTitle: () => cy.get('#faq h2'),
    dataTransferLink: () => cy.get('ul a[href="#dtia"]'),
    dataTransferTitle: () => cy.get('#dtia h2')

  }

  openPrivacyPage() {
    cy.visit(`${this.baseUrl}`);
    mainPage.elements.cookiePopUp().click();
    cy.url().should('include', 'privacy');
  }

  clickProductUpdatesLink() {
    this.clickElement(this.elements.productUpdatesLink());
  }

  scrollDataPrivacyTitle() {
    this.scrollElement(this.elements.dataPrivacyTitle());
  }

  clickGdprLink() {
    this.clickElement(this.elements.gdprLink());
  }

  clickDataTransferLink() {
    this.clickElement(this.elements.dataTransferLink());
  }

}

export const privacyPage = new PrivacyPage();
