Feature: Login
# Scenario outline is used when we want to test with multiple test data.
Scenario Outline: Validate login for multiple users
Given open the browser and enter the url
When enter username as <username>
And enter password as <password>
And click on submit
Then Login should be successful

Examples:
    | username | password |
    | ADmin  | Admin123  |
    | admin  | passss    |
    | Admin  | admin123  | 