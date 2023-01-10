import Base from "./base";

class DevelopersPage extends Base {

  baseUrl = 'https://developers.telnyx.com';
  librariesPageUrl = 'https://developers.telnyx.com/docs/api/v2/overview';

  messagingButton = '.fsayUj > :nth-child(1)';
  sipTrunkingButton = '.fsayUj > :nth-child(4)';
  librariesTitle = '#client-libraries';
  rubyLink = '.dmyoCH > :nth-child(2)';
  rubyCode = '.language-ruby';

  nodeLink = '.dmyoCH > :nth-child(3)';
  nodeCode = '.language-javascript';
  javaLink = '.dmyoCH > :nth-child(5)';
  javaCode = '.language-java';
  dotNetLink = '.dmyoCH > :nth-child(6)';
  dotNeCode = '.language-csharp';

  searchBar = '.sFNkS input';

  accountLink = '#docs-desktop-sidebar .dwzZgE > :nth-child(2)';
  portingLink = '#docs-desktop-sidebar .dwzZgE > :nth-child(6)';
  webrtcLink = '#docs-desktop-sidebar .dwzZgE > :nth-child(10)';
  debuggingLink = '#docs-desktop-sidebar .dwzZgE > :nth-child(15)';

  tryNowSectionTitle = '.bsfvBg';
  tryNowSectionTabList = '.bTQRcM';
  tryNowSearchNumberTab = '.eGZJmB > :nth-child(2)';
  tryNowSearchNumberContent = '[id="tabpanel-Search Number"] code';
  tryNowOrderNumberTab = '.eGZJmB > :nth-child(3)';
  tryNowOrderNumberContent = '[id="tabpanel-Order Number"] code';
  tryNowSendMessageTab = '.eGZJmB > :nth-child(4)';
  tryNowSendMessageContent = '[id="tabpanel-Send Message"] code';

  api1Button = '.fsStYO .hYETLD > :first-child';
  api1Title = '.kqOdep h1';
  api2Button = '.fsStYO .hYETLD > :last-child';
  api2Title = '#telnyx-api-v2-documentation';

  openDevelopersPage() {
    cy.visit(`${this.baseUrl}`);
    cy.url().should('include', 'developers').wait(2000);
  }

  openDevelopersLibrariesPage() {
    cy.visit(`${this.librariesPageUrl}`);
    cy.url().should('include', '/overview');
  }

}

export const developersPage = new DevelopersPage();
