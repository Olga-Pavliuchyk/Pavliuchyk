/// <reference types = 'Cypress'/>
import toolBar from '../base/toolBar';
import addToCart from '../base/addToCart-CheckInCart';


//Напишите пейджи и тест на добавление товара в корзину со страницы products/ Three Olumn

describe('addToCart', () => {
   
    before(() => {
      cy.visit('http://autopract.com').wait(3000);
      cy.clickOnElement('[aria-label="Close"]');
     }); 

    it('open', () => {
        toolBar.openPageOnSectionProducts('three olumn'); 
        addToCart.adding();
        cy.get(addToCart.selectors.prodNameInCart).invoke(text).should('be.equal', 'Trim Dress');   
    });





  });