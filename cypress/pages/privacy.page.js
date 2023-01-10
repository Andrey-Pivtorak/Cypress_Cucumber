import Base from "./base";

class PrivacyPage extends Base {

  url = 'company/data-privacy#dtia';

  dataPrivacyTitle = 'h1.eCGKsC';
  productUpdatesLink = 'ul a[href="#productupdates"]';
  productUpdatesTitle = '#productupdates h2';
  gdprLink = 'ul a[href="#faq"]';
  gdprTitle = '#faq h2';
  dataTransferLink = 'ul a[href="#dtia"]';
  dataTransferTitle = '#dtia h2';

}

export const privacyPage = new PrivacyPage();
