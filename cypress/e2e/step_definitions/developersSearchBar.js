import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { developersPage } from "@pages/developers.page";

Given('Visit the website telnyx.com', () => {
  developersPage.openDevelopersPage();
});

When('Enter email to the form', () => {

});
Then('The Create a free account form is displayed', () => {

});

// When('Enter email to the form', () => {

// });
// Then('The Create a free account form is displayed', () => {

// });

// When('Enter email to the form', () => {

// });
// Then('The Create a free account form is displayed', () => {

// });
