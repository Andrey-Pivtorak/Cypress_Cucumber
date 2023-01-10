Feature: Developers client libraries

  Scenario: Check the client libraries choosing
    Given Visit developers libraries page
    When Scroll to the "client libraries" section
    Then The  "client libraries" section is displayed

    When Click the "Ruby" icon
    Then The "gem install telnyx" code is displayed

    When Click the "Node" icon
    Then The "npm install telnyx" code is displayed

    When Click the "Java" icon
    Then The "Java" code is displayed

    When Click the ".NET" icon
    Then The "nuget install Telnyx.net" code is displayed
