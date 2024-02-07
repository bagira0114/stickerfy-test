const HAPPY_ITEM = 'body > div > div:nth-child(2) > div:nth-child(1) > div > div > div > a';
const ANGRY_ITEM = 'body > div > div:nth-child(2) > div:nth-child(2) > div > div > div > a';
const SAD_ITEM = 'body > div > div:nth-child(2) > div:nth-child(3) > div > div > div > a';
const CART = '#cart';
const CHECKOUT = '#checkout';
const OPTIONS = '#products > ul > li > div > button';
const REMOVE_ONE = '#products > ul > li > div > ul > li:nth-child(1) > a';
const ITEMS_NUMBER = '.list-group-item > .badge';
const REMOVE_ALL = '#products > ul > li > div > ul > li:nth-child(2) > a';
const LISTED_FIRST_ITEMS_NAME = '.list-group > :nth-child(1) > strong';
const LISTED_FIRST_ITEMS_NUMBER = '.list-group > :nth-child(1) > .badge';
const LISTED_FIRST_ITEMS_OPTIONS = ':nth-child(1) > .btn-group > .btn';
const LISTED_FIRST_ELEMENT_REMOVE_ONE = ':nth-child(1) > .btn-group > .dropdown-menu > :nth-child(1) > a';
describe('Remove items from cart', () => {
    it('Removes one single happy item from cart', () => {
        cy.visit('http://localhost:3000/');
        cy.get(HAPPY_ITEM).click();
        cy.get(CART).click();
        cy.get(OPTIONS).click();
        cy.get(REMOVE_ONE).click();
        cy.get(CHECKOUT).should('not.exist');

    })
    it('Removes one single angry item from cart', () => {
        cy.visit('http://localhost:3000/');
        cy.get(ANGRY_ITEM).click();
        cy.get(CART).click();
        cy.get(OPTIONS).click();
        cy.get(REMOVE_ONE).click();
        cy.get(CHECKOUT).should('not.exist');
    })
    it('Removes one single sad item from cart', () => {
        cy.visit('http://localhost:3000/');
        cy.get(SAD_ITEM).click();
        cy.get(CART).click();
        cy.get(OPTIONS).click();
        cy.get(REMOVE_ONE).click();
        cy.get(CHECKOUT).should('not.exist');
    })

    it('Removes one single happy item in case of multiple added happy items', () => {
        cy.visit('http://localhost:3000/');
        cy.get(HAPPY_ITEM).click();
        cy.get(HAPPY_ITEM).click();
        cy.get(CART).click();
        cy.get(ITEMS_NUMBER).should('have.text', '2');
        cy.get(OPTIONS).click();
        cy.get(REMOVE_ONE).click();
        cy.get(ITEMS_NUMBER).should('have.text', '1');

    })

    it('Removes one single angry item in case of multiple added angry items', () => {
        cy.visit('http://localhost:3000/');
        cy.get(ANGRY_ITEM).click();
        cy.get(ANGRY_ITEM).click();
        cy.get(CART).click();
        cy.get(ITEMS_NUMBER).should('have.text', '2');
        cy.get(OPTIONS).click();
        cy.get(REMOVE_ONE).click();
        cy.get(ITEMS_NUMBER).should('have.text', '1');

    })

    it('Removes one single sad item in case of multiple added sad items', () => {
        cy.visit('http://localhost:3000/');
        cy.get(SAD_ITEM).click();
        cy.get(SAD_ITEM).click();
        cy.get(CART).click();
        cy.get(ITEMS_NUMBER).should('have.text', '2');
        cy.get(OPTIONS).click();
        cy.get(REMOVE_ONE).click();
        cy.get(ITEMS_NUMBER).should('have.text', '1');

    })

    it('Removes all happy items in case of multiple added happy items', () => {
        cy.visit('http://localhost:3000/');
        cy.get(HAPPY_ITEM).click();
        cy.get(HAPPY_ITEM).click();
        cy.get(CART).click();
        cy.get(ITEMS_NUMBER).should('have.text', '2');
        cy.get(OPTIONS).click();
        cy.get(REMOVE_ALL).click();
        cy.get(CHECKOUT).should('not.exist');

    })

    it('Removes all angry items in case of multiple added angry items', () => {
        cy.visit('http://localhost:3000/');
        cy.get(ANGRY_ITEM).click();
        cy.get(ANGRY_ITEM).click();
        cy.get(CART).click();
        cy.get(ITEMS_NUMBER).should('have.text', '2');
        cy.get(OPTIONS).click();
        cy.get(REMOVE_ALL).click();
        cy.get(CHECKOUT).should('not.exist');

    })

    it('Removes all sad items in case of multiple added sad items', () => {
        cy.visit('http://localhost:3000/');
        cy.get(SAD_ITEM).click();
        cy.get(SAD_ITEM).click();
        cy.get(CART).click();
        cy.get(ITEMS_NUMBER).should('have.text', '2');
        cy.get(OPTIONS).click();
        cy.get(REMOVE_ALL).click();
        cy.get(CHECKOUT).should('not.exist');

    })

    it('Removes one single happy item in case of multiple different items', () => {
        cy.visit('http://localhost:3000/');
        cy.get(HAPPY_ITEM).click();
        cy.get(HAPPY_ITEM).click();
        cy.get(ANGRY_ITEM).click();
        cy.get(ANGRY_ITEM).click();
        cy.get(SAD_ITEM).click();
        cy.get(SAD_ITEM).click();
        cy.get(CART).click();
        cy.get(LISTED_FIRST_ITEMS_NAME).should('have.text', 'Happy');
        cy.get(LISTED_FIRST_ITEMS_NUMBER).should('have.text', '2');
        cy.get(LISTED_FIRST_ITEMS_OPTIONS).click();
        cy.get(LISTED_FIRST_ELEMENT_REMOVE_ONE).click();
        cy.get(LISTED_FIRST_ITEMS_NUMBER).should('have.text', '1');
    })

})