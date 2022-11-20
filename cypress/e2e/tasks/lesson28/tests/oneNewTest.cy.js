///<reference types = "Cypress"/>


describe('Test', () =>{
    before(() =>{
        cy.viewport(1600,900);
        cy.visit('https://makeup.com.ua/');
        cy.wait(2000);
        cy.get('[id="popup__window"] [class="popup-close close-icon"]').click();
    })

    it('tesst', () => {
        cy.get('[class="simple-slider-list"]>li>div:nth-child(2) div').eq(0).then((element)=>{
            const productText = element.text()
            cy.log(productText)
        })
    })
})