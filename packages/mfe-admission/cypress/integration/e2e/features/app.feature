Feature: Admission form setup page loading

  Scenario Outline: Verify the visibility of admission setup tabs
    When I navigate to the admission setup form page
    Then the page should load without errors
    Then I should see the tab "<tab_name>"

  Examples:
    | tab_name              |
    | Admission Dashboard   |
    | Application Setup     |