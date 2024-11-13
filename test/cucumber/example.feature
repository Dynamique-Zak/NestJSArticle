Feature: Article service

  Scenario: Get all articles
    Given the service is initialized
    When I call the "getAll" method
    Then the response should have code "200"
    And the response should have a message "La liste des articles a été récupérés avec succès"
    And the response data should have 3 entry