import Base from "./base";
import { mainPage } from "./main.page";

class CareersPage extends Base {

  baseUrl = 'https://telnyx.com/company/careers';

  elements = {
    mobCoreEngineerLink: () => cy.get('.biJXva > :nth-child(5) a'),
    applyFormTitle: () => cy.get('.heading'),
    applyForm: () => cy.get('#application_form'),

    firstNameInput: () => cy.get('#first_name'),
    lastNameInput: () => cy.get('#last_name'),
    emailInput: () => cy.get('#email'),

    visaSelect: () => cy.get('#s2id_job_application_answers_attributes_2_boolean_value'),
    salaryInput: () => cy.get('#job_application_answers_attributes_3_text_value'),
    citizenSelect: () => cy.get('#s2id_job_application_answers_attributes_4_boolean_value'),
    genderInput: () => cy.get('#s2id_job_application_gender'),
    submitButton: () => cy.get('#submit_app')
  }

  inputValues = {
    firstName: 'Ivan',
    lastName: 'Fedorov',
    email: 'testerlqcompany@gmail.com',
    salary: 'two thousand dollars'
  }

  openCareersPage() {
    cy.visit(`${this.baseUrl}`);
    mainPage.elements.cookiePopUp().click();
    cy.url().should('include', '/careers');
  }

  scrollMobCoreEngineerLink() {
    this.scrollElement(this.elements.mobCoreEngineerLink());
  }

  clickMobCoreEngineerLink() {
    this.clickElement(this.elements.mobCoreEngineerLink());
  }

  scrollApplyFormTitle() {
    this.scrollElement(this.elements.applyFormTitle());
  }

  enterFirstName() {
    this.enterInput(this.elements.firstNameInput(), this.inputValues.firstName);
  }

  enterLastName() {
    this.enterInput(this.elements.lastNameInput(), this.inputValues.lastName);
  }

  enterEmail() {
    this.enterInput(this.elements.emailInput(), this.inputValues.email);
  }

  enterVisaSelect() {
    this.clickElement(this.elements.visaSelect());
    cy.get('#select2List0 > :nth-child(2)').click();
  }

  enterSalary() {
    this.enterInput(this.elements.salaryInput(), this.inputValues.salary);
  }

  enterSponsorSelect() {
    this.clickElement(this.elements.citizenSelect());
    cy.get('#select2List1 > :nth-child(3)').click();
  }

  enterGenderInput() {
    this.clickElement(this.elements.genderInput());
    cy.get('#select2List2 > :nth-child(2)').click();
  }

  scrollToSubmitButton() {
    this.scrollElement(this.elements.submitButton());
  }

  clickSubmitButton() {
    this.clickElement(this.elements.submitButton());
  }

}

export const careersPage = new CareersPage();
