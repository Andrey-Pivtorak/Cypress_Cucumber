import Base from "./base";

class SupportPage extends Base {

  baseUrl = 'https://support.telnyx.com/en/';

  elements = {
    gettingStartedSection: () => cy.get('.section > :nth-child(1)'),
    toursVideoSection: () => cy.get('.section > :nth-child(8)'),
    referenceMaterialSection: () => cy.get('.section > :nth-child(15)'),

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


}

export const supportPage = new SupportPage();
