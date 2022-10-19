///<reference types = "Cypress"/>
// import { faker } from '@faker-js/faker';
// const genEmail = faker.internet.email();

// describe('Home page', () =>{
//     before(() =>{
//         cy.visit('http://autopract.com');
//         cy.viewport(2250,1900);
//         cy.wait(2000);
//     });

//     it('commandTest', () => {
//     cy.clickOnElement('[aria-label="Close"]');
//     cy.clickOnElement('[class="bar-style"]');
//     });

//     it.only('commandInputText', () => {
//         cy.get('input[id="mce-EMAIL"]', {timeout: 5000}).eq(1).click().type('genEmail');
//     })
// })

describe('Home page', () =>{
    before(() =>{
        cy.visit('http://autopract.com');
        cy.viewport(2250,1900);
        cy.wait(2000);
    });

    it('findByText', () => {
        
    });


})