import Base from "./base";

class MainPage extends Base {

  baseUrl = 'https://telnyx.com/';

  elements = {
    cookiePopUp: () => cy.get('.jRrWoh'),
    emailInput: () => cy.get('.eZNiRr'),
    tryToFreeButton: () => cy.get('.leuQWr .eKznVb'),
    replicantStoryTitle: () => cy.get('.bBhpnW > :nth-child(3) > div'),
    replicantStoryLink: () => cy.get('.bBhpnW > :nth-child(3) > a'),


    // tollFreeInput: () => cy.get('#toll-free-numbers'),
    // programmableVoiceInput: () => cy.get('#no'),
    // compareCostsColumnTitle: () => cy.get('div.spZHp'),
    // exploreButton: () => cy.get('.cNyeyR > .eKznVb > .hBNXWZ'),
    // signUpButton: () => cy.get('.hhCIhu a[href="/sign-up"]'),
    // loginButton: () => cy.get('.biNvWx :nth-child(4)'),
    // talkExpertButton: () => cy.get('.byuCMl'),

    // menuHeader: () => cy.get('.lpsuoP ~ .hhCIhu'),
    // subMenuHeader: () => cy.get('//span[contains(text(),"Company")]/../following-sibling::div')

  }

  inputValues = {
    email: 'autotesterlqc@outlook.com',
    password: '12345@!AQa23'
  }

  openMainPage() {
    cy.visit(`${this.baseUrl}`);
    this.elements.cookiePopUp().click();
    cy.title().should('include', 'Telnyx | Communication APIs');
  }

  enterEmail() {
    this.scrollElement(this.elements.emailInput());
    this.enterInput(this.elements.emailInput(), this.inputValues.email);
  }

  clickTryToFreeButton() {
    this.clickElement(this.elements.tryToFreeButton());
  }

  clickReplicantStoryLink() {
    this.clickElement(this.elements.replicantStoryLink());
  }



}

export const mainPage = new MainPage();
