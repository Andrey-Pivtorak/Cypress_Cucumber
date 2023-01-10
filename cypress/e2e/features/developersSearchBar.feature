Feature: Developers page search bar

  Scenario: Check search bar of "developers" page
    Given Go to the site developers.telnyx.com
    When Click the "Search bar"
    Then The "Search bar" is focused

    When Enter the "JavaScript" request
    Then The "Video Javascript Quickstart" page is opened
