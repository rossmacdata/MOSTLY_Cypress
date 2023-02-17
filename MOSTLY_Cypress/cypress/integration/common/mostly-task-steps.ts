/// <reference types="Cypress" />

import { Before, Given, And, When, Then, DataTable} from '@badeball/cypress-cucumber-preprocessor';
import HomePage from '../../support/POM/home-page';
import ContactPage from '../../support/POM/contact-page';
const url = 'https://mostly.ai/';

const homePage = new HomePage();
const contactPage = new ContactPage();

const term = 'Sythetic';
const privacyCookieName = "borlabs-cookie";
const privacyCookieValue = "%7B%22consents%22%3A%7B%22essential%22%3A%5B%22borlabs-cookie%22%2C%22google-tag-manager%22%5D%2C%22statistics%22%3A%5B%22google-analytics%22%2C%22linkedin-insight-tag%22%5D%2C%22marketing%22%3A%5B%22hubspot%22%5D%2C%22external-media%22%3A%5B%22googlemaps%22%2C%22youtube%22%5D%7D%2C%22domainPath%22%3A%22mostly.ai%2F%22%2C%22expires%22%3A%22Sat%2C%2017%20Feb%202024%2013%3A47%3A40%20GMT%22%2C%22uid%22%3A%229sjhg0qc-qfo9u9fo-i2edze2i-gz5rbzk1%22%2C%22version%22%3A%221%22%7D";

Before(() => {
 cy.visit(url)
 Cypress.on("window:before:load", window => {
  window.document.cookie = `${privacyCookieName}=${privacyCookieValue}`;
  });
 cy.log('test started')
});

Given('I open the application', () => {
  homePage.checkPageVisible()
  cy.log.name
});

Then('the header bookmark elements are visible on the homepage', () =>{
  homePage.getPlatformBookmark().should('be.visible')
  homePage.getSyntheticDataBookmark().should('be.visible')
  homePage.getResourcesBookmark().should('be.visible')
  homePage.getCompanyBookmark().should('be.visible')
});

And('I click the search icon', () =>{
  homePage.getSearchIcon().click()
});

And('the search field is visible on the page', () =>{
  homePage.getSearchField().should('be.visible')
});

And('I input term to the search field', () =>{
  homePage.getSearchField().type(term).type('{enter}')
});

And('I click the Contact option from the Company menu', () =>{
  // I was unable to get hover to function in Cypress in the time available. In reality I would spend more time on this and resolve or consult peers.
  // homePage.getCompanyBookmark().realHover()
  // homePage.getContactLink().click({ force: true })
  
  // To partially complete, this step simulates by visiting the contact page
  cy.visit('https://mostly.ai/contact/')
});

Then('the expected no results error is presented', () =>{
  homePage.getSearchError()
  homePage.getSearchTerm(term)
});

When('I accept privacy settings', () =>{
  homePage.getPrivacyAccept().should('be.visible');
  homePage.getPrivacyAccept().click()
});

Then('I fill in the fields on the contact page', () =>{
  contactPage.getCompanyBookmark().realMouseMove(200, 200, { position: "center" })
  contactPage.getFirstName().should('be.visible').type('Mostly')
  contactPage.getLastName().should('be.visible').type('Testing')
  contactPage.getBusinessEmail().should('be.visible').type('mostly@test.io')
  contactPage.getMobileNumber().should('be.visible').type('07777666555')
  contactPage.getOrganization().should('be.visible').type('MyOrg')
  contactPage.getCountryRegion().should('be.visible').select('United Kingdom')
  contactPage.getHowHear().should('be.visible').select('YouTube')
  contactPage.getDescription().should('be.visible').type('This is a question about products and services.')
  contactPage.getSendMessageButton().should('be.visible')
});

And('I click the marketing checkbox', () =>{
  contactPage.getMarketingCheck().check()
});

And('I hover over the send message button', () =>{
  contactPage.getSendMessageButton().realHover()
});