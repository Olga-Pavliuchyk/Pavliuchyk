import sorting from '../pages/sortingPracticeLuma';
import catalogPage from '../pages/catalogPageLuma';
import filters from '../pages/filtersPracticeLuma';
import {sortingSelectors} from '../pages/selectorsPracticeLuma';
import {toolbarSelectors} from '../pages/selectorsPracticeLuma';
import {catalogPageSelectors} from '../pages/selectorsPracticeLuma';
import {filterSelectors} from '../pages/selectorsPracticeLuma';


describe('practice', () => {
 
  beforeEach(() => {
    cy.visit('/', {timeout: 5000});
    //cy.viewport(1920, 1080);
   });

   it('sortingByPrice', () => {
    cy.clickOnElement(toolbarSelectors.Men);
    catalogPage.openPageOfCategory('Jackets');
    cy.get(sortingSelectors.selectSorting).eq(0).select('price', {timeout: 5000});
    sorting.sortingByPriceDefault(catalogPageSelectors.productPrice);  
  });

  it('sortingByPriceDescending', () => {
    cy.clickOnElement(toolbarSelectors.Men);
    catalogPage.openPageOfCategory('Jackets');
    cy.get(sortingSelectors.selectSorting).eq(0).select('price', {timeout: 5000});
    sorting.sortingByPriceDescending(catalogPageSelectors.productPrice);  
  });

  it('sortingByName', () => {
    cy.clickOnElement(toolbarSelectors.Men);
    catalogPage.openPageOfCategory('Tanks');
    cy.get(sortingSelectors.selectSorting).eq(0).select('name', {timeout: 5000});
    sorting.sortingByName(catalogPageSelectors.productName);
  });

  it('sortingByPosition', () => {
    cy.clickOnElement(toolbarSelectors.Women);
    catalogPage.openPageOfCategory('Jackets');
    cy.get(sortingSelectors.selectSorting).eq(0).select('position', {timeout: 5000});
    sorting.sortingByPosition(catalogPageSelectors.productPosition, 0, 5);  
  });

  it('filterByPrice', () => {
    cy.clickOnElement(toolbarSelectors.Women);
    catalogPage.openPageOfCategory('Jackets');
    filters.filterByPrice(filterSelectors.filterPrice50plus);
  });

  it('filterByColor', () => {
    cy.clickOnElement(toolbarSelectors.Women);
    catalogPage.openPageOfCategory('Jackets');
    filters.filterByColor(filterSelectors.redColor);
  });

  it('filterBySize', () => {
    cy.clickOnElement(toolbarSelectors.Women);
    catalogPage.openPageOfCategory('Pants');
    filters.filterBySize(filterSelectors.size29);
  });

});