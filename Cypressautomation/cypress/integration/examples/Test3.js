/// <reference types="Cypress" />

describe('this is my third testsuite',function(){
    it('this is my third testcase',function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.products').as('products')
        cy.get('.search-button').type('ca')
        cy.get('@products').find('.product').each((pname, index, list)=>{
            const veg_name=pname.find('.product-name').text()
            if(veg_name.includes('Cashews'))
            {
                pname.find('button').click()
            }
        })
        cy.get('.cart-icon').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })


})