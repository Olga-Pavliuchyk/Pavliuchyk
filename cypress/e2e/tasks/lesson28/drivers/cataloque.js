import "cypress-real-events/support";
import {catalog_item_selectors} from './selectors';



class catalog {

  itemPrice() {
    let prices = []; 
    cy.get(catalog_item_selectors.productPrice)
    .each(($el) => {
      prices.push($el.text()) 
      cy.log($el.text())
    })
  }
    
  checkSorting(selector) {
    cy.get(selector).eq(4).then( (result) => {
       const resultA = Number(result.text());
       cy.wrap(resultA).as('firstNumber');
    })

    cy.get(selector).eq(3).then(function (result)  {
      const resultB = Number(result.text());
      expect(this.firstNumber).to.be.greaterThan(resultB);
    })
    
};
} module.exports = new catalog();