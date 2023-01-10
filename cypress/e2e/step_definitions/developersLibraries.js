import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { developersPage } from "@pages/developers.page";

Given('Visit developers libraries page', () => {
  developersPage.openDevelopersLibrariesPage();
});

When('Scroll to the "client libraries" section', () => {
  developersPage.scrollToElement(developersPage.librariesTitle);
});
Then('The  "client libraries" section is displayed', () => {
  cy.get(developersPage.librariesTitle).should('be.visible');
});

When('Click the "Ruby" icon', () => {
  developersPage.clickElement(developersPage.rubyLink);
});
Then('The "gem install telnyx" code is displayed', () => {
  cy.get(developersPage.rubyCode).should('be.visible');
});

When('Click the "Node" icon', () => {
  developersPage.clickElement(developersPage.nodeLink);
});
Then('The "npm install telnyx" code is displayed', () => {
  cy.wait(1000).get(developersPage.nodeCode).should('be.visible');
});

When('Click the "Java" icon', () => {
  developersPage.clickElement(developersPage.javaLink);
});
Then('The "Java" code is displayed', () => {
  cy.wait(1000).get(developersPage.javaCode).should('be.visible');
});

When('Click the ".NET" icon', () => {
  developersPage.clickElement(developersPage.dotNetLink);
});
Then('The "nuget install Telnyx.net" code is displayed', () => {
  cy.wait(1000).get(developersPage.dotNeCode).should('be.visible');
});
