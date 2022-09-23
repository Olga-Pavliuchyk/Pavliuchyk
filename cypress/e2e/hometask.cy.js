// //Напишите тест на форму на отправку комментария 
// // https://yevheniiahlovatska.editorx.io/web-practice/post/what-to-wear-to-a-blacktie-event
// describe ('Комментарий' , () => {
 
//     it('Authorization after', () => {
//       cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/post/what-to-wear-to-a-blacktie-event').viewport(768,1024);
//       cy.wait(5000);
//       cy.get('[data-hook="recent-posts"]').scrollIntoView();
//       cy.get('button[data-hook="comment-box-placeholder"]').eq(0).click();
//       Cypress.on('uncaught:exception', (err) => { //ошибка Error: ResizeObserver loop limit exceeded 
//         return false;
//       });
//       cy.get('[aria-describedby="placeholder-editor"]').type('something');
//       cy.contains('Publish').click();
//       cy.get('[data-testid="signUp.switchToSignUp"]').click();
//       cy.get('[data-testid="buttonElement"]').click();
//       cy.get('input[type="email"]').type('fortestonly@mail.com', {delay : 20}); 
//       cy.get('input[type="password"]').type('Qwerty123*', {delay : 20});
//       cy.get('[data-testid="submit"] button').click();
//       cy.get('#viewer-foo', {timeout : 5000}).eq(0).should('have.text', 'something');
//     });
//   });


  describe ('Комментарий' , () => {
    // before (() => {

    // });
 
    it('Authorization before', () => {
      cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/post/what-to-wear-to-a-blacktie-event').viewport('ipad-mini');
      cy.wait(7000);
      cy.get('[data-testid="section-container"] button').eq(0).click();
      Cypress.on('uncaught:exception', (err) => { 
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
      cy.get('[data-hook="submit-button"]').click();
    });
  });





  //[data-hook="recent-posts"]
  //{duration : 1200}
  //{force : true}
  //cy.get('#root-comment-box-start').scrollIntoView();
  //cy.get('[data-hook="show-live-comments-start"]').contains('Show 1 New Comment').invoke('text').should('eq', 'Show 1 New Comment');