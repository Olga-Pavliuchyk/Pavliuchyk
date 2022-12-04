// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('clickOnElement', (elementLocator) =>{
    cy.get(`${elementLocator}`, {timeout: 4000}).click();
})


Cypress.Commands.add('findByLinkText', (text) =>{
   cy.xpath(`//a[contains(@href, '${text}')]`)
})

Cypress.Commands.add('getText', (selector) => {  
    let productName;
    cy.get(selector).eq(0)
    .then(($element) => {
      productName = $element.text()    
  }).then(() => {
    cy.wrap(productName)
  })
});

Cypress.Commands.add('getQuantityOfFeedbacks', (sel, nmb) =>{
  let quantOfFd1;
  cy.get(sel).eq(nmb)
  .then(($element) => {
    quantOfFd1 = parseFloat($element.text())    
}).then(() => {
  cy.wrap(quantOfFd1);
  cy.log(quantOfFd1);
  let quantOfFd2;
  cy.get(sel).eq(nmb+1)
  .then(($element) => {
    quantOfFd2 = parseFloat($element.text())    
}).then(() => {
  cy.wrap(quantOfFd2);
  cy.log(quantOfFd2);
  quantOfFd2 > quantOfFd1 ? cy.log('Количество отзывов у второго товара больше, чем у первого') : cy.log('Количество отзывов у первого товара больше, чем у второго');
})
})

})

Cypress.Commands.add('getCommentsCount', (selector, elementIndex) => {  
  let commentCount;
  cy.get(selector).eq(elementIndex).should('be.visible').invoke('text')
  .then((result) => {
      commentCount = parseInt(result);
}).then(() => {
  cy.wrap(commentCount)
})
});

Cypress.Commands.add('getNumber', (selector, elementIndex) => {  
  let price;
  cy.get(selector).eq(elementIndex).should('be.visible').invoke('text')
  .then((result) => {
      price = parseInt(result);
}).then(() => {
  cy.wrap(price)
})
});

Cypress.Commands.add('getPrice', (selector, elementIndex) => {  
  let price;
  cy.get(selector).eq(elementIndex)
  .then((result) => {
    price = Number(result.text());
}).then(() => {
  cy.wrap(price)
})
});