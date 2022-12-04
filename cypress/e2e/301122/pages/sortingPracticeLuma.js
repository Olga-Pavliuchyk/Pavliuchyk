import {sortingSelectors} from '../pages/selectorsPracticeLuma';

class sorting {

     sortingByPriceDefault(selector) {
        cy.get(selector).eq(1).invoke ('attr', 'data-price-amount').then((result) => {
           const resultA = Number(result);
           cy.log(resultA);
           cy.wrap(resultA).as('lastPrice');
        })
        cy.get(selector).eq(0).invoke ('attr', 'data-price-amount').then(function (result)  {
          const resultB = Number(result);
          cy.log(resultB);
          expect(this.lastPrice).to.be.greaterThan(resultB);
        })
      } 

      sortingByPriceDescending(selector) {
        cy.get(sortingSelectors.directionOfSortingSwitcher).eq(0).click();
        cy.get(selector).eq(10).invoke ('attr', 'data-price-amount').then((result) => {
           const resultA = Number(result);
           cy.log(resultA);
           cy.wrap(resultA).as('lastPrice');
        })
        cy.get(selector).eq(0).invoke ('attr', 'data-price-amount').then(function (result)  {
          const resultB = Number(result);
          cy.log(resultB);
          expect(this.lastPrice).to.be.lessThan(resultB);
        })
      } 

      sortingByName(selector) {
        cy.get(selector).eq(0).then((result) => {
          const text = result.text().substring(0,4);
          let quantity = 0;
          for (let i of text) {
            quantity += i.charCodeAt(0);
          }
          cy.wrap(quantity).as('countFirstProdName');
        })
        cy.get(selector).eq(10).then(function (result){
          const text = result.text().substring(0,4);
          let countLastProdName = 0;
          for(let i of text){
            countLastProdName += i.charCodeAt(0);
          }
          expect(this.countFirstProdName).to.be.lessThan(Number(countLastProdName));

        })
      }

      sortingByPosition(selector, index1, index2) {
        cy.get(selector).eq(index2).invoke ('attr', 'data-product-id').then((result) => {
           const positionSecond = Number(result);
           cy.wrap(positionSecond).as('positionSecond');
        })
        cy.get(selector).eq(index1).invoke ('attr', 'data-product-id').then(function (result)  {
          const positionFirst = Number(result);
          expect(this.positionSecond).to.be.lessThan(positionFirst);
        })
      } 
} module.exports = new sorting();