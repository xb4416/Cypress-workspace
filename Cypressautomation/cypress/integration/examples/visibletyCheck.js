/// <reference types="Cypress" />

describe('This trest suite for the visibility check or uncheck', function(){
    it('This testcase for the visibility check', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
        
    })
    it('Radio button check test case',function(){
        //radio button test
        cy.get("input[value='radio2']").click().should('have.value','radio2')
        cy.get("input[value='radio2']").click().should('be.checked')

    })
})