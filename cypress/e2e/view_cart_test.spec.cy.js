describe('View cart', () => {
    it('Shows the cart when no added items', () => {
        cy.visit('http://localhost:3000/');
        cy.get('#cart').click();
        cy.url().should('include', '/shopping-cart/');
        cy.get('#checkout').should('not.exist');
    })

    it('Shows the cart in case of one single added happy item', () => {
        cy.visit('http://localhost:3000/');
        cy.get('body > div > div:nth-child(2) > div:nth-child(1) > div > div > div > a').click();
        cy.get('#cart').click();
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
        cy.get('body > div > div:nth-child(2) > div:nth-child(2) > div > div > div > a').click();
        cy.get('#cart').click();
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
        cy.get('body > div > div:nth-child(2) > div:nth-child(3) > div > div > div > a').click();
        cy.get('#cart').click();
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
        cy.get('body > div > div:nth-child(2) > div:nth-child(1) > div > div > div > a').click();
        cy.get('body > div > div:nth-child(2) > div:nth-child(1) > div > div > div > a').click();
        cy.get('#cart').click();
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
})