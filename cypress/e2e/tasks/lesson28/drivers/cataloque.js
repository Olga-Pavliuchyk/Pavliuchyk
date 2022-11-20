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
    cy.get(selector).eq(35).then((result) => {
       const resultA = Number(result.text());
       cy.wrap(resultA).as('firstNumber');
    })
    cy.get(selector).eq(0).then(function (result)  {
      const resultB = Number(result.text());
      expect(this.firstNumber).to.be.greaterThan(resultB);
    })
    
};

checkSortingByName (selector) {
  cy.get(selector).eq(0).then((result) => {
     const resultA = result.text();
     const subResA = resultA.substring(0,5);
     cy.wrap(subResA).as('firstProdName'); })

     cy.get(selector).eq(35).then(function (result){
      const resultB = result.text();
      const subResB = resultB.substring(0,5);
      cy.wrap(subResB).as('secondProdName');
      //expect(this.secondProdName).to.be.greaterThan(this.firstProdName);

      //this.secondProdName > this.firstProdName ? cy.log('Сортировка по имени успешна') : cy.log('Сортировка по имени не успешна');
      
        if (this.secondProdName>this.firstProdName) {
          cy.log('Сортировка по имени успешна');
        }
        else cy.log('Сортировка по имени не успешна');
      
     })

};

} module.exports = new catalog();