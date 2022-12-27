Feature: Data and Privacy documents

  Scenario: Check displaying data & privacy information
    Given Visit privacy page
    When Click the Telnyx Product Updates link
    Then The Telnyx Product Updates information is displayed

    When Scroll to the Data & Privacy title
    Then The Data & Privacy title is displayed

    When Click the GDPR Frequently Asked... link
    Then The GDPR Frequently Asked... information is displsyed

    When Click the Data Transfer Impact... link
    Then The Data Transfer Impact... information is displsyed
