const HAPPY_ITEM = 'body > div > div:nth-child(2) > div:nth-child(1) > div > div > div > a';
const ANGRY_ITEM = ':nth-child(2) > .thumbnail > .caption > .clearfix > .btn';
const SAD_ITEM = ':nth-child(3) > .thumbnail > .caption > .clearfix > .btn';
describe('Add multiple items to the cart', () =>{
    it('Adds multiple same happy items to the cart', () => {
        cy.visit('http://localhost:3000/');
        cy.get(HAPPY_ITEM).click();
        cy.get(HAPPY_ITEM).click();
        cy.get('.badge').should('have.text', 2);
    })
    it('Adds multiple same angry items to the cart', () => {
        cy.visit('http://localhost:3000/');
        cy.get(ANGRY_ITEM).click();
        cy.get(ANGRY_ITEM).click();
        cy.get('.badge').should('have.text', 2);
    })
    it('Adds multiple same sad items to the cart', () => {
        cy.visit('http://localhost:3000/');
        cy.get(SAD_ITEM).click();
        cy.get(SAD_ITEM).click();
        cy.get('.badge').should('have.text', 2);
    })
    it('Adds multiple different items to the cart', () => {
        cy.visit('http://localhost:3000/');
        cy.get(HAPPY_ITEM).click();
        cy.get(ANGRY_ITEM).click();
        cy.get(SAD_ITEM).click();
        cy.get('.badge').should('have.text', 3);
    })
})