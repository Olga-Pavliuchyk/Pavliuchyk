export const selectorsOfRegistrationPage = {
    buttonMenuHome: '#mainnav > ul > li:nth-child(2)'
}

class registrationForm {
    
    createAccountForm = {
    firstName: () => cy.get('#fname'),
    lastName: () => cy.get('#lname'),
    email: () => cy.get ('#email')
    }

    get clothingSection(){
        return ''
    }

    pageInSectionHome(text){
        return cy.get(selectorsOfToolBar.linkOnSubMenuHome).contains(text);
    }

    openPageOnSectionHome(namePage) {
        cy.get(selectorsOfToolBar.buttonMenuHome).click();
        cy.get(selectorsOfToolBar.subMenuHome).invoke('show');
        this.pageInSectionHome(namePage).click();
    }

    


} module.exports = new registrationForm();

