class ContactPage

{
  getFirstName()
    {
      return cy.get('#firstname-27854f4c-b840-41f2-b7af-a3c9f512c9e8', { timeout: 60000 })
    }
  
  getLastName()
    {
      return cy.get('#lastname-27854f4c-b840-41f2-b7af-a3c9f512c9e8')
    }

  getBusinessEmail()
    {
      return cy.get('#email-27854f4c-b840-41f2-b7af-a3c9f512c9e8')
    }

  getMobileNumber()
    {
      return cy.get('#mobilephone-27854f4c-b840-41f2-b7af-a3c9f512c9e8')
    }
  
  getOrganization()
    {
      return cy.get('#company-27854f4c-b840-41f2-b7af-a3c9f512c9e8')
    }

  getCountryRegion()
    {
      return cy.get('#country-27854f4c-b840-41f2-b7af-a3c9f512c9e8')
    }

  getHowHear()
    {
      return cy.get('#how_did_you_hear_about_mostly_ai_-27854f4c-b840-41f2-b7af-a3c9f512c9e8')
    }

  getDescription()
    {
      return cy.get('#message-27854f4c-b840-41f2-b7af-a3c9f512c9e8')
    }

  getMarketingCheck()
    {
      return cy.get('[id="LEGAL_CONSENT.subscription_type_5594858-27854f4c-b840-41f2-b7af-a3c9f512c9e8"]')
    }
    
  getSendMessageButton()
    {
      return cy.get('.btn-block')
    }

  getCompanyBookmark()
    {
      return cy.get('.oxy-mega-dropdown_link-text').contains('Company')
    }

}

export default ContactPage;