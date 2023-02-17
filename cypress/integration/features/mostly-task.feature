Feature: MOSTLY automated testing tasks
  # This Feature will open the MOSTLY.AI homepage, conduct a search and fill in a form
  # Background used when we have the same step repeated in the Given statement
     Background: I open the application

# Test1 - Step 1 
  Scenario: Verify header bookmark links are visible (Platform, Synthetic Data, Resources and Company)
      Then the header bookmark elements are visible on the homepage

# Test2 - Step 2
  Scenario: Erroneous search for 'Sythetic' conducted
      When I click the search icon
      And the search field is visible on the page
      And I input term to the search field
      Then the expected no results error is presented

# Test3 - Step 3
  Scenario: Contact form filled and marketing checkbox checked
      When I click the Contact option from the Company menu
      And I fill in the fields on the contact page
      And I click the marketing checkbox
      Then I hover over the send message button