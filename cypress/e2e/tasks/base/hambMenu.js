export const selectorsHambMenu = {
    hambMenuIcon: '.bar-style',
    hambMenuList: '#sub-menu',
    hambMenuClose: '#unset [class~="sidebar-back"]',
    linkOnSubHambMenu: '#sub-menu >li'    
}

class hambMenu {

    pageInHambMenu(text){
        return cy.get(selectorsHambMenu.linkOnSubHambMenu).contains(text);
    }

    openClosePageInHambMenu(namePage) {
        cy.get(selectorsHambMenu.hambMenuIcon).click();
        cy.get(selectorsHambMenu.hambMenuList).should('be.visible');
        this.pageInHambMenu(namePage).click().invoke('show').should('be.visible');
        cy.get(selectorsHambMenu.hambMenuClose).click();
        cy.get(selectorsHambMenu.hambMenuList).should('not.be.visible');        
    }
} module.exports = new hambMenu();


