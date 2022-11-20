import {menu_selectors} from './selectors';
import {catalog_item_selectors} from './selectors';

class menuPage {

 navigateToMenuItem(menuItemName) {
    cy.get(menu_selectors.menuList).contains(menuItemName).click({delay: 1000});
 }

}module.exports =  new menuPage();