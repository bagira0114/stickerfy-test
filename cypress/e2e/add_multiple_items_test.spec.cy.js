describe('Add multiple items to the cart', () =>{
    it('Adds multiple same happy items to the cart', () => {
        cy.visit('http://localhost:3000/');
        cy.get('body > div > div:nth-child(2) > div:nth-child(1) > div > div > div > a').click();
        cy.get('body > div > div:nth-child(2) > div:nth-child(1) > div > div > div > a').click();
        cy.get('.badge').should('have.text', 2);
    })
    it('Adds multiple same angry items to the cart', () => {
        cy.visit('http://localhost:3000/');
        cy.get(':nth-child(2) > .thumbnail > .caption > .clearfix > .btn').click();
        cy.get(':nth-child(2) > .thumbnail > .caption > .clearfix > .btn').click();
        cy.get('.badge').should('have.text', 2);
    })
    it('Adds multiple same sad items to the cart', () => {
        cy.visit('http://localhost:3000/');
        cy.get(':nth-child(3) > .thumbnail > .caption > .clearfix > .btn').click();
        cy.get(':nth-child(3) > .thumbnail > .caption > .clearfix > .btn').click();
        cy.get('.badge').should('have.text', 2);
    })
})