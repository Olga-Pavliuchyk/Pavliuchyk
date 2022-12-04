import {catalogPageSelectors} from './selectorsPracticeLuma';

class catalogPage {

    pageOfCategory(text){
        return cy.get(catalogPageSelectors.categories).contains(text);
    }

    openPageOfCategory(namePage) {
        this.pageOfCategory(namePage).click();
    }
} module.exports = new catalogPage();
