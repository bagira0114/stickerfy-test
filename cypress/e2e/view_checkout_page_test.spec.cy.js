const HAPPY_ITEM = 'body > div > div:nth-child(2) > div:nth-child(1) > div > div > div > a';
const CART = '#cart';
const TOTAL_PRICE = '.col-sm-6 > strong';
const CHECKOUT = '#checkout';
const TOTAL = '#total';
const ANGRY_ITEM = 'body > div > div:nth-child(2) > div:nth-child(2) > div > div > div > a';
const SAD_ITEM = 'body > div > div:nth-child(2) > div:nth-child(3) > div > div > div > a';
describe('View checkout page', () => {
    it('Shows the checkout page in case of one single added happy item', () => {
        cy.visit('http://localhost:3000/');
        cy.get(HAPPY_ITEM).click();
        cy.get(CART).click();
        cy.get(TOTAL_PRICE)
            .invoke('text')
            .invoke('slice', '7')
            .then(amount => {
                cy.get(CHECKOUT).click();
                cy.url().should('include', '/checkout');
                cy.get(TOTAL)
                    .invoke('text')
                    .invoke('slice', '8')
                    .then(amount2 => {
                        expect(amount.trim()).to.equal(amount2.trim());
                    })
            })
    })

    it('Shows the checkout page in case of one single added angry item', () => {
        cy.visit('http://localhost:3000/');
        cy.get(ANGRY_ITEM).click();
        cy.get(CART).click();
        cy.get(TOTAL_PRICE)
            .invoke('text')
            .invoke('slice', '7')
            .then(amount => {
                cy.get(CHECKOUT).click();
                cy.url().should('include', '/checkout');
                cy.get(TOTAL)
                    .invoke('text')
                    .invoke('slice', '8')
                    .then(amount2 => {
                        expect(amount.trim()).to.equal(amount2.trim());
                    })
            })
    })

    it('Shows the checkout page in case of one single added sad item', () => {
        cy.visit('http://localhost:3000/');
        cy.get(SAD_ITEM).click();
        cy.get(CART).click();
        cy.get(TOTAL_PRICE)
            .invoke('text')
            .invoke('slice', '7')
            .then(amount => {
                cy.get(CHECKOUT).click();
                cy.url().should('include', '/checkout');
                cy.get(TOTAL)
                    .invoke('text')
                    .invoke('slice', '8')
                    .then(amount2 => {
                        expect(amount.trim()).to.equal(amount2.trim());
                    })
            })
    })

    it('Shows the checkout page in case of multiple added happy items', () => {
        cy.visit('http://localhost:3000/');
        cy.get(HAPPY_ITEM).click();
        cy.get(HAPPY_ITEM).click();
        cy.get(CART).click();
        cy.get(TOTAL_PRICE)
            .invoke('text')
            .invoke('slice', '7')
            .then(amount => {
                cy.get(CHECKOUT).click();
                cy.url().should('include', '/checkout');
                cy.get(TOTAL)
                    .invoke('text')
                    .invoke('slice', '8')
                    .then(amount2 => {
                        expect(amount.trim()).to.equal(amount2.trim());
                    })
            })
    })

    it('Shows the checkout page in case of multiple added angry items', () => {
        cy.visit('http://localhost:3000/');
        cy.get(ANGRY_ITEM).click();
        cy.get(ANGRY_ITEM).click();
        cy.get(CART).click();
        cy.get(TOTAL_PRICE)
            .invoke('text')
            .invoke('slice', '7')
            .then(amount => {
                cy.get(CHECKOUT).click();
                cy.url().should('include', '/checkout');
                cy.get(TOTAL)
                    .invoke('text')
                    .invoke('slice', '8')
                    .then(amount2 => {
                        expect(amount.trim()).to.equal(amount2.trim());
                    })
            })
    })

    it('Shows the checkout page in case of multiple added sad items', () => {
        cy.visit('http://localhost:3000/');
        cy.get(SAD_ITEM).click();
        cy.get(SAD_ITEM).click();
        cy.get(CART).click();
        cy.get(TOTAL_PRICE)
            .invoke('text')
            .invoke('slice', '7')
            .then(amount => {
                cy.get(CHECKOUT).click();
                cy.url().should('include', '/checkout');
                cy.get(TOTAL)
                    .invoke('text')
                    .invoke('slice', '8')
                    .then(amount2 => {
                        expect(amount.trim()).to.equal(amount2.trim());
                    })
            })
    })

})