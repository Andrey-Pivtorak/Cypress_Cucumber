import Base from "./base";
import { mainPage } from "./main.page";

class PartnershipsPage extends Base {

  baseUrl = 'https://telnyx.com/company/partnerships';

  elements = {
    becomePartnerSection: () => cy.get('#become-a-partner'),
    firstNameInput: () => cy.get('#FirstName'),
    lastNameInput: () => cy.get('#LastName'),
    emailInput: () => cy.get('#Email'),
    tellUsInput: () => cy.get('#Form_Additional_Information__c'),
    submitButton: () => cy.get('.mktoButtonRow .mktoButton')
  }

  inputValues = {
    firstName: 'Ivan',
    lastName: "Fedorov",
    email: 'testerlqcompany@gmail.com',
    inquiry: 'This is a test case by Andrii Pivtorak'
  }

  openPartnershipsPage() {
    cy.visit(`${this.baseUrl}`);
    mainPage.elements.cookiePopUp().click();
    cy.url().should('include', '/partnerships');
  }

  scrollBecomePartnerSection() {
    this.scrollElement(this.elements.becomePartnerSection());
  }

  enterFirstNameInput() {
    this.enterInput(this.elements.firstNameInput(), this.inputValues.firstName);
  }

  enterLastNameInput() {
    this.enterInput(this.elements.lastNameInput(), this.inputValues.lastName);
  }

  enterEmail() {
    this.enterInput(this.elements.emailInput(), this.inputValues.email);
  }

  enterUseCaseSelect() {
    cy.get('#Use_Case_Form__c').select('Storage');
  }

  enterTellUsInput() {
    this.enterInput(this.elements.tellUsInput(), this.inputValues.inquiry);
  }

  clickSubmitButton() {
    this.clickElement(this.elements.submitButton());
  }

}

export const partnershipsPage = new PartnershipsPage();
