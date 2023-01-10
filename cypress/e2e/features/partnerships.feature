Feature:Become a Telnyx Partner

  Scenario: Fill out the "Become a Telnyx Partner" form using valid credentials
    Given Visit partnerships page
    When Scroll to the "Become a Telnyx Partner" title
    Then The "Become a Telnyx Partner" title is displayed

    When A user enter valid credentials, check entered data
      | id         | value                     |
      | #FirstName | Ivan                      |
      | #LastName  | Fedorov                   |
      | #Email     | testerlqcompany@gmail.com |

    When Set "Storage" in the Primary Use Case select
    Then The "Storage" value is selected

    When Enter "This is a test case by Andrii Pivtorak" text in the "Tell us more…" field
    Then The "This is a test case by Andrii Pivtorak" text is entered

    When Click the "Submit" button
    Then The "Partners" page is opened
