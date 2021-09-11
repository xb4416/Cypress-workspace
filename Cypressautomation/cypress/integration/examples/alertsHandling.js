/// <reference types="Cypress" />
describe('This testsuite for the alert handleing of thin',function(){
    it('This testcase is for handeling alerts',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()
        cy.on('window:alert',(str)=>{
            //mocha arresction to compare two string
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm',(str1)=>{
        expect(str1).to.equal('Hello , Are you sure you want to confirm?')
        })
    })
    it('handling child window in same tab', function(){
        //using this we can open new tab of page on same page
        cy.get('#opentab').invoke('removeAttr','target').click()
        //to verify you are on correct url or not 
        cy.url().should('include', 'rahulshettyacademy')
        //using go() user can rdirect on back forverd
        cy.go('back')
        cy.url().should('have.string', 'https://rahulshettyacademy.com/AutomationPractice/')
    })

})