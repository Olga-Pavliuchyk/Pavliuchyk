/// <reference types = 'Cypress'/>
import hambMenu from '../base/hambMenu'

describe('hambMenu', () => {
 
  before(() => {
      cy.visit('http://autopract.com');
      cy.viewport(1600, 900).wait(2000);
      cy.clickOnElement('[aria-label="Close"]');      
     }); 

     it('hambMenu', () => {
      hambMenu.openClosePageInHambMenu(' footwear ');       
    });
  });