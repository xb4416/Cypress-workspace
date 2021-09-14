class Homepage
{
    getName()
    {
        return cy.get("input[name='name']:nth-child(2)")
    }
    getEmail()
    {
        return cy.get("input[name='email']")
    }
    getPassword()
    {
        return cy.get("#exampleInputPassword1")
    }
    getGender()
    {
        return cy.get('select')
    }
    getStudent()
    {
        return cy.get("#inlineRadio1")
    }
    getEnterpreneur()
    {
        return cy.get('#inlineRadio3')
    }
    getDOB()
    {
        return cy.get('input[name="bday"]')
    }
    getBinding()
    {
        return cy.get("input[name='name']:first-child")
    }
    getSubmit()
    {
        return cy.get("input[type$='submit']")
    }
    getMessage()
    {
        return cy.get('div[class*="alert"]')
    }
    getShopButton()   
    {
        return cy.get("a[href*='/angularpractice/shop']")
    }

}

 
export default Homepage