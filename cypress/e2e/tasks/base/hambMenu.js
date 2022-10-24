/*Comments: 
1)  hambSubMenuList: '#sub-menu [class*="ng-star-inserted"] ul' - возвращает список, а нужен эелемент
лучше было бы выбрать один конкретный у них описаны классы норм, или можно было сделать на все отдельные локаторы

2) linkOnSubHambMenu: '#sub-menu >li' - возвращает список а нужен элемент, например
  hambSubMenuList: '.clothing-menu',
  
3) когда проходит тест не открывате сабмень, имею ввиду не первый список а второй, может тут не уточнила я: не забывай делать.  
.invoke('show'); елси элемент скрытый иначе на него не сможешь сделать клик

 cy.get(selectorsHambMenu.hambMenuList).invoke('show');
 
 Тогда код немножко меняется
 
 export const selectorsHambMenu = {
    hambMenuIcon: '.bar-style',
    hambMenuList: '#sub-menu',
    hambSubMenuList: '.clothing-menu', //'#sub-menu [class*="ng-star-inserted"] ul', //любой "подсписок" из гамб.меню 
    hambMenuClose: '#unset [class~="sidebar-back"]',
    linkOnSubHambMenu: '#sub-menu >li'  ,
    clothing: '[id="sub-menu"]>li:nth-child(1)'
}

class hambMenu {

    pageInHambMenu(text){
        return cy.get(selectorsHambMenu.clothing).contains(text);
    }

    openClosePageInHambMenu(namePage) {
        cy.get(selectorsHambMenu.hambMenuIcon).click();
        cy.get(selectorsHambMenu.hambMenuList).invoke('show');
        this.pageInHambMenu(namePage).click();   
        cy.get(selectorsHambMenu.hambSubMenuList).invoke('show');


        // this.pageInHambMenu(namePage).click().should('be.visible');
        // cy.get(selectorsHambMenu.hambMenuClose).click();
        // cy.get(selectorsHambMenu.hambSubMenuList).should('not.be.visible');
    }
} module.exports = new hambMenu();
*/

export const selectorsHambMenu = {
    hambMenuIcon: '.bar-style',
    hambMenuList: '#sub-menu',
    hambSubMenuList: '#sub-menu [class*="ng-star-inserted"] ul', //любой "подсписок" из гамб.меню
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
        this.pageInHambMenu(namePage).click().should('be.visible');
        cy.get(selectorsHambMenu.hambMenuClose).click();
        cy.get(selectorsHambMenu.hambSubMenuList).should('not.be.visible');
    }
} module.exports = new hambMenu();


