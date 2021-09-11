/// <reference types="Cypress" />
describe('This suite is for drop-down testing', function(){
    it('This is drop-don test case',function(){
        cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option1', 'option3'])
        cy.get('#dropdown-class-example').select('option1').should('have.value', 'option1')
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each((text1, index, collections)=>{
            if(text1.text()==='India')
            {
                text1.click()
            }


        })
        cy.get('#autocomplete').should('have.value', 'India')

    })

})