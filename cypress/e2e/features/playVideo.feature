Feature: Playnig the customer stories video

  Scenario: Check playnig the customer stories video
    Given Visit the site telnyx.com
    When Scroll to the "Read Customer Story" link
    And Click the "Read Customer Story" link
    Then The "replicant" page is opened

    When Scroll to the video player
    And Click the video player
    Then Video is started playing
