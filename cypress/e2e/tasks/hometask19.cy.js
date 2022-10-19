///<reference types = "Cypress"/>


describe('Test', () =>{
    before(() =>{
        cy.visit('http://autopract.com');
        cy.viewport(1600,900).wait(2000);
        cy.clickOnElement('[aria-label="Close"]');
    });

    it('FindByLinkText', () => {
        cy.get('[class="ltr"]').findByLinkText('compare').eq(0)
        .scrollIntoView()
        .should('be.visible')
        .click();
    });
})