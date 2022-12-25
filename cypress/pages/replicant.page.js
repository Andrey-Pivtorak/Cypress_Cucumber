import Base from "./base";
import 'cypress-iframe';

class ReplicantPage extends Base {

  elements = {
    iframeWrapper: () => cy.get('.fIjqZs > :nth-child(4)'),
    videoIframe: () => cy.iframe('.videoWrapper > iframe'),
    videoTarget: () => cy.get('.vp-target')
  }

  clickVideoPlayer() {
    this.scrollElement(this.elements.iframeWrapper());
    this.elements.videoIframe().find('.vp-target').should('be.visible').click();
  }

  checkVideoPlaying() {
    this.elements.videoIframe().find('.vp-target').should('have.class', 'hidden');
  }
}

export const replicantPage = new ReplicantPage();
