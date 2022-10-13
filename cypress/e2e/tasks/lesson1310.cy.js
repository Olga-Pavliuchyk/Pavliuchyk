///<reference types = "Cypress"/>

// describe('cookies', () =>{


//     it.skip('getCookies', () => {
//     cy.viewport(1950,1235);
//     cy.visit('https://www.beaxy.com/');
//     cy.wait(10000);
//     cy.get('.modal-cookie-continue a', {timeout: 4000}).click();
//     cy.getCookie('beaxy_cookie_notificated', {timeout: 4000}).should('have.property', 'value', 'true');
//     })

//     it.skip('setCookies', () => {
//         cy.viewport(1950,1235);
//         cy.visit('https://www.beaxy.com/');
//         cy.wait(5000);
//         cy.setCookie('alphaSchool', 'true');
//         })

//     it.skip('clearCookies', () => {
//             cy.viewport(1950,1235);
//             cy.visit('https://www.beaxy.com/');
//             cy.wait(5000);
//             cy.clearCookies();
//             })
//             it.skip('clearCookie', () => {
//                 cy.viewport(1950,1235);
//                 cy.visit('https://www.beaxy.com/');
//                 cy.wait(5000);
//                 cy.clearCookie('_ga');
//                 })

//     it.skip('update', () => {
//     cy.viewport(1950,1235);
//     cy.visit('https://www.beaxy.com/');
//     cy.wait(5000);
//     cy.get('[class="buy_text"]').scrollIntoView({delay : 40});
//     cy.get('.modal-cookie-continue a', {timeout: 4000}).click();
//     cy.clearCookie('beaxy_cookie_notificated', {timeout: 4000}).then(function(){
//         cy.setCookie('beaxy_cookie_notificated', 'false').then(function(){
//             cy.getCookie('beaxy_cookie_notificated', {timeout:4000}).should('have.property', 'value', 'false')
//         })
//     })

//     it('deleteValueCookie', () => {
//         cy.viewport(1950,1235);
//         cy.visit('https://www.beaxy.com/');
//         cy.wait(5000);
//         cy.get('[class="buy_text"]').scrollIntoView({delay : 40});
//         cy.get('.modal-cookie-continue a', {timeout: 4000}).click();
//         cy.clearCookie('beaxy_cookie_notificated', {timeout: 4000}).then(function(){            
//                 cy.getCookie('beaxy_cookie_notificated', {timeout:4000}).should('have.property', 'value', 'false')
           
//         })
   
//                     })
        

    
 
//   })
// })

describe('localStorage', () =>{
    it('setlocalstorage', () => {
    cy.viewport(2500,1900);
    cy.visit('https://www.beaxy.com/');
    cy.wait(5000);
    cy.setLocalStorage('TestKey', 'TestValue');
    })
})
