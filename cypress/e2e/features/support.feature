Feature: Support centre sections

  Background:
    Given Visit the website support.telnyx.com

  Scenario: Check "Getting Started" section for clicability and displaying
    When Click the Getting Started section
    Then The Getting Started page is opened

  Scenario: Check "Tours and Videos" section for clicability and displaying
    When Click the Tours and Videos section
    Then The Tours and Videos page is opened

  Scenario: Check "Reference Material" section for clicability and displaying
    When Click the Reference Material section
    Then The Reference Material page is opened
