/// <reference types = 'Cypress'/>
import categories from '../pages/categories'
import sorting from '../pages/sorting'
import productBlock from '../pages/product_block'

describe ('Sorting gifts', () => {
    before('Visit main page', () => {
        cy.visit('https://makeup.com.ua/ua/');
        cy.get('[id="popup__window"] [class="popup-close close-icon"]').click();
        cy.get(categories.selectors.giftsButton).click();

    });


    it('Check sorting by Price', () => {
        
        cy.url({timeout:4000}).should('contain.text', 'categorys');
        sorting.priceSortingButton({timeout:4000}); 
        sorting.checkSorting(productBlock.selectors.firstProductPrice, productBlock.selectors.lastProductPrice);
    });    
});
