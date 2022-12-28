import Base from "./base";
import { mainPage } from "./main.page";

class PricingPage extends Base {

  baseUrl = 'https://telnyx.com/twilio-pricing-calculator';

  elements = {
    whichProductsTitle: () => cy.get('header.fbrtSd'),
    voiceApiButton: () => cy.get('.fkuRxe > :nth-child(3)'),
    continueButton: () => cy.get('button.cSsJix'),
    localNumbersInput: () => cy.get('#local-numbers'),
    addLocalNumbersButton: () => cy.get('.jVrZQH > :nth-child(1) input ~ button'),
    tollFreeNumbersInput: () => cy.get('#toll-free-numbers'),
    decreaseTollFreeNumbersButton: () => cy.xpath('//input[@id="toll-free-numbers"]/preceding-sibling::button'),
    addInboundButton: () => cy.get('#receive-inbound-calls-with-call-control ~ button'),
  }

  openPricingPage() {
    cy.visit(`${this.baseUrl}`);
    mainPage.elements.cookiePopUp().click();
    cy.url().should('include', 'pricing');
  }

  scrollWhichProductsTitle() {
    this.scrollElement(this.elements.whichProductsTitle());
  }

  clickVoiceApiButton() {
    this.clickElement(this.elements.voiceApiButton());
  }

  clickContinueButton() {
    this.clickElement(this.elements.continueButton());
  }

  clickAddLocalNumbersButton() {
    this.clickElement(this.elements.addLocalNumbersButton());
  }

  clickDecreaseTollFreeNumbersButton() {
    this.clickElement(this.elements.decreaseTollFreeNumbersButton());
  }

  clickAddInboundButton() {
    this.clickElement(this.elements.addInboundButton());
  }

}

export const pricingPage = new PricingPage();
