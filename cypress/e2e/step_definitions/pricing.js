import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { pricingPage } from "@pages/pricing.page";

Given('Visit pricing page', () => {
  pricingPage.openPage(pricingPage.url);
  pricingPage.closePopUpButton();
});

When('Scroll to the "Which products..." section', () => {
  pricingPage.scrollToElement(pricingPage.whichProductsTitle);
});
Then('The "Which products..." section is displayed', () => {
  cy.get(pricingPage.whichProductsTitle).should('contain', 'Which products do you use?');
});

When('Click the "Voice API" button', () => {
  pricingPage.clickElement(pricingPage.voiceApiButton);
});
Then('The "Voice API" button is checked', () => {
  cy.get('.fkuRxe > :nth-child(3) input').should('have.value', 'true');
});

When('Click the "Continue" button', () => {
  pricingPage.clickElement(pricingPage.continueButton);
});
Then('How many phone numbers… section is displayed', () => {
  cy.wait(2000).get('h2.cTxamq').should('contain', 'How many phone numbers do you use?');
});

When('Click "plus" button to add local numbers', () => {
  pricingPage.clickElement(pricingPage.addLocalNumbersButton);
});
Then('110 is entered in the Local Numbers field', () => {
  cy.get(pricingPage.localNumbersInput).should('have.value', '110');
});

When('Click "-" to decrease toll-free Numbers', () => {
  pricingPage.clickElement(pricingPage.decreaseTollFreeNumbersButton);
});
Then('90 is entered in the Toll-free Numbers field', () => {
  cy.get(pricingPage.tollFreeNumbersInput).should('have.value', '90');
});

When('Press the "Continue" button', () => {
  pricingPage.clickElement(pricingPage.continueButton);
});
Then('Adjust your usage… section is displayed', () => {
  cy.get('.cTxamq').should('contain', 'Adjust your usage to calculate savings');
});

When('Click "plus" button in the Receive inbound field', () => {
  pricingPage.clickElement(pricingPage.addInboundButton);
});
Then('4,957 is displayed below the Your saving title', () => {
  cy.get('.NYGAb').should('have.text', '$4,932/ yearif you switch from Twilio');
});
