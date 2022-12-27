Feature: Forgot password

  Scenario: Check "forgot your password" on login page using valid credentials
    Given Visit login page
    When Click the forgot your password link
    Then The Password Reset form is opened

    When Enter email
    Then The email is entered

    When Click the Reset password button
    Then The message We have accepted... is displayed
