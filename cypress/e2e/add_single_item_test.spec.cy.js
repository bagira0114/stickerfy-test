const HAPPY_ITEM = 'body > div > div:nth-child(2) > div:nth-child(1) > div > div > div > a';
const ITEMS_NUMBER = '.badge';
const ANGRY_ITEM = ':nth-child(2) > .thumbnail > .caption > .clearfix > .btn';
const SAD_ITEM = ':nth-child(3) > .thumbnail > .caption > .clearfix > .btn';
describe('Add a single item to the cart', () => {
    it('Adds a happy item to the cart', () => {
        cy.visit('http://localhost:3000/');
        cy.get(HAPPY_ITEM).click();
        cy.get(ITEMS_NUMBER).should('have.text', 1);
    }
    )

    it('Adds an angry item to the cart', () => {
        cy.visit('http://localhost:3000/');
        cy.get(ANGRY_ITEM).click();
        cy.get(ITEMS_NUMBER).should('have.text', 1);
    })

    it('Adds a sad item to the cart', () =>{
        cy.visit('http://localhost:3000/');
        cy.get(SAD_ITEM).click();
        cy.get(ITEMS_NUMBER).should('have.text', 1);
    })

}
)