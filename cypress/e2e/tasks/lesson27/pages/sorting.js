class sorting {
    selectors = {
        nameSortingButton: '.catalog-sort-list > li:nth-child(1) > label',
        priceSortingButton: '.catalog-sort-list > li:nth-child(2) > label',
        popularitySortingButton: '.catalog-sort-list > li:nth-child(3) > label',
        dateSortingButton: '.catalog-sort-list > li:nth-child(4) > label',
        ascSorting: '[for="input-sort-up"]',
        descSorting: '[for="input-sort-down"]',
    };
priceSortingButton() {
    cy.get(this.selectors.priceSortingButton).should('be.visible').click()
};

checkSorting(firstElementSelector, lastElementSelector) {
    cy.get(firstElementSelector).then((result) => {
       const resultA = result.number();
    })

    cy.get(lastElementSelector).then((result) => {
        const resultB = result.number();
    })
    //expect(resultA).to.be.greaterThan(resultB);
};

};
module.exports = new sorting ();
