import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { mainPage } from "@pages/main.page";
import { replicantPage } from "@pages/replicant.page";

Given('Visit the site telnyx.com', () => {
  mainPage.openMainPage();
});

When('Click the replicant video player', () => {
  mainPage.clickReplicantStoryLink();
  replicantPage.clickVideoPlayer();
})

Then('Video is started playing', () => {
  replicantPage.checkVideoPlaying();
})
