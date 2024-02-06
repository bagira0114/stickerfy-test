describe('Add multiple items to the cart', () =>{
    it('Adds multiple same happy items to the cart', () => {
        cy.visit('http://localhost:3000/');
        cy.get('body > div > div:nth-child(2) > div:nth-child(1) > div > div > div > a').click();
        cy.get('body > div > div:nth-child(2) > div:nth-child(1) > div > div > div > a').click();
        cy.get('.badge').should('have.text', 2);
    })
})