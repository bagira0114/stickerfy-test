const HAPPY_ITEM = 'body > div > div:nth-child(2) > div:nth-child(1) > div > div > div > a';
const ANGRY_ITEM = 'body > div > div:nth-child(2) > div:nth-child(2) > div > div > div > a';
const SAD_ITEM = 'body > div > div:nth-child(2) > div:nth-child(3) > div > div > div > a';
const CART = '#cart';
const CHECKOUT = '#checkout';
const ITEMS_NAME = '.list-group-item > strong';
const ITEMS_NUMBER = '.list-group-item > .badge';
const TOTAL_PRICE = '.col-sm-6 > strong';
const LISTED_FIRST_ITEMS_NAME = '.list-group > :nth-child(1) > strong';
const LISTED_FIRST_ITEMS_NUMBER = '.list-group > :nth-child(1) > .badge';
const LISTED_SECOND_ITEMS_NAME = '.list-group > :nth-child(2) > strong';
const LISTED_SECOND_ITEMS_NUMBER = '.list-group > :nth-child(2) > .badge';
const LISTED_THIRD_ITEMS_NAME = '.list-group > :nth-child(3) > strong';
const LISTED_THIRD_ITEMS_NUMBER = '.list-group > :nth-child(3) > .badge';
const FIRST_ITEMS_PRICE = ':nth-child(1) > .label';
const SECOND_ITEMS_PRICE = ':nth-child(2) > .label';
const THIRD_ITEMS_PRICE = ':nth-child(3) > .label';
describe('View cart', () => {
    it('Shows the cart when no added items', () => {
        cy.visit('http://localhost:3000/');
        cy.get(CART).click();
        cy.url().should('include', '/shopping-cart/');
        cy.get(CHECKOUT).should('not.exist');
    })

    it('Shows the cart in case of one single added happy item', () => {
        cy.visit('http://localhost:3000/');
        cy.get(HAPPY_ITEM).click();
        cy.get(CART).click();
        cy.url().should('include', '/shopping-cart/');
        cy.get(ITEMS_NAME).should('have.text', 'Happy');
        cy.get(ITEMS_NUMBER).should('have.text', '1');
        cy.get(TOTAL_PRICE)
            .invoke('text')
            .invoke('slice', '7')
            .then(amount => {


                cy.get('.label')
                    .invoke('text')
                    .invoke('slice', '1')
                    .then(amount2 => {

                        expect(amount.trim()).to.equal(amount2.trim());

                    })
            })


    })

    it('Shows the cart in case of one single added angry item', () => {
        cy.visit('http://localhost:3000/');
        cy.get(ANGRY_ITEM).click();
        cy.get(CART).click();
        cy.url().should('include', '/shopping-cart/');
        cy.get(ITEMS_NAME).should('have.text', 'Angry');
        cy.get(ITEMS_NUMBER).should('have.text', '1');
        cy.get(TOTAL_PRICE)
            .invoke('text')
            .invoke('slice', '7')
            .then(amount => {


                cy.get('.label')
                    .invoke('text')
                    .invoke('slice', '1')
                    .then(amount2 => {

                        expect(amount.trim()).to.equal(amount2.trim());

                    })
            })


    })

    it('Shows the cart in case of one single added sad item', () => {
        cy.visit('http://localhost:3000/');
        cy.get(SAD_ITEM).click();
        cy.get(CART).click();
        cy.url().should('include', '/shopping-cart/');
        cy.get(ITEMS_NAME).should('have.text', 'Sad');
        cy.get(ITEMS_NUMBER).should('have.text', '1');
        cy.get(TOTAL_PRICE)
            .invoke('text')
            .invoke('slice', '7')
            .then(amount => {


                cy.get('.label')
                    .invoke('text')
                    .invoke('slice', '1')
                    .then(amount2 => {

                        expect(amount.trim()).to.equal(amount2.trim());

                    })
            })


    })

    it('Shows the cart in case of multiple added happy items', () => {
        cy.visit('http://localhost:3000/');
        cy.get(HAPPY_ITEM).click();
        cy.get(HAPPY_ITEM).click();
        cy.get(CART).click();
        cy.get(ITEMS_NAME).should('have.text', 'Happy');
        cy.get(ITEMS_NUMBER).should('have.text', '2');
        cy.get(TOTAL_PRICE)
            .invoke('text')
            .invoke('slice', '7')
            .then(amount => {


                cy.get('.label')
                    .invoke('text')
                    .invoke('slice', '1')
                    .then(amount2 => {

                        expect(amount.trim()).to.equal(amount2.trim());

                    })
            })
    })

    it('Shows the cart in case of multiple added angry items', () => {
        cy.visit('http://localhost:3000/');
        cy.get(ANGRY_ITEM).click();
        cy.get(ANGRY_ITEM).click();
        cy.get(CART).click();
        cy.get(ITEMS_NAME).should('have.text', 'Angry');
        cy.get(ITEMS_NUMBER).should('have.text', '2');
        cy.get(TOTAL_PRICE)
            .invoke('text')
            .invoke('slice', '7')
            .then(amount => {


                cy.get('.label')
                    .invoke('text')
                    .invoke('slice', '1')
                    .then(amount2 => {

                        expect(amount.trim()).to.equal(amount2.trim());

                    })
            })
    })

    it('Shows the cart in case of multiple added sad items', () => {
        cy.visit('http://localhost:3000/');
        cy.get(SAD_ITEM).click();
        cy.get(SAD_ITEM).click();
        cy.get(CART).click();
        cy.get(ITEMS_NAME).should('have.text', 'Sad');
        cy.get(ITEMS_NUMBER).should('have.text', '2');
        cy.get(TOTAL_PRICE)
            .invoke('text')
            .invoke('slice', '7')
            .then(amount => {


                cy.get('.label')
                    .invoke('text')
                    .invoke('slice', '1')
                    .then(amount2 => {

                        expect(amount.trim()).to.equal(amount2.trim());

                    })
            })
    })
    it('Shows the cart in case of multiple added different items', () => {
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
        cy.get(LISTED_SECOND_ITEMS_NAME).should('have.text', 'Angry');
        cy.get(LISTED_SECOND_ITEMS_NUMBER).should('have.text', '2');
        cy.get(LISTED_THIRD_ITEMS_NAME).should('have.text', 'Sad');
        cy.get(LISTED_THIRD_ITEMS_NUMBER).should('have.text', '2');
        cy.get(FIRST_ITEMS_PRICE)
            .invoke('text')
            .invoke('slice', '1')
            .then(amount => {
                const happyAmount = Number(amount);

                cy.get(SECOND_ITEMS_PRICE)
                    .invoke('text')
                    .invoke('slice', '1')
                    .then(amount2 => {
                        const angryAmount = Number(amount2);

                        cy.get(THIRD_ITEMS_PRICE)
                            .invoke('text')
                            .invoke('slice', '1')
                            .then(amount3 => {
                                const sadAmount = Number(amount3);

                                cy.get(TOTAL_PRICE)
                                    .invoke('text')
                                    .invoke('slice', '7')
                                    .then(amountSum => {
                                    

                                        const sumOfAllItems = happyAmount + angryAmount + sadAmount;

                                        expect(Number(amountSum.trim())).to.equal(sumOfAllItems);

                                    })
                            })
                    })
            })
    })
})