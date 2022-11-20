import menuPage from '../drivers/menu';
import {sort_form_selectors} from '../drivers/selectors';
import sortFormPage from '../drivers/sortForm';
import catalog from '../drivers/cataloque';

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Gifts sort', () => {
  before(() => {
    cy.viewport(1200, 980);
    cy.visit('https://makeup.com.ua/');
    menuPage.navigateToMenuItem('Подарунки');
    //cy.location('pathname').should('include', 'categorys/442339/');
  });

  it('get element by .eq(0) from array', () => {
    cy.get('[class="simple-slider-list"]>li>div:nth-child(2) div').eq(0).then((element)=>{
      const productText = element.text()
      cy.log(productText)
    })
  })

})