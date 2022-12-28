  Feature: Pricing Calculator

  Scenario: Check the "pricing calculator" working
    Given Visit pricing page
    When Scroll to the Which products... section
    Then The Which products... section is displayed

    When Click the Voice API button
    Then The Voice API button is checked

    When Click the Continue button
    Then How many phone numbers… section is displayed

    When Click + to add local numbers
    Then 110 is entered in the Local Numbers field

    When Click - to decrease toll-free Numbers
    Then 90 is entered in the Toll-free Numbers field

    When Press the Continue button
    Then Adjust your usage… section is displayed

    When Click the + button in the Receive inbound field
    Then $4,957... is displayed below the Your saving title
