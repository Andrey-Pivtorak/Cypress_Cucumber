Feature: Support centre links

  Background:
    Given Visit the website support.telnyx.com/en, scroll to footer

  Scenario: Check the clickability of "telnyx" footer link
    When Click the telnyx.com link
    Then The telnyx.com page is opened

  Scenario: Check the clickability of "support24/7" footer link
    When Click the support 24/7 link
    Then The Talk to an expert page is opened

  Scenario: Check the clickability of "facebook" footer link
    When Click the FaceBook icon link
    Then The Telnyx FaceBook page is opened

  Scenario: Check the clickability of "linkedIn" footer link
    When Click the LinkedIn icon link
    Then The Telnyx LinkedIn page is opened
