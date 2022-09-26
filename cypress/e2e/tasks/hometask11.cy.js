// Напишите тест на авторизацию https://yevheniiahlovatska.editorx.io/web-practice/
/*Comments
0) Тут можно добавить ожидание - 
cy.get('[aria-label~="account"]', { timeout: 6000 })
      .should("exist")
      .should("be.visible");
1) [aria-label~="account"] div. можно было не указывать div он тебе и так найдет текст

cy.get('[aria-label~="account"]')
      .invoke("text")
      .should("eq", " fortestonly");
*/


describe ('Authorization' , () => {   
  it('', () => { 
      cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/');
      cy.wait(7000); // иначе не открывалось окно login (при неявном ожидании тоже)
      cy.get('[data-testid="section-container"] button').click(); // Log in
      cy.wait(4000);
      cy.get('button[data-testid*="SignUp"]').click(); // Log in
      cy.get('[data-testid*="Email"] button', {timeout : 5000}).click(); // Log in with Email
      cy.get('input[id*="emailInput"]').type('fortestonly@mail.com', {delay : 20}); 
      cy.get('input[id*="passwordInput"]').type('Qwerty123*', {delay : 20});
      cy.get('[id*="okButton"] button').click();
      cy.get('[aria-label~="account"]').should('exist').should('be.visible');
      cy.get('[aria-label~="account"] div').eq(0).invoke('text').should('eq', ' fortestonly');
      }); 
});


// Напишите тест на форму на отправку комментария
// https://yevheniiahlovatska.editorx.io/web-practice/post/what-to-wear-to-a-blacktie-event
/* Comments:
 1) поменяй ссылку и тест начнет работать и проходить - https://yevheniiahlovatska.editorx.io/web-practice/post/manage-your-blog-from-your-live-site
 2) Это можно вынести выше перед describe 
  Cypress.on('uncaught:exception', (err) => { //ошибка Error: ResizeObserver loop limit exceeded
    return false;
     });
 3) Вообще молодец! Еще бы эти ожидания вынести в конфиг - cy.wait(5000);
*/

describe ('Добавление комментария' , () => {
   it('Авторизация сразу+удаление', () => {
    cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/post/what-to-wear-to-a-blacktie-event').viewport('ipad-mini');
    cy.wait(9000);
    cy.get('[data-testid="section-container"] button').eq(0).click();
    Cypress.on('uncaught:exception', (err) => { //ошибка Error: ResizeObserver loop limit exceeded
    return false;
     });
    cy.get('[data-testid="signUp.switchToSignUp"]').click();
    cy.get('[id*="Email"] button').click();
    cy.get('[type="email"]').type('fortestonly@mail.com', {delay : 20});
    cy.get('[type="password"]').type('Qwerty123*', {delay : 20});
    cy.get('[data-testid="submit"] button').click();
    cy.wait(5000);
    cy.get('[data-hook="recent-posts"]').scrollIntoView();
    cy.get('[data-hook="comment-box-placeholder"]').eq(0).click();
    cy.get('[aria-describedby="placeholder-editor"]').type('comment1');
    cy.get('[data-hook="submit-button"]').click();
    cy.get('#viewer-foo', {timeout : 5000}).eq(0).should('have.text', 'comment1');
    cy.wait(5000);
    cy.get('[data-hook="actions-menu-btn"] svg').eq(0).scrollIntoView().click();
    cy.get('[data-content="Delete"]').click();
    cy.contains('[data-hook="submit-button"]', 'Delete').click();
  });
});


describe ('Добавление комментария' , () => {
 
  it('Авторизация после', () => {
    cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/post/what-to-wear-to-a-blacktie-event').viewport(768,1024);
    cy.wait(9000);
    cy.get('[data-hook="recent-posts"]').scrollIntoView();
    cy.get('button[data-hook="comment-box-placeholder"]', {timeout : 10000}).eq(0).click();
    Cypress.on('uncaught:exception', (err) => {  
      return false;
      
      
    });
    cy.get('[aria-describedby="placeholder-editor"]').type('something');
    cy.contains('Publish').click();
    cy.get('[data-testid="signUp.switchToSignUp"]').click();
    cy.wait(4000);
    cy.get('[data-testid="buttonElement"]').click();
    cy.get('input[type="email"]').type('fortestonly@mail.com', {delay : 20}); 
    cy.get('input[type="password"]').type('Qwerty123*', {delay : 20});
    cy.get('[data-testid="submit"] button').click();
    cy.get('#viewer-foo', {timeout : 5000}).eq(0).should('have.text', 'something');
  });
});
