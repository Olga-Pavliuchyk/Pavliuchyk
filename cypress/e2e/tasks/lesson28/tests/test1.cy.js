import menuPage from '../drivers/menu';
import selectors, {sort_form_selectors} from '../drivers/selectors';
import catalog from '../drivers/cataloque';

describe('Test', () =>{
    before(() =>{
        cy.viewport(1600,900);
        cy.visit('https://makeup.com.ua/');
        cy.wait(2000);
        cy.get('[id="popup__window"] [class="popup-close close-icon"]').click();
    })

    it('sortingByPrice', () => {
        cy.clickOnElement('.menu-list .menu-list__item:nth-child(11)'); 
        cy.clickOnElement(selectors.sort_form_selectors.byPrice);
        catalog.checkSorting('.simple-slider-list__price .price_item');


    })
})