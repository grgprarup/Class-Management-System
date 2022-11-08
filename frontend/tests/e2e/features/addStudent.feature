Feature: add student
    As a Admin
    I want to register student
    so that student can be enrolled


Scenario: add student  
    Given Admin has been logged in with email "admin@example.com" and password "admin" using webUI
    And Admin has opened Add Student Form
    When Admin adds the required data for student 
    | srn | 12348 |
    | first_name | subash |
    | last_name | sharma |
    | gender | male |
    | dob | 1800/12/12 |
    | phone | 9869644040 |
    | address | lamachaur |
    | student_class | 1 |
    | student_section | A |
    | email | subashsharma2628@gmail.com |
    | username | subash2628 |
    
    Then Success message "student added successfully" should be visible