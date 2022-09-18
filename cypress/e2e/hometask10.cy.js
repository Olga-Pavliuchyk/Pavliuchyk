/* Написать тест на проверку калькулятора https://www.beaxy.com/
Ввести любое значение
Проверить на соответствие сумму которая была рассчитана
От 2-х валют */ 

describe ('Калькулятор' , () => {   /* */
    before (() => {
        cy.visit('https://www.beaxy.com/');
        cy.get('[class="modal-cookie-continue"]', {timeout : 5000}).click();
    });

    it('BEAMBTC', () => { 
        cy.get('[class="widget__select-block-active-quote"]', {timeout : 5000}).scrollTo('top', {ensureScrollable: false}).click();
        cy.get('[data-name="BEAM"]', {timeout : 5000}).click();
        cy.get('[placeholder="Enter amount"]').clear();
        cy.get('[placeholder="Enter amount"]').type('1');
        cy.get('[class="widget__output-data"]').invoke('text').should('eq', '120481.92771084');
    });

});
/* выдает такую ошибку, не смогла разобраться как ее избежать. 

Timed out retrying after 4050ms: cy.click() failed because this element:
<div class="select-block-drop-list__item" data-name="BEAM" data-currentname="BEAMBTC" data-fullname="BEAMBTC" data-precission="7">BEAM</div>
is being covered by another element:
<div class="header-container">...</div> */

//notes
//cy.get('[class="home-table-body"]').scrollTo('bottom');
//cy.get('[class="widget__select-block-active-quote"]', {timeout : 5000}).click();
//cy.get('[class="home-table-body"]').scrollTo("bottom").contains('Buy').click();
//cy.scrollTo(0,500);
//cy.get('[class="custom-widget"]').scrollTo('top', {ensureScrollable: false});