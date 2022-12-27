import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { developersPage } from "@pages/developers.page";

Given('Visit developers libraries page', () => {
  developersPage.openDevelopersLibrariesPage();
});

When('Scroll to the client libraries section', () => {
  developersPage.scrollLibrariesTitle();
});
Then('The  client libraries section is displayed', () => {
  developersPage.elements.librariesTitle().should('be.visible');
});

When('Click the Ruby icon', () => {
  developersPage.clickRubyLink();
});
Then('The gem install telnyx code is displayed', () => {
  developersPage.elements.rubyCode().should('be.visible');
});

When('Click the Node icon', () => {
  developersPage.clickNodeLink();
});
Then('The npm install telnyx code is displayed', () => {
  developersPage.elements.nodeCode().should('be.visible');
});

When('Click the Java icon', () => {
  developersPage.clickJavaLink();
});
Then('The Java code is displayed', () => {
  developersPage.elements.javaCode().should('be.visible');
});

When('Click the .NET icon', () => {
  developersPage.clickDotNetLinkLink();
});
Then('The nuget install Telnyx.net code is displayed', () => {
  developersPage.elements.dotNeCode().should('be.visible');
});
