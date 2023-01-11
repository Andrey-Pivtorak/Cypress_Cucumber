export default class Base {

  cookiePopUpButton = '.jRrWoh';

  openPage(restUrl) {
    cy.visit('/' + restUrl);
    cy.url().should('include', restUrl);
  }

  closePopUpButton() {
    cy.get(this.cookiePopUpButton).click();
  }

  locator(selector) {
    let getSelectorCommand = () => cy.get(selector);
    if (selector.includes('//')) {
      getSelectorCommand = () => cy.xpath(selector);
    }

    return getSelectorCommand();
  }

  scrollToElement(selector) {
    this.locator(selector)
      .scrollIntoView({ easing: 'linear' })
      .should('be.visible');
  }

  clickElement(selector) {
    this.locator(selector)
        .scrollIntoView()
        .should('be.visible')
        .click();
  }

  clickNoTargetElement(selector) {
    this.locator(selector)
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .invoke('attr','target','_self')
      .click()
    }

  enterInput(selector, inputValue) {
    this.locator(selector)
      .scrollIntoView()
      .type(inputValue)
      .should('have.value', inputValue);
  }

}

