Feature:Become a Telnyx Partner

  Scenario: Fill out the "Become a Telnyx Partner" form using valid credentials
    Given Visit partnerships page
    When Scroll to the Become a Telnyx Partner title
    Then The Become a Telnyx Partner title is displayed

    When Enter FirstName
    Then The FirstName is entered

    When Enter LastName
    Then The LastName is entered

    When Enter partners Email
    Then The Partners Email is entered

    When Set Storage in the Primary Use Case select
    Then The Storage value is selected

    When Enter This is a test case by Andrii Pivtorak" text in the Tell us more… field
    Then The This is a test case by Andrii Pivtorak text is entered

    When Click the Submit button
    Then The Partners page is opened
