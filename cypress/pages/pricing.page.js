import Base from "./base";

class PricingPage extends Base {

  url = 'twilio-pricing-calculator';

  whichProductsTitle = 'header.fbrtSd';
  voiceApiButton = '.fkuRxe > :nth-child(3)';
  continueButton = 'button.cSsJix';
  addLocalNumbersButton = '.jVrZQH > :nth-child(1) input ~ button';
  localNumbersInput = '#local-numbers';
  decreaseTollFreeNumbersButton = '//input[@id="toll-free-numbers"]/preceding-sibling::button';
  tollFreeNumbersInput = '#toll-free-numbers';
  addInboundButton = '#receive-inbound-calls-with-call-control ~ button';

}

export const pricingPage = new PricingPage();

