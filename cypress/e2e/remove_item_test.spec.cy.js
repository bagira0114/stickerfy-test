describe('Remove items from cart', () => {
    it('Removes one single happy item from cart', () => {
        cy.visit('http://localhost:3000/');
        cy.get('body > div > div:nth-child(2) > div:nth-child(1) > div > div > div > a').click();
        cy.get('#cart').click();
        cy.get('#products > ul > li > div > button').click();
        cy.get('#products > ul > li > div > ul > li:nth-child(1) > a').click();
        cy.get('#checkout').should('not.exist');

    })
    it('Removes one single angry item from cart', () => {
        cy.visit('http://localhost:3000/');
        cy.get(':nth-child(2) > .thumbnail > .caption > .clearfix > .btn').click();
        cy.get('#cart').click();
        cy.get('#products > ul > li > div > button').click();
        cy.get('#products > ul > li > div > ul > li:nth-child(1) > a').click();
        cy.get('#checkout').should('not.exist');
    })
    it('Removes one single sad item from cart', () => {
        cy.visit('http://localhost:3000/');
        cy.get(':nth-child(3) > .thumbnail > .caption > .clearfix > .btn').click();
        cy.get('#cart').click();
        cy.get('#products > ul > li > div > button').click();
        cy.get('#products > ul > li > div > ul > li:nth-child(1) > a').click();
        cy.get('#checkout').should('not.exist');
    })
})