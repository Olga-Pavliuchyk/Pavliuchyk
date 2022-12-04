import {filterSelectors} from './selectorsPracticeLuma';
import {catalogPageSelectors} from './selectorsPracticeLuma';
//import {toolbarSelectors} from './selectorsPracticeLuma';

class filters {

    filterBySize(chosenSize) {

        cy.get(filterSelectors.filterName).eq(1)
        .invoke('attr', 'aria-selected', 'true')
        .invoke('attr', 'aria-expanded', 'true')
        .should('have.attr', 'aria-selected', 'true')
        .should('have.attr', 'aria-expanded', 'true');
        cy.get(filterSelectors.filterContent).eq(1)
        .invoke('attr', 'aria-hidden', 'false')
        .invoke('attr', 'style', 'display: block;')
        .should('have.attr', 'aria-hidden', 'false')
        .should('have.attr', 'style', 'display: block;');
           
        cy.get(filterSelectors.uncoveredListOfFilters).then(($result) => {
            let size = chosenSize.substring(14,16);
            if($result.text().includes(size)) {
                cy.get(chosenSize).click({force: true});
                cy.get(catalogPageSelectors.prodSizeSelected).eq(0).invoke('attr', 'option-id').then((result)=> {
                    const sizeID = Number(result);
                    cy.location().should((result) =>{
                        expect(result.search).to.eq(`?size=${sizeID}`);
                    }) 
                })
                cy.get(catalogPageSelectors.prodSizeSelected).eq(0).invoke('attr', 'option-label').then((result) =>{
                    let sizeTitle = result.substring(0,2);
                    cy.wrap(sizeTitle).as('sizeTitle');
                    cy.get(filterSelectors.selectedCurrentFilter).should('be.visible').invoke('text').then((result) => {
                        let filterValue = result.substring(0,2);
                        expect(sizeTitle).to.be.equal(filterValue);
                })
                });          
            }
            else {      
                cy.log('This size is not available for this page'); 
            }
        })

           
    } 

   filterByPrice(filterRange) {

    cy.get(filterSelectors.filterName).eq(2)
    .invoke('attr', 'aria-selected', 'true')
    .invoke('attr', 'aria-expanded', 'true')
    .should('have.attr', 'aria-selected', 'true')
    .should('have.attr', 'aria-expanded', 'true');
    cy.get(filterSelectors.filterContent).eq(2)
    .invoke('attr', 'aria-hidden', 'false')
    .invoke('attr', 'style', 'display: block;')
    .should('have.attr', 'aria-hidden', 'false')
    .should('have.attr', 'style', 'display: block;');
    
    cy.get(filterSelectors.uncoveredListOfFilters).then(($result) =>{
        let priceRange = filterRange.substring(14,16);
        if($result.text().includes(priceRange)) {
            cy.clickOnElement(filterRange);
    cy.get(catalogPageSelectors.productPrice).eq(0).invoke ('attr', 'data-price-amount').then((result)=> {
            const price = Number(result);
            priceRange = Number(priceRange);
            expect(price).to.be.greaterThan(priceRange)&&expect(price).to.be.lessThan(priceRange+10);
        })
        cy.get(filterSelectors.selectedCurrentFilter).should('be.visible');    
    } 
        else {
        cy.log('This price range is not available for this page'); 
    }
    }


    )}

    

    filterByColor(color) {

        cy.get(filterSelectors.filterName).eq(3)
        .invoke('attr', 'aria-selected', 'true')
        .invoke('attr', 'aria-expanded', 'true')
        .should('have.attr', 'aria-selected', 'true')
        .should('have.attr', 'aria-expanded', 'true');
        cy.get(filterSelectors.filterContent).eq(3)
        .invoke('attr', 'style', 'display: block;')
        .should('have.attr', 'style', 'display: block;');

                cy.clickOnElement(color);
                cy.get(catalogPageSelectors.productColor).eq(0).invoke ('attr', 'option-selected').then((result)=> {
                        const selectedColor = Number(result);   
                        cy.log(selectedColor);   
                        cy.location().should((result) =>{
                            expect(result.search).to.eq(`?color=${selectedColor}`);
                        })
                    })                
                cy.get(filterSelectors.selectedCurrentFilter).should('be.visible').invoke('text').then((result) => {
                        let filterValue = result.substring(0,3);
                        cy.get(catalogPageSelectors.productColorSelected).invoke('attr', 'option-label').then((result) =>{
                            let selected = result.substring(0,3);
                            expect(filterValue.localeCompare(selected)).to.be.equal(0);
                        })
                });            
      
        }

    filterByMaterial(material) {

        cy.get(filterSelectors.filterName).eq(4)
        .invoke('attr', 'aria-selected', 'true')
        .invoke('attr', 'aria-expanded', 'true')
        .should('have.attr', 'aria-selected', 'true')
        .should('have.attr', 'aria-expanded', 'true');
        cy.get(filterSelectors.filterContent).eq(4)
        .invoke('attr', 'style', 'display: block;')
        .should('have.attr', 'style', 'display: block;');

        cy.get(material).then(($res) => {
            if($res.is(':visible')) {
                cy.clickOnElement(material);
            }
            else {
                cy.log('This material is not available for this page')
            }
        })
       //не дописан    
            
    }
    
    


    
    
    } module.exports = new filters();