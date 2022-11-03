/// <reference types = 'Cypress'/>

// Click  on sale - check that url was changed
// Click on promo - check that url was changed
// Add methods on cart and favorites
// Check search input: 1) type  text , 2) press enter => check page path was changed

import headers from '../drivers/mainpage/headers';
import productsCatalog from '../drivers/productcatalog/productscatalog';
import "cypress-real-events/support";

describe('check', () => {
 
    before(() => {
      cy.visit('https://parfums.ua/');
      cy.viewport(2250, 1900);
      cy.wait(2000);
     });
  
     it('checkSale', () => {
        headers.navigateToSale(); 
    });

    it('checkPromo', () => {
        headers.navigateToPromo(); 
    });

    it.only('checkCart', () => {
        //headers.navigateToSale(); 
        productsCatalog.addProductToCart(); 
        headers.navigateToCart();

    });


  });