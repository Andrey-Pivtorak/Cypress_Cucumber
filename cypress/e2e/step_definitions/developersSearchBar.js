import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { developersPage } from "@pages/developers.page";

Given('Go to the site developers.telnyx.com', () => {
  developersPage.openDevelopersPage();
});

When('Click the "Search bar"', () => {
  developersPage.clickElement(developersPage.searchBar);
});
Then('The "Search bar" is focused', () => {
  cy.get(developersPage.searchBar).should('have.focus');
});

When('Enter the "JavaScript" request', () => {
  developersPage.enterInput(developersPage.searchBar, 'JavaScript');
});
Then('The "Video Javascript Quickstart" page is opened', () => {
  cy.get('div.geKsPq').should('be.visible');
});
