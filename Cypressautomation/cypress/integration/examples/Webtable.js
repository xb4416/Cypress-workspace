/// <reference types="Cypress" />
describe('This testsuite for the testing Web table',function(){
    it('This testcase is for testing the webtable',function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('tr td:nth-child(2)').each((text, index, collection)=> {
            const varible=text.text()
            if(varible.includes("Python"))
            {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(prize){
                    const pz=prize.text()
                    expect(pz).to.equal('25')
                })
            }
        })

    })

})