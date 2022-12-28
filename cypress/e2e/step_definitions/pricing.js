import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { pricingPage } from "@pages/pricing.page";

Given('Visit pricing page', () => {
  pricingPage.openPricingPage();
});

When('Scroll to the Which products... section', () => {
  pricingPage.scrollWhichProductsTitle();
});
Then('The Which products... section is displayed', () => {
  pricingPage.elements.whichProductsTitle().should('contain', 'Which products do you use?');
});

When('Click the Voice API button', () => {
  pricingPage.clickVoiceApiButton();
});
Then('The Voice API button is checked', () => {
  cy.get('.fkuRxe > :nth-child(3) input').should('have.value', 'true');
});

When('Click the Continue button', () => {
  pricingPage.clickContinueButton();
});
Then('How many phone numbers… section is displayed', () => {
  cy.get('.cTxamq').should('contain', 'How many phone numbers do you use?');
});

When('Click + to add local numbers', () => {
  pricingPage.clickAddLocalNumbersButton();
});
Then('110 is entered in the Local Numbers field', () => {
  pricingPage.elements.localNumbersInput().should('have.value', '110');
});

When('Click - to decrease toll-free Numbers', () => {
  pricingPage.clickDecreaseTollFreeNumbersButton();
});
Then('90 is entered in the Toll-free Numbers field', () => {
  pricingPage.elements.tollFreeNumbersInput().should('have.value', '90');
});

When('Press the Continue button', () => {
  pricingPage.clickContinueButton();
});
Then('Adjust your usage… section is displayed', () => {
  cy.get('.cTxamq').should('contain', 'Adjust your usage to calculate savings');
});

When('Click the + button in the Receive inbound field', () => {
  pricingPage.clickAddInboundButton();
});
Then('$4,957... is displayed below the Your saving title', () => {
  cy.get('.NYGAb').should('have.text', '$4,932/ yearif you switch from Twilio');
});
