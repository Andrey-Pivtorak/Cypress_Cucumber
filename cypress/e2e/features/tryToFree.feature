Feature: tryToFree form

  Scenario: Check "Try to free" form using valid credentials
    Given Visit the website telnyx.com
    When Enter email to the form
    Then The Create a free account form is displayed
