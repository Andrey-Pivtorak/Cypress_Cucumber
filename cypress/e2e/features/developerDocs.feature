Feature: Developers page documentation

  Background:
    Given Visit the site developers.telnyx.com

  Scenario: Check documentation the "Messaging" page
    When  Click the Messaging product
    Then The Messaging product page is opened

  # Scenario: Check documentation the "Sip Trunking" page
    When Click the Sip Trunking product
    Then The Sip Trunking product page is opened
