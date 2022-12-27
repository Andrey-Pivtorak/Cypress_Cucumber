Feature: Sidebar doc links

  Background:
    Given Go developers.telnyx.com

  Scenario: Check the clicability Account link
    When Click the Account link
    Then The Account page is opened

  Scenario: Check the clicability Porting link
    When Click the Porting link
    Then The Porting page is opened

  Scenario: Check the clicability WebRTC link
    When Click the WebRTC link
    Then The WebRTC page is opened

  Scenario: Check the clicability Debugging link
    When Click the Debugging link
    Then The Debugging page is opened
