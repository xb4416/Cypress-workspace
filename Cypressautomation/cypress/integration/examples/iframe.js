/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />

import 'cypress-iframe'
describe('Iframe testing suite',function() {
    it('testcase to habdle iframe', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href*="mentorship"]').eq(0).click
        cy.iframe().find('div[class*="courses-block"]').should('have.length',12)
        cy.iframe().find('div[class*="courses-block"]').eq(1).contains('Cypress-Modern')

    })
})