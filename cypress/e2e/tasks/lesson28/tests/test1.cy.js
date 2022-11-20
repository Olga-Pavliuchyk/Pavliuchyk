import menuPage from '../drivers/menu';
//import selectors from '../drivers/selectors';
import selectors, {catalog_item_selectors} from '../drivers/selectors';
import catalog from '../drivers/cataloque';

describe('Test', () =>{


    
    beforeEach(() =>{
        cy.viewport(1920,1080);
        cy.visit('https://makeup.com.ua/');
        cy.wait(2000);
        cy.clickOnElement('#popup__window .popup-close');         
    })

    it('sortingByPrice', () => {
        cy.clickOnElement('.menu-list .menu-list__item:nth-child(11)'); 
        cy.clickOnElement(selectors.sort_form_selectors.byPrice);
        catalog.checkSorting('.simple-slider-list__price .price_item');
    })

    it('quantityOfFeedbacks', () => {
        cy.clickOnElement('.menu-list .menu-list__item:nth-child(11)');
        cy.getQuantityOfFeedbacks(selectors.catalog_item_selectors.quantityOfFeedback, 5);        
    })

    it('checkSortByProdName', () => {
        cy.clickOnElement('.menu-list .menu-list__item:nth-child(11)');
        cy.clickOnElement(selectors.sort_form_selectors.byName);
        cy.wait(2000);
        catalog.checkSortingByName('.catalog-products .simple-slider-list__name')
    })


})