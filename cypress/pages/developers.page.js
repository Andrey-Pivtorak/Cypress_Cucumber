import Base from "./base";

class DevelopersPage extends Base {

  baseUrl = 'https://developers.telnyx.com';
  librariesUrl = 'https://developers.telnyx.com/docs/api/v2/overview';

  elements = {
    api1Button: () => cy.get('.fsStYO .hYETLD > :first-child'),
    api2Button: () => cy.get('.fsStYO .hYETLD > :last-child'),
    // api1Title: () => cy.get('#telnyx-api-v1-documentation'),
    api1Title: () => cy.get('.kqOdep h1'),
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
    accountLink: () => cy.get('#docs-desktop-sidebar .dwzZgE > :nth-child(2)'),
    portingLink: () => cy.get('#docs-desktop-sidebar .dwzZgE > :nth-child(6)'),
    webrtcLink: () => cy.get('#docs-desktop-sidebar .dwzZgE > :nth-child(10)'),
    debuggingLink: () => cy.get('#docs-desktop-sidebar .dwzZgE > :nth-child(15)'),

    librariesTitle: () => cy.get('#client-libraries'),
    rubyLink: () => cy.get('.dmyoCH > :nth-child(2)'),
    rubyCode: () => cy.get('.language-ruby'),
    nodeLink: () => cy.get('.dmyoCH > :nth-child(3)'),
    nodeCode: () => cy.get('.language-javascript'),
    javaLink: () => cy.get('.dmyoCH > :nth-child(5)'),
    javaCode: () => cy.get('.language-java'),
    dotNetLink: () => cy.get('.dmyoCH > :nth-child(6)'),
    dotNeCode: () => cy.get('.language-csharp'),


  }

  openDevelopersPage() {
    cy.visit(`${this.baseUrl}`);
    cy.url().should('include', 'developers');
  }

  openDevelopersLibrariesPage() {
    cy.visit(`${this.librariesUrl}`);
    cy.url().should('include', '/overview');
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

  clickAccountLink() {
    this.clickElement(this.elements.accountLink());
  }

  clickPortingLink() {
    this.clickElement(this.elements.portingLink());
  }

  clickWebrtcLink() {
    this.clickElement(this.elements.webrtcLink());
  }

  clickDebuggingLink() {
    this.clickElement(this.elements.debuggingLink());
  }

  scrollLibrariesTitle() {
    this.scrollElement(this.elements.librariesTitle());
  }

  clickRubyLink() {
    this.clickElement(this.elements.rubyLink());
  }

  clickNodeLink() {
    this.clickElement(this.elements.nodeLink());
  }

  clickJavaLink() {
    this.clickElement(this.elements.javaLink());
  }

  clickDotNetLinkLink() {
    this.clickElement(this.elements.dotNetLink());
  }


}

export const developersPage = new DevelopersPage();
