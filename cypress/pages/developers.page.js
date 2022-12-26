import Base from "./base";

class DevelopersPage extends Base {

  baseUrl = 'https://developers.telnyx.com';

  elements = {
    api1Button: () => cy.get('.fsStYO .hYETLD > :first-child'),
    api2Button: () => cy.get('.fsStYO .hYETLD > :last-child'),
    api1Title: () => cy.get('#telnyx-api-v1-documentation'),
    api2Title: () => cy.get('#telnyx-api-v2-documentation'),
    messagingButton: () => cy.get('.fsayUj > :nth-child(1)'),
    sipTrunkingButton: () => cy.get('.fsayUj > :nth-child(4)'),
    searchBar: () => cy.xpath('//div[@id="docs-desktop-sidebar"]//input'),
    searchResponseLink: () => cy.xpath('//a[contains(@href,"javascript-quickstart")]'),
    tryNowSectionTitle: () => cy.get('.bsfvBg'),
    tryNowSectionTabList: () => cy.get('.bTQRcM'),
    tryNowSearchNumberTab: () => cy.get('.eGZJmB > :nth-child(2)'),
    tryNowSearchNumberContent: () => cy.get('[id="tabpanel-Search Number"] code'),
    tryNowOrderNumberTab: () => cy.get('.eGZJmB > :nth-child(3)'),
    tryNowOrderNumberContent: () => cy.get('[id="tabpanel-Order Number"] code'),
    tryNowSendMessageTab: () => cy.get('.eGZJmB > :nth-child(4)'),
    tryNowSendMessageContent: () => cy.get('[id="tabpanel-Send Message"] code'),
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

  clickSearchBar() {
    this.clickElement(this.elements.searchBar());
  }

  enterSearchRequest() {
    this.enterInput(this.elements.searchBar(), 'JavaScript')
  }

  clickSearchResponseLink() {
    this.elements.searchResponseLink().click();
  }

  scrollTryNowSectionTitle() {
    this.scrollElement(this.elements.tryNowSectionTitle());
  }

  clickTryNowSearchNumberTab() {
    this.clickElement(this.elements.tryNowSearchNumberTab());
  }

  clickTryNowOrderNumberTab() {
    this.clickElement(this.elements.tryNowOrderNumberTab());
  }

  clickTryNowSendMessageTab() {
    this.clickElement(this.elements.tryNowSendMessageTab());
  }

}

export const developersPage = new DevelopersPage();
