export default class Base {

  cookiePopUpButton = '.jRrWoh';

  openPage(restUrl) {
    cy.visit('/' + restUrl);
    cy.url().should('include', restUrl);
  }

  closePopUpButton() {
    cy.get(this.cookiePopUpButton).click();
  }

  scrollToElement(selector) {
    let getSelectorCommand = () => cy.get(selector);
    if (selector.includes('//')) {
      getSelectorCommand = () => cy.xpath(selector);
    }

    getSelectorCommand()
      .scrollIntoView({ easing: 'linear' })
      .should('be.visible');
  }

  clickElement(selector) {
    let getSelectorCommand = () => cy.get(selector);
    if (selector.includes('//')) {
      getSelectorCommand = () => cy.xpath(selector);
    }

    getSelectorCommand()
        .scrollIntoView()
        .should('be.visible')
        .click();
  }

  clickNoTargetElement(selector) {
    let getSelectorCommand = () => cy.get(selector);
    if (selector.includes('//')) {
      getSelectorCommand = () => cy.xpath(selector);
    }

    getSelectorCommand()
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .invoke('attr','target','_self')
      .click()
    }

  enterInput(selector, inputValue) {
    let getSelectorCommand = () => cy.get(selector);
    if (selector.includes('//')) {
      getSelectorCommand = () => cy.xpath(selector);
    }

    getSelectorCommand()
      .scrollIntoView()
      .type(inputValue)
      .should('have.value', inputValue);
  }

}

