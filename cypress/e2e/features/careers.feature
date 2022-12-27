Feature: Careers opportunities

  Scenario: Fill out a job application using valid credentials
    Given Visit careers page
    When Scroll to the Mobile Core Engineer link
    Then The Mobile Core Engineer link is displayed

    When Click the Mobile Core Engineer link
    Then The Mobile Core Engineer job application is opened

    When Scroll to the Apply for this Job form
    Then The Apply for this Job form is displayed

    When Enter First Name
    Then The First Name is entered

    When Enter Last Name
    Then The Last Name is entered

    When Enter Email
    Then The Email is entered

    When Enter Yes in the visa sponsorship field
    Then Yes is entered in the visa sponsorship field

    # When
    # Then

    # When
    # Then

    # When
    # Then

    # When
    # Then

    # When
    # Then
