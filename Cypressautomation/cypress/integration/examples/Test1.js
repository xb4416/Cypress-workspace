/// <reference types="Cypress"/>

const { should } = require("chai")

describe('My first test suite',function() {

    it('My 1st test case',function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(3000)
        cy.get('.product:visible').should('have.length',4)
        cy.get('.products').find('.product').should('have.length',4)
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click() 
 

    })
   


})