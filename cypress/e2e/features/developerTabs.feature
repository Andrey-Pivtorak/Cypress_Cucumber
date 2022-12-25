Feature: Developers page checking

  Scenario: Check tabs "developers" page
    Given Open the site developers.telnyx.com
    When  Click the API v1 tab
    Then The Telnyx API V1 Documentation is displayed

    When Click the API v2 tab
    Then The Telnyx API Documentation is displayed
