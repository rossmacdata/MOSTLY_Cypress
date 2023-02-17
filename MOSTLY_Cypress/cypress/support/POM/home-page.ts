class HomePage 

{
  checkPageVisible()
    {
      return cy.contains('Create safe, accurate, relevant, insightful synthetic data that helps teams collaborate and innovate towards a smarter and fairer future.')
    }
  
  getPlatformBookmark()
    {
      return cy.get('.oxy-mega-dropdown_link-text').contains('Platform')
    }
  
  getSyntheticDataBookmark()
    {
      return cy.get('.oxy-mega-dropdown_link-text').contains('Synthetic Data')
    }

  getResourcesBookmark()
    {
      return cy.get('.oxy-mega-dropdown_link-text').contains('Resources')
    }

  getCompanyBookmark()
    {
      return cy.get('.oxy-mega-dropdown_link-text').contains('Company')
    }
  
  getCompanyBookmarkHover()
    {
      return cy.get('oxy-mega-dropdown_icon')
    }

  getSearchIcon()
    {
      return cy.get('.oxy-header-search_open-icon')
    }

  getSearchField()
    {
      return cy.get('.oxy-header-search_search-field')
    }

  getPrivacyAccept()
    {
      return cy.get('._brlbs-accept').contains('ACCEPT').should('be.visible');
    }
    
  getSearchError()
    {
      return cy.get('#headline-274-1315').contains('Sorry, no results for:')
    }
    
  getSearchTerm(term)
    {
      return cy.get('.inner').contains(term)
    }

  getContactLink()
    {
      return cy.get('[href="https://mostly.ai/contact/"]')
    }

}

export default HomePage;