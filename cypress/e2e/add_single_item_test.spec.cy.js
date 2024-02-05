

describe('Add a single item to the cart', () => {
    it('Adds a happy item to the cart', () => {
        cy.visit('http://localhost:3000/');
        cy.get('body > div > div:nth-child(2) > div:nth-child(1) > div > div > div > a').click();
        cy.get('.badge').should('have.text', 1);
    }
    )

    it('Adds an angry item to the cart', () => {
        cy.visit('http://localhost:3000/');
        cy.get(':nth-child(2) > .thumbnail > .caption > .clearfix > .btn').click();
        cy.get('.badge').should('have.text', 1);
    })

    it('Adds a sad item to the cart', () =>{
        cy.visit('http://localhost:3000/');
        cy.get(':nth-child(3) > .thumbnail > .caption > .clearfix > .btn').click();
        cy.get('.badge').should('have.text', 1);
    })

}
)