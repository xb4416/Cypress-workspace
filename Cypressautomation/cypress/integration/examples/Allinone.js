/// <reference types="Cypress" />
describe('Test all thing in once suite', function(){
    it('Verify the Checkbox of functionality', function(){
       cy.visit("https://rahulshettyacademy.com/AutomationPractice/") 
       cy.get('#checkBoxOption2').check('option2').should('be.checked').and('have.value','option2')
       cy.get('#checkBoxOption2').uncheck('option2').should('not.be.checked')
       cy.get('input[type="checkbox"]').check(['option3', 'option1']).should('be.checked')

    })

    it('Verify the radio buttons of functionality', function(){
        cy.get('input[type="radio"]').check('radio2').should('be.checked')
        cy.get('input[type="radio"]').check('radio1').should('be.checked')
        cy.get('input[value="radio3"]').should('not.be.checked')

    })

    it('Verify the auto Suggession  dropdown of functionality', function(){
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each((counrty_value, index, collection)=>{
            const country=counrty_value.text()
            if(country==='India'){
                counrty_value.click()
            }
        })
        cy.get('#autocomplete').should('have.value','India')

    })
    it('Verify the ststic dropdown of functionality', function(){
        cy.get('#dropdown-class-example').select('option2').should('have.value','option2')

    })

    it('Verify the alert handling of functionality', function(){
        cy.get('#name').type('kksingh')
        cy.get('#alertbtn').click()
        cy.on('window:alert', (alert_value)=>{
            expect(alert_value).to.equal('Hello kksingh, share this practice page and share your knowledge')
        })
        cy.get('#confirmbtn').click()
        cy.on('window:confirm', (con_alert)=>{
            expect(con_alert).to.equal('Hello , Are you sure you want to confirm?')
        })

    })

    it('Verify the handling of show/hide button functionality', function(){
        cy.get('#displayed-text').type('23')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#show-textbox').should('be.visible')


    })
    it('Verify the tab switching functionality', function(){
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        cy.url().should('contain', 'rahulshettyacademy')
        cy.go('back')
        cy.url().should('contain', 'AutomationPractice')

    })

    // it('Verify the window switching functionality', function(){
    //     cy.get('#openwindow').then((en)=>{
    //       const url=en.prop('href')
    //       cy.url.should('contain', 'qaclickacademy')

    //     })
        

    //})

    it('Verify to handle web table of functionality', function(){
        cy.get('tr td:nth-child(2)').each((course,index,collection)=>{
            const value=course.text()
            if(value.includes('SoapUI'))
            {
                cy.get('tr td:nth-child(2)').eq(index).next().then((price)=>{
                    const newprice=price.text()
                    expect(newprice).to.equal('35')
                })
            }
        })

    })
})