import Base from "./base";

class SupportPage extends Base {

  baseUrl = 'https://support.telnyx.com/en/';
  facebookUrl = 'https://www.linkedin.com/authwall?trk=bf&trkInfo=AQE-rJ4Vrvsb5AAAAYVGngQY_-TVEHX5XGOHmM5ftB9XdYvDJPsGCHv3hsn3ek_WBqleFS1K1MTEcQEdo92DlrZs-x7idSnUTrzXVPtRZZR4292-BkMLbTw5Pju2RvNxU9PnXCU=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F3349412%2F';

  elements = {
    gettingStartedSection: () => cy.get('.section > :nth-child(1)'),
    toursVideoSection: () => cy.get('.section > :nth-child(8)'),
    referenceMaterialSection: () => cy.get('.section > :nth-child(15)'),
    telnyxFooterLink: () => cy.get('.footer__links__custom > :nth-child(1)'),
    supportFooterLink: () => cy.get('.footer__links__custom > :nth-child(4) a'),
    facebookFooterLink: () => cy.get('[data-footer-link-type="facebook"]'),
    linkedinFooterLink: () => cy.get('[data-footer-link-type="linkedin"]'),
    footer: () => cy.get('.footer')
  }

  openPage() {
    cy.visit(`${this.baseUrl}`);
  }

  clickGettingStartedSection() {
    this.scrollElement(this.elements.gettingStartedSection());
    this.clickElement(this.elements.gettingStartedSection());
  }

  clickToursVideoSection() {
    this.scrollElement(this.elements.toursVideoSection());
    this.clickElement(this.elements.toursVideoSection());
  }

  clickReferenceMaterialSection() {
    this.scrollElement(this.elements.referenceMaterialSection());
    this.clickElement(this.elements.referenceMaterialSection());
  }

  scrollToFooter() {
    this.scrollElement(this.elements.footer());
  }

  clickTelnyxFooterLink() {
    this.clickElement(this.elements.telnyxFooterLink());
  }

  clickSupportFooterLink() {
    this.clickElement(this.elements.supportFooterLink());
  }

  clickFacebookFooterLink() {
    this.clickElement(this.elements.facebookFooterLink());
  }

  clickLinkedinFooterLink() {
    this.clickElement(this.elements.linkedinFooterLink());
  }

}

export const supportPage = new SupportPage();
