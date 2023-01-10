import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { mainPage } from "@pages/main.page";

Given('Visit the website telnyx.com', () => {
  mainPage.openPage('/');
  mainPage.closePopUpButton();
});

When('Enter "email" to the form', () => {
  mainPage.enterInput(mainPage.emailInput, mainPage.email);
});
When('Click the "Try to free button"', () => {
  mainPage.clickElement(mainPage.tryToFreeButton);
});

Then('The "Create a free account" form is displayed', () => {
  cy.wait(2000).url().should('contains', '/sign-up');
});
