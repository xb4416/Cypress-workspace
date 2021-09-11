/// <reference types="Cypress" />
describe('test suite for the mousehover handling',function(){
    it('This testcase for mousehover handling', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //this step will find invisible elemet using show jquesy method
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top')
        //this step will find invisible elemet withot mousehover
        cy.contains('Reload').click({force :true})
    })
})