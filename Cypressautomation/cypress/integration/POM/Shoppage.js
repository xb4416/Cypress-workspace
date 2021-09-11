/// <reference types="Cypress" />
class Shoppage
{
    getProductName()
    {
        return  cy.get("h4.card-title")
    }
    getAddbutton()
    {
        return cy.get('.btn.btn-info')
    }
    getCheckouttButton()
    {
        return cy.get('.nav-link.btn.btn-primary')
    }
    checkout()
    {
        return cy.get("button[class*='btn-success']")
    }
    getProductPrice()
    {
        return cy.get('tr td:nth-child(4) strong')
    }
    getProductTotal()
    {
        return cy.get('tr td:nth-child(5) strong')
    }
    getCountry()
    {
        return cy.get('#country')
    }
    getSuggestions()
    {
        return cy.get('.suggestions > ul > li > a')
    }
    getCheckbox()
    {
        return cy.get('#checkbox2')
    }
    getPurchaseButton()
    {
        return cy.contains('Purchase')
    }
    getSucessMessage()
    {
        return cy.get('div[class*="alert-success"] strong')
    }



}

export default Shoppage
