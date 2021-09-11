// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//this command to add product in cart
import Shoppage from '../integration/POM/Shoppage'

Cypress.Commands.add('selectProduct', (productName) => { 
    const shoppage=new Shoppage()
    shoppage.getProductName().each((product, index,collection)=>{
        if(product.text().includes(productName))
        {   cy.log(product.text())
            shoppage.getAddbutton().eq(index).click()
        }
    }) 
})


//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
