/// <reference types="Cypress" />
import { expect } from 'chai'
import Homepage from '../POM/Homepage'
import Shoppage from '../POM/Shoppage'

describe('Angular website testing suit', function(){
    before(function(){
        cy.fixture('example').then((data)=>{
            this.data=data
        })
    })

    it('This test case is to test homepage',function(){
        const homepage=new Homepage()
        const shoppage=new Shoppage()
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        homepage.getName().type(this.data.name)
        homepage.getEmail().type(this.data.email)
        homepage.getPassword().type(this.data.password)
        homepage.getGender().select(this.data.gender)
        homepage.getStudent().click().should('be.checked','Student')
        homepage.getEnterpreneur().should('be.disabled')
        homepage.getDOB().type(this.data.dob)
        homepage.getBinding().should('have.value',this.data.name)
        homepage.getSubmit().click()
        homepage.getMessage().then((message)=>
        {
                const text=message.text()
                cy.log(text) 
                if(text.includes('submitted successfully!'))  
                {
                    cy.log('testcase passed')
                }  
            
        })
        homepage.getName().should('have.attr','minlength','2')
        homepage.getShopButton().click()
        //cy.selectProduct('Nokia Edge')
        //second way using arry passing 
        //in js for ittrating the array we use foreach
        this.data.productName.forEach((element)=>{
            cy.selectProduct(element)
        })
        var sum=0
        shoppage.getCheckouttButton().click()
        shoppage.getProductPrice().each((value, index, collection)=>{
            const ammount=value.text()
            var result=ammount.split(" ")
            result=result[1].trim()
            sum=Number(sum)+Number(result)
           
        }).then(function(){
            cy.log(sum)
        })
        var newvaalue=0
        shoppage.getProductTotal().then((total)=>{
            const value=total.text()
            newvaalue=value.split(" ")
            newvaalue=newvaalue[1].trim()
            expect(Number(newvaalue)).to.equal(sum)
        }).then(function(){
            cy.log(newvaalue)
        })
        shoppage.checkout().click()
        shoppage.getCountry().type(this.data.country)
        shoppage.getSuggestions().click()
        shoppage.getCheckbox().check({force: true})
        shoppage.getPurchaseButton().click()
        shoppage.getSucessMessage().should('have.text', 'Success!')
    })
})