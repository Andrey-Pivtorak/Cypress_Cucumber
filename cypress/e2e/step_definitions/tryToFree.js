import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { mainPage } from "@pages/main.page";

Given('Visit the website telnyx.com', () => {
  mainPage.openMainPage();
});

When('Enter email to the form', () => {
  mainPage.enterEmail();
  mainPage.clickTryToFreeButton();
});

Then('The Create a free account form is displayed', () => {
  cy.url().should('contains', '/sign-up');
});
