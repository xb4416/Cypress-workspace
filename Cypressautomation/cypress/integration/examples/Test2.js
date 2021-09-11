/// <reference types="Cypress"/>
describe('This my second test suite ',function (){

    it('finding the vegitable from list and click on "Add to cart button"',function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.products').find('.product').should('have.length',4)
        cy.get('.products').find('.product').eq(2).find('button[type="button"]').click()
        cy.get('.products').find('.product').each(($a, index, $list) => {
            const testveg=$a.find('h4.product-name').text()
            if(testveg.includes('Cashews'))
            {
                $a.find('button[type="button"]').click()
            }

            })
           
        cy.get('.brand.greenLogo').then((text)=>{

            cy.log(text.text())
        })
        cy.get('.brand.greenLogo').should('have.text', 'GREENKART')
        cy.get('.products').as('products')
        cy.get('@products').find('.product').find('.product-name').each((pname , index, list)=> {
            if(pname.text()=='Capsicum')
            {
                cy.log(pname.text())

            }
            
        })
})


})