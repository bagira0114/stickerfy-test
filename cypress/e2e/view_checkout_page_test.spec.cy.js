describe('View checkout page', () => {
it('Shows the checkout page in case of one single added happy item', () => {
    cy.visit('http://localhost:3000/');
    cy.get('body > div > div:nth-child(2) > div:nth-child(1) > div > div > div > a').click();
    cy.get('#cart').click();
    cy.get('.col-sm-6 > strong')
    .invoke('text')
    .invoke('slice', '7')
    .then(amount => {
    cy.get('#checkout').click();
    cy.url().should('include', '/checkout');
    cy.get('#total')
    .invoke('text')
    .invoke('slice', '8')
    .then(amount2 => {
        expect(amount.trim()).to.equal(amount2.trim());
    })
    })
})

it('Shows the checkout page in case of one single added angry item', () => {
    cy.visit('http://localhost:3000/');
    cy.get('body > div > div:nth-child(2) > div:nth-child(2) > div > div > div > a').click();
    cy.get('#cart').click();
    cy.get('.col-sm-6 > strong')
    .invoke('text')
    .invoke('slice', '7')
    .then(amount => {
    cy.get('#checkout').click();
    cy.url().should('include', '/checkout');
    cy.get('#total')
    .invoke('text')
    .invoke('slice', '8')
    .then(amount2 => {
        expect(amount.trim()).to.equal(amount2.trim());
    })
    })
})

it('Shows the checkout page in case of one single added sad item', () => {
    cy.visit('http://localhost:3000/');
    cy.get('body > div > div:nth-child(2) > div:nth-child(3) > div > div > div > a').click();
    cy.get('#cart').click();
    cy.get('.col-sm-6 > strong')
    .invoke('text')
    .invoke('slice', '7')
    .then(amount => {
    cy.get('#checkout').click();
    cy.url().should('include', '/checkout');
    cy.get('#total')
    .invoke('text')
    .invoke('slice', '8')
    .then(amount2 => {
        expect(amount.trim()).to.equal(amount2.trim());
    })
    })
})

})