Feature: login user
    As a Admin
    I want to login
    so that I can manage the student
    
    Background: 
        Given Admin has been redirected to login page
        
    Scenario: Both Credential Correct
        When Admin logs in with email "admin@example.com" and password "admin" using the webUI
        Then Admin should be redirected to dashboard page

    Scenario Outline: invalid Credential 
        When Admin logs in with email "<email>" and password "<password>" using the webUI
        Then Error message "<message>" should be visible 
        Examples: 
            | email                 | password | message |
            | admghin@example.com    | admindfg   |  No active account found with the given credentials |
            | admin@example.com     | subedi    | No active account found with the given credentials |
            | apil@example.com      | admin     | No active account found with the given credentials |
    
