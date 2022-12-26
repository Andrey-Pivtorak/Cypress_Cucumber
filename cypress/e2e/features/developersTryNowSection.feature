Feature: "Try Now" section of developers page

  Scenario: Check "Try Now" section of developers page
    Given The site developers.telnyx.com is opened
    When Scroll to the Try Now tab list
    Then The Try Now tab list is displayed

    When Click the Search Number tab
    Then The Search Number tab content is displayed

    When Click the Order Number tab
    Then The Order Number tab content is displayed

    When Click the Send Message tab
    Then The Send Message tab content is displayed
