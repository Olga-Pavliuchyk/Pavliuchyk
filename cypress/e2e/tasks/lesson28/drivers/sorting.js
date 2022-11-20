import {menu_selectors} from './selectors';

class checkSort {

    checkSortByPrice() {
    cy.get(menu_selectors.menuList).contains(menuItemName).click({delay: 1000});
 }

}module.exports =  new checkSort();