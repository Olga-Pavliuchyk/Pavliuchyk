class sortFormPage {

    sortGifts(selector) {
        cy.get(selector).click({delay: 3000});
    }

} module.exports = new sortFormPage();
