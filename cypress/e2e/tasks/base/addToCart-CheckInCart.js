// export const selectors = {
//     formAddToCart: '[class~="product-form-box"]',
//     addToCartS: '.product-buttons a:first-child',
//     allCart: '[class*="table-responsive-xs"] ',
//     prodNameInCart: '[class*="table-responsive-xs"]  td:nth-child(2) > a'
// }

class addToCart {  

    selectors = {
        formAddToCart: '[class~="product-form-box"]',
        addToCartS: '.product-buttons a:first-child',
        allCart: '[class*="table-responsive-xs"] ',
        prodNameInCart: '[class*="table-responsive-xs"]  td:nth-child(2) > a'
    }

    adding () {
        cy.get(selectors.addToCartS).click();
    }

    titleCart (text) {
       return cy.get(selectors.prodNameInCart).invoke(text);
    }

    checking (title) {
        this.titleCart.invoke('text');
    }



} module.exports = new addToCart();

// class checkTitleInCart {  

//     cart(text){
//         return cy.get(selectors.allCart).contains(text);
//     }

//     checking (title) {
//         this.cart(title).invoke('text'); 
//         //cy.get(selectors.prodNameInCart).invoke(text);        
//     }

// } module.exports = new checkTitleInCart();

