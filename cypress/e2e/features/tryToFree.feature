Feature: Filling the "TryToFree" form

  Scenario: Check "Try to free" form using valid credentials
    Given Visit the website telnyx.com
    When Enter "email" to the form
    And Click the "Try to free button"
    Then The "Create a free account" form is displayed
