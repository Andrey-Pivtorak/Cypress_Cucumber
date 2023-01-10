import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { mainPage } from "@pages/main.page";
import { replicantPage } from "@pages/replicant.page";

Given('Visit the site telnyx.com', () => {
  mainPage.openPage('/');
  mainPage.closePopUpButton();
});

When('Scroll to the "Read Customer Story" link', () => {
  mainPage.scrollToElement(mainPage.replicantCustomerStoryLink);
})
When('Click the "Read Customer Story" link', () => {
  mainPage.clickElement(mainPage.replicantCustomerStoryLink);
})
Then('The "replicant" page is opened', () => {
  cy.url().should('include', 'customer-stories/replicant');
})

When('Scroll to the video player', () => {
  replicantPage.scrollToElement(replicantPage.iframeWrapper);
})
When('Click the video player', () => {
  replicantPage.clickVideoPlayer();
})
Then('Video is started playing', () => {
  replicantPage.checkVideoPlaying();
})
