import Base from "./base";

class PartnershipsPage extends Base {

  url = 'company/partnerships';

  becomePartnerSection = '#become-a-partner';
  primaryUseCase = '#Use_Case_Form__c';
  tellUsInput = '#Form_Additional_Information__c';
  inquiry = 'This is a test case by Andrii Pivtorak';
  submitButton = '.mktoButtonRow .mktoButton';

  enterUseCaseSelect() {
    cy.get(this.primaryUseCase).select('Storage');
  }

}

export const partnershipsPage = new PartnershipsPage();
