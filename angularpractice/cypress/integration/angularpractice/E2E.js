/// <reference types="Cypress"/>

import Homepage from "../../support/POM/Homepage"
describe('angularpractice end to end framework test',function(){
    before(function(){
        cy.visit(Cypress.env('url')+'/angularpractice/')
    })

    it('Vearifying the homepage of data and functionality',function(){
        const homepage=new Homepage()
        homepage.getName().type('krishankant')
        homepage.getName().should('have.attr','minlength','2')
        homepage.getEmail().type('kksinghg.kksingh@gmail.com')
        homepage.getPassword().type('abc123')
        homepage.getGender('Male').should('have.value','Male')
        homepage.getStudent().check().should('be.checked')
        homepage.getEnterpreneur().should('be.disabled')
        homepage.getDOB().type('1988-12-13')
        homepage.getSubmit().click()
        homepage.getMessage().then((message)=>{
            const m1=message.text()
           if(m1.includes('Success! The Form has been submitted successfully!'))
           {
               cy.log('Test Passed')
           }
            //var newmessge=m1.split(".")
            //newmessge[0].should('contain','Success! The Form has been submitted successfully!')
        })

    })
})