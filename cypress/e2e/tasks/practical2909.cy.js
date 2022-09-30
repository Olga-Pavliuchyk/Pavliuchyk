///<reference types = "Cypress"/>
import '@4tw/cypress-drag-drop';

describe ('test' , () => {  
    before (() => {
        cy.visit('https://mui.com/material-ui/react-slider/').viewport(1920,1080);
        cy.wait(3000);
    }); 

    it('ui3', () => { 
        cy.get('[class*="css-1623zc"] span:nth-child(2)')
        .invoke('attr', 'style', 'left: 0%; width: 100%;');
        cy.get('[class*="css-1623zc"] span:nth-child(3)')
        .invoke('attr', 'style', 'left: 100%;');
        cy.get('[class*="css-1gv0u6o"] input')
        .invoke('attr', 'aria-valuenow', '100')
        .invoke('attr', 'value', '100')

       })


    })

