export const selectorsOfToolBar = {
    buttonMenuHome: '#mainnav > ul > li:nth-child(2)',
    subMenuHome: '#mainnav > ul > li:nth-child(2) > ul',
    linkOnSubMenuHome: '#mainnav > ul > li:nth-child(2) > ul > li > a',

    buttonMenuShop: '#mainnav > ul > li:nth-child(3)',
    subMenuShop: '#mainnav > ul > li:nth-child(3) > ul',
    linkOnSubMenuShop: '#mainnav > ul > li:nth-child(3) > ul > li > a',

    buttonMenuProducts: '#mainnav > ul > li:nth-child(4)',
    subMenuProducts: '#mainnav > ul > li:nth-child(4) > ul',
    linkOnSubMenuProducts: '#mainnav > ul > li:nth-child(4) > ul > li > a',

    buttonMenuFeatures: '#mainnav > ul > li:nth-child(5)',
    subMenuFeatures: '#mainnav > ul > li:nth-child(5) > div',
    linkOnSubMenuFeatures: '#mainnav > ul > li:nth-child(5) > div a',

    buttonMenuPages: '#mainnav > ul > li:nth-child(6)',
    subMenuPages: '#mainnav > ul > li:nth-child(6) > ul',
    linkOnSubMenuPages: '#mainnav > ul > li:nth-child(6) > ul > li > a',

    buttonMenuBlogs: '#mainnav > ul > li:nth-child(7)',
    subMenuBlogs: '#mainnav > ul > li:nth-child(7) > ul',
    linkOnSubMenuBlogs: '#mainnav > ul > li:nth-child(7) > ul > li > a'
}

class toolBar {

    pageInSectionHome(text){
        return cy.get(selectorsOfToolBar.linkOnSubMenuHome).contains(text);
    }

    pageInSectionShop(text){
        return cy.get(selectorsOfToolBar.linkOnSubMenuShop).contains(text);
    }
    
    pageInSectionProducts(text){
        return cy.get(selectorsOfToolBar.linkOnSubMenuProducts).contains(text);
    }

    pageInSectionFeatures(text){
        return cy.get(selectorsOfToolBar.linkOnSubMenuFeatures).contains(text);
    }

    pageInSectionPages(text){
        return cy.get(selectorsOfToolBar.linkOnSubMenuPages).contains(text);
    }

    pageInSectionBlogs(text){
        return cy.get(selectorsOfToolBar.linkOnSubMenuBlogs).contains(text);
    }

    openPageOnSectionHome(namePage) {
        cy.get(selectorsOfToolBar.buttonMenuHome).click();
        cy.get(selectorsOfToolBar.subMenuHome).invoke('show');
        this.pageInSectionHome(namePage).click();
    }

    openPageOnSectionShop(namePage) {
        cy.get(selectorsOfToolBar.buttonMenuShop).click();
        cy.get(selectorsOfToolBar.subMenuShop).invoke('show');
        this.pageInSectionShop(namePage).click();
    }
    
    openPageOnSectionProducts(namePage) {
        cy.get(selectorsOfToolBar.buttonMenuProducts).click();
        cy.get(selectorsOfToolBar.subMenuProducts).invoke('show');
        this.pageInSectionProducts(namePage).click();
    }

    openPageOnSectionFeatures(namePage) {
        cy.get(selectorsOfToolBar.buttonMenuFeatures).click();
        cy.get(selectorsOfToolBar.subMenuFeatures).invoke('show');
        this.pageInSectionFeatures(namePage).click();
    }

    openPageOnSectionPages(namePage) {
        cy.get(selectorsOfToolBar.buttonMenuPages).click();
        cy.get(selectorsOfToolBar.subMenuPages).invoke('show');
        this.pageInSectionPages(namePage).click();
    }

    openPageOnSectionBlogs(namePage) {
        cy.get(selectorsOfToolBar.buttonMenuBlogs).click();
        cy.get(selectorsOfToolBar.subMenuBlogs).invoke('show');
        this.pageInSectionBlogs(namePage).click();
    }



} module.exports = new toolBar();

