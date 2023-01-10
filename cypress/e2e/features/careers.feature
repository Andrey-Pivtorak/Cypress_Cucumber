Feature: Careers opportunities

  Scenario: Fill out a job application using valid credentials
    Given Visit "careers" page
    When Scroll to the "Mobile Core Engineer" link
    Then The "Mobile Core Engineer" link is displayed

    When Click the "Mobile Core Engineer" link
    Then The "Mobile Core Engineer" job application is opened

    When Scroll to the "Apply for this Job" form
    Then The "Apply for this Job" form is displayed

    When A user enter correct credentials, check entered data
      | id          | value                     |
      | #first_name | Ivan                      |
      | #last_name  | Fedorov                   |
      | #email      | testerlqcompany@gmail.com |
      | #phone      | +380594785328             |

    When Enter "Yes" in the visa sponsorship field
    Then "Yes" is entered in the visa sponsorship field

    When Enter "two thousand dollars" in the salary field
    Then "Two thousand dollars" is entered in the salary field

    When Enter "No" in the countries field
    Then "No" is entered in the countries field

    When Enter "Male" in the Gender field
    Then "Male" is entered in the Gender field

    When Scroll to the "Submit" Application button
    And Click the  "Submit" Application button

    Then The "Thank you for applying" message is displayed
