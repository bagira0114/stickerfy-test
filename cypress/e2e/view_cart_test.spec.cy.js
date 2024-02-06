const HAPPY_ITEM = 'body > div > div:nth-child(2) > div:nth-child(1) > div > div > div > a';
const ANGRY_ITEM = 'body > div > div:nth-child(2) > div:nth-child(2) > div > div > div > a';
const SAD_ITEM = 'body > div > div:nth-child(2) > div:nth-child(3) > div > div > div > a';
const CART = '#cart';
const CHECKOUT = '#checkout';
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
        cy.get('.list-group-item > strong').should('have.text', 'Happy');
        cy.get('.list-group-item > .badge').should('have.text', '1');
        cy.get('.col-sm-6 > strong')
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
        cy.get('.list-group-item > strong').should('have.text', 'Angry');
        cy.get('.list-group-item > .badge').should('have.text', '1');
        cy.get('.col-sm-6 > strong')
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
        cy.get('.list-group-item > strong').should('have.text', 'Sad');
        cy.get('.list-group-item > .badge').should('have.text', '1');
        cy.get('.col-sm-6 > strong')
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
        cy.get('.list-group-item > strong').should('have.text', 'Happy');
        cy.get('.list-group-item > .badge').should('have.text', '2');
        cy.get('.col-sm-6 > strong')
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
        cy.get('.list-group-item > strong').should('have.text', 'Angry');
        cy.get('.list-group-item > .badge').should('have.text', '2');
        cy.get('.col-sm-6 > strong')
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
        cy.get('.list-group-item > strong').should('have.text', 'Sad');
        cy.get('.list-group-item > .badge').should('have.text', '2');
        cy.get('.col-sm-6 > strong')
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
        cy.get('.list-group > :nth-child(1) > strong').should('have.text', 'Happy');
        cy.get('.list-group > :nth-child(1) > .badge').should('have.text', '2');
        cy.get('.list-group > :nth-child(2) > strong').should('have.text', 'Angry');
        cy.get('.list-group > :nth-child(2) > .badge').should('have.text', '2');
        cy.get('.list-group > :nth-child(3) > strong').should('have.text', 'Sad');
        cy.get('.list-group > :nth-child(3) > .badge').should('have.text', '2');
        cy.get(':nth-child(1) > .label')
            .invoke('text')
            .invoke('slice', '1')
            .then(amount => {
                const happyAmount = Number(amount);

                cy.get(':nth-child(2) > .label')
                    .invoke('text')
                    .invoke('slice', '1')
                    .then(amount2 => {
                        const angryAmount = Number(amount2);

                        cy.get(':nth-child(3) > .label')
                            .invoke('text')
                            .invoke('slice', '1')
                            .then(amount3 => {
                                const sadAmount = Number(amount3);

                                cy.get('.col-sm-6 > strong')
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