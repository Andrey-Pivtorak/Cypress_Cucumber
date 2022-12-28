import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { developersPage } from "@pages/developers.page";

Given('Go to the site developers.telnyx.com', () => {
  developersPage.openDevelopersPage();
});

When('Click the Search bar', () => {
  developersPage.clickSearchBar();
});
Then('The Search bar is focused', () => {
  developersPage.elements.searchBar().focus();
});

When('Enter the JavaScript request', () => {
  developersPage.enterSearchRequest();
  cy.wait(1500);
});
When('Click first response link', () => {
  developersPage.clickSearchResponseLink();
});
Then('The Video Javascript Quickstart page is opened', () => {
  cy.url().should('include', 'javascript-quickstart');
});
