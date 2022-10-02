describe ('Sliders' , () => {  
    beforeEach (() => {
        cy.visit('https://mui.com/material-ui/react-slider/').viewport(768,1024);
    }); 

    it('Small steps', () => { //слайд 1 шаг вправо от значения по умолчанию
        cy.get('h3#small-steps', {timeout : 3000}).scrollIntoView();
        cy.get('[class~="css-1t2bqnt"]').eq(5) 
        .invoke('attr', 'style', 'left: 0%; width: 73.3333%;')
        .should('have.attr', 'style', 'left: 0%; width: 73.3333%;')
        cy.get('[class*="css-exkjcx"] span:nth-child(18)')
        .invoke('attr', 'style', 'left: 73.3333%;')
        .should('have.attr', 'style', 'left: 73.3333%;');
        cy.get('[aria-label="Small steps"]')
        .invoke('attr', 'aria-valuenow', '6e-8')
        .invoke('attr', 'aria-valuetext', '6e-8°C')
        .invoke('attr', 'value', '6e-8')
        .should('have.attr', 'aria-valuenow', '6e-8')
        .should('have.attr', 'aria-valuetext', '6e-8°C')    
        .should('have.attr', 'value', '6e-8');
        cy.get('[class="MuiSlider-valueLabelLabel"]').eq(4)
        .invoke('text', '6e-8')
        .should('have.text', '6e-8')
    })

    it('Custom marks', () => { 
        cy.get('h3#custom-marks', {timeout : 3000}).scrollIntoView();
        cy.get('[class*="css-9cct2k"] span:nth-child(2)')
        .invoke('attr', 'style', 'left: 0%; width: 40%;')
        .should('have.attr', 'style', 'left: 0%; width: 40%;');
        cy.get('[class*="css-9cct2k"] [class*="css-7drnjp"]')
        .invoke('attr', 'style', 'left: 40%;')
        .should('have.attr', 'style', 'left: 40%;');
        cy.get('[aria-label="Custom marks"]')
        .invoke('attr', 'aria-valuenow', '40')
        .invoke('attr', 'aria-valuetext', '40°C')
        .invoke('attr', 'value', '40')
        .should('have.attr', 'aria-valuenow', '40')        
        .should('have.attr', 'aria-valuetext', '40°C')        
        .should('have.attr', 'value', '40');
    });

    it('Range slider', () => {  //выставление значений 75-100
        cy.get('h2#range-slider', {timeout : 3000}).scrollIntoView();
        cy.get('[class*="css-1t2bqnt"]').eq(9)
        .invoke('attr', 'style', 'left: 75%; width: 25%;')
        .should('have.attr', 'style', 'left: 75%; width: 25%;');
        cy.get('[data-index="1"][class*="css-7drnjp"]')
        .invoke('attr', 'style', 'left: 100%;')
        .should('have.attr', 'style', 'left: 100%;');
        cy.get('[data-index="1"][aria-label="Temperature range"]')
        .invoke('attr', 'aria-valuenow', '100')
        .invoke('attr', 'aria-valuetext', '100°C')
        .invoke('attr', 'value', '100')
        .should('have.attr', 'aria-valuenow', '100')        
        .should('have.attr', 'aria-valuetext', '100°C')        
        .should('have.attr', 'value', '100');
        cy.get('[class*="css-7drnjp"]').eq(9)
        .invoke('attr', 'style', 'left: 75%;')
        .should('have.attr', 'style', 'left: 75%;');
        cy.get('[data-index="0"][aria-label="Temperature range"]')
        .invoke('attr', 'aria-valuenow', '75')
        .invoke('attr', 'aria-valuetext', '75°C')
        .invoke('attr', 'value', '75')
        .should('have.attr', 'aria-valuenow', '75')        
        .should('have.attr', 'aria-valuetext', '75°C')        
        .should('have.attr', 'value', '75');        
    });

    it('Slider with input field', () => { 
        cy.get('h2#slider-with-input-field', {timeout : 3000}).scrollIntoView();
        cy.get('[aria-labelledby="input-slider"] span:nth-child(2)')
        .invoke('attr', 'style', 'left: 0%; width: 80%;')
        .should('have.attr', 'style', 'left: 0%; width: 80%;');
        cy.get('[aria-labelledby="input-slider"] span:nth-child(3)')
        .invoke('attr', 'style', 'left: 80%;')
        .should('have.attr', 'style', 'left: 80%;');
        cy.get('input[data-index="0"][aria-labelledby="input-slider"]')
        .invoke('attr', 'aria-valuenow', '80')
        .invoke('attr', 'value', '80')
        .should('have.attr', 'aria-valuenow', '80')      
        .should('have.attr', 'value', '80'); 
        cy.get('input[type="number"]')
        .invoke('attr', 'value', '80')
        .should('have.attr', 'value', '80');
    });

    it('Music player (time only)', () => {  //2.45 прошло, 0.35 остается 
        cy.get('h3#music-player', {timeout : 3000}).scrollIntoView();
        cy.get('[class*="css-xtm5wj"] span:nth-child(2)')
        .invoke('attr', 'style', 'left: 0%; width: 82.5%;')
        .should('have.attr', 'style', 'left: 0%; width: 82.5%;');
        cy.get('[class*="css-xtm5wj"] span:nth-child(3)')
        .invoke('attr', 'style', 'left: 82.5%;')
        .should('have.attr', 'style', 'left: 82.5%;');
        cy.get('[aria-label="time-indicator"]')
        .invoke('attr', 'aria-valuenow', '165')
        .invoke('attr', 'value', '165')
        .should('have.attr', 'aria-valuenow', '165')      
        .should('have.attr', 'value', '165');
        cy.get('[class~="css-3xfhk7"] p:nth-child(1)')
        .invoke('text', '2:45')
        .should('have.text', '2:45');
        cy.get('[class~="css-3xfhk7"] p:nth-child(2)')
        .invoke('text', '-0:35')
        .should('have.text', '-0:35');
    });
})