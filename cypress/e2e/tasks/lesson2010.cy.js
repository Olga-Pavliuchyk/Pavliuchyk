// describe('Burger menu - use show', () => {

//     before(() => {
//         cy.visit('http://autopract.com/');
//         cy.viewport(2250, 1900);
//         cy.wait(2000);
//         cy.clickOnElement('[aria-label="Close"]');
//     });

//     it.only('check show', () => {
//         cy.get('#mainnav > ul > li:nth-child(2)').click();
//         cy.get('#mainnav > ul > li:nth-child(2) > ul').invoke('show');
//         cy.get(".nav-submenu > li > [ng-reflect-router-link='/home/watch']").click();            
//     });

//   });

describe('Burger menu - use show', () => {

    before(() => {
        cy.visit('http://autopract.com/');
        cy.viewport(2250, 1900);
        cy.wait(2000);
        cy.clickOnElement('[aria-label="Close"]');
    });

    it.only('check show', () => {
        cy.get('#mainnav > ul > li:nth-child(3)').click();
        cy.get('#mainnav > ul > li:nth-child(3) > ul').invoke('show');
        cy.get(".nav-submenu > li > [ng-reflect-router-link='/shop/collection/left/sidebar']").click();            
    });

  });