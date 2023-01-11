import Base from "./base";

class CareersPage extends Base {

  url = 'company/careers';

  mobCoreEngineerLink = '.biJXva > :nth-child(4) a';
  applyFormTitle = '.heading';
  visaSelect = '#s2id_job_application_answers_attributes_2_boolean_value';
  salaryInput = '#job_application_answers_attributes_3_text_value';
  salary = 'two thousand dollars';
  citizenSelect = '#s2id_job_application_answers_attributes_4_boolean_value';
  genderInput = '#s2id_job_application_gender';
  submitButton = '#submit_app';
  applyingMessage = '#application_confirmation';

  enterVisaSelect() {
    this.clickElement(this.visaSelect);
    cy.get('#select2List0 > :nth-child(2)').click();
  }

  enterCitizenSelect() {
    this.clickElement(this.citizenSelect);
    cy.get('#select2List1 > :nth-child(3)').click();
  }

  enterGenderInput() {
    this.clickElement(this.genderInput);
    cy.get('#select2List2 > :nth-child(2)').click();
  }

}

export const careersPage = new CareersPage();
