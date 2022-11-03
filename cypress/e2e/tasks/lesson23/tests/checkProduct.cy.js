/// <reference types = 'Cypress'/>

import mainPage from '../drivers/mainpage/mainpage';
import productsCatalog from '../drivers/productcatalog/productscatalog';

/* Case
1) Click on discount gallery image => Navigation happens to sales
2) Select first product from the catalog and add it to cart
*/
describe('Add product to card from sale', () => {
 
  before(() => {
    cy.visit('https://parfums.ua/');
    cy.viewport(2250, 1900);
    cy.wait(2000);
   });

   it('parfumes', () => {
    //Navigate to products
    mainPage.navigateToProducts();
    //Add product to cart
    productsCatalog.addProductToCart();   
  });
});