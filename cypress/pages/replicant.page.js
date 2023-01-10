import Base from "./base";
import 'cypress-iframe';

class ReplicantPage extends Base {

  iframeWrapper = '.fIjqZs > :nth-child(4)';
  videoIframe = '.videoWrapper > iframe';
  videoTarget = '.vp-target';

  clickVideoPlayer() {
    cy.iframe(this.videoIframe).find(this.videoTarget).should('be.visible').click();
  }

  checkVideoPlaying() {
    cy.iframe(this.videoIframe).find(this.videoTarget).should('have.class', 'hidden');
  }
}

export const replicantPage = new ReplicantPage();
