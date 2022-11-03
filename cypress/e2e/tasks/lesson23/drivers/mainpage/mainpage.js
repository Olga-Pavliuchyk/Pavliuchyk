export const selectors = {
    catalogMediaBlock: '.catalog_media_block',
    benefits: '.benefits',
    scrollUpButton: '#scrollup',
}

class mainPage {
    
    navigateToProducts() {
        cy.get(selectors.catalogMediaBlock).click();
        cy.location('pathname', {timeout: 4000}).should('include', '/markdowned');
    }
} module.exports = new mainPage();