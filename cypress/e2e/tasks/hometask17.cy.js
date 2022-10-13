describe('Visual_terrasoft', () =>{
    beforeEach (() => {
        cy.viewport(1600,900);
        cy.visit('https://www.terrasoft.ua/');
        //cy.get('[class="copyrights"]', {timeout : 3000}).scrollIntoView({delay : 40});
    });

    it('First_page', () => {
        cy.get('[class="copyrights"]', {timeout : 3000}).scrollIntoView({delay : 40});
        cy.get('[class="ts-promise__items"]', {timeout : 3000}).eq(0).invoke('remove');
        cy.get('[class="ts-products__titles ts-products-titles"]').invoke('remove');
        cy.get('[class="ts-products__product ts-product"]').eq(3).invoke('remove');
        cy.get('[class="ts-products__screen"]').eq(0).invoke('remove');
        cy.matchImageSnapshot();
    })

    it('Studio', () => {
        cy.get('[class*="ts-products-titles__item"]:nth-child(1)').click();
        cy.get('[class*="creatio-region_br-top-left ts-products"]').matchImageSnapshot();
    })

    it('crmMarketing', () => {
        cy.get('[class~="ts-products-titles__title_child"]').eq(0).click();
        cy.get('[class*="creatio-region_br-top-left ts-products"]').matchImageSnapshot();
    })

    it('crmSales', () => {
        cy.get('[class~="ts-products-titles__title_child"]').eq(1).click();
        cy.get('[class*="creatio-region_br-top-left ts-products"]').matchImageSnapshot();
    })

    it('crmService', () => {
        cy.get('[class~="ts-products-titles__title_child"]').eq(2).click();
        cy.get('[class*="creatio-region_br-top-left ts-products"]').matchImageSnapshot();
    })

    it('ГалузевіРішення', () => {
        cy.get('[class*="ts-products-titles__item"]:nth-child(3)').click();
        cy.get('[class*="creatio-region_br-top-left ts-products"]').matchImageSnapshot();
    })

    it('Доповнення', () => {
        cy.get('[class*="ts-products-titles__item"]:nth-child(4)').click();
        cy.get('[class*="creatio-region_br-top-left ts-products"]').matchImageSnapshot();
    })    
  })