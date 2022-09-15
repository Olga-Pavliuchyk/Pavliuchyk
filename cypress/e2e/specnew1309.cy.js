describe('SingUp',()=>{
  it('input',()=>{
    cy.visit('https://www.beaxy.com/register');
    cy.get('#popUp-register-email').type('verulanedanill@gmail.com');
    cy.get('#_pass').type('Sqrtywz123>');
    cy.get('#popUp-register-phone._valid-input').click();
    cy.get('[name="phoneNumber"]').type('0970951282');
      

    cy.get('div[class=selected-country-arrow]').click();
    cy.get('[country-code="DE"][class*=custom]',{timeout: 5000}).click();
    cy.get('#popUp-register-promo').type('Promo');
    cy.get('#custom-register-checkbox-third').click(); 
   
    cy.get('div[class="popUp-form-wrapper"] button').click(); // singUp
  });
});




