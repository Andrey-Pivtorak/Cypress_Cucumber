import Base from "./base";

class SupportPage extends Base {

  baseUrl = 'https://support.telnyx.com/en/';

  gettingStartedSection = '.section > :nth-child(1)';
  toursVideoSection = '.section > :nth-child(8)';
  referenceMaterialSection = '.section > :nth-child(15)';
  telnyxFooterLink = '.footer__links__custom > :nth-child(1) a';
  supportFooterLink = '.footer__links__custom > :nth-child(4) a';
  facebookFooterLink = '[data-footer-link-type="facebook"] a';
  footer = '.footer';

  openPage() {
    cy.visit(this.baseUrl);
    cy.url().should('include', 'support');
  }

}

export const supportPage = new SupportPage();
