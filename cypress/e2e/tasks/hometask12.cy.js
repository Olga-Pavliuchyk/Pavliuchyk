// 1. Напишите тест на добавление товара в корзину https://yevheniiahlovatska.editorx.io/web-practice/product-page/croc-clutch
// Добавьте товар через кнопку add to card
// Дождитесь когда появится боковое меню корзины
// Проверьте что товар добавлен и соответствует выбранному


/*1) Так да не работает, потому что есть нюанс с iframe у cypress не так просто
взять элемент если он нахрдится в iframe(покажем вариант)

Вот можешь опираться на этот пример, посомтри: объясним что к чему
 it('AddCard', () => {
        cy.viewport(1600,900);
        cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/product-page/croc-clutch');
        cy.wait(6000);
        //Добавьте товар через кнопку add to card
        cy.get('[data-hook="add-to-cart"]').wait(2000).click();

        //Получить iframe
        cy.get('iframe')
        .then(($iframe) => {
          const $body = $iframe.contents().find('body');
          //Проверить что миникарт есть
          const miniCart = cy.wrap($body).find('.minicart');
          expect(miniCart).to.exist;
          //Взять cart-widget-name и его текст проверить что товар называется корректно
          cy.wrap($body).find('[data-hook="cart-widget-name"]').then((el) => {
            expect(el.text()).to.be.equal(' Croc Clutch ');
          })
        })
      });

*/
describe ('Add to cart' , () => {   
    it('', () => { 
        cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/product-page/croc-clutch');
        cy.get('[data-hook="product-title"]').invoke('text').then((prodTitle) => {
        expect(prodTitle).to.be.equal('Croc Clutch');
        cy.log(prodTitle);
        })
        cy.wait(10000);
        cy.get('[data-hook="add-to-cart"]').click();
        cy.wait(15000);
        cy.get('[class="cart-content"]', {timeout : 10000}).should('be.visible'); // не работает - ошибка Timed out retrying after 10000ms: Expected to find element: [class="cart-content"], but never found it.
        cy.get('[data-hook="cart-widget-name"]', {timeout : 10000}).invoke('text').should('eq', ' Croc Clutch ');
       
        }); 
  });



// 2) Напишите тест на страницу мультиплекс
// https://friends.multiplex.ua/login
// Перейдите на форму авторизации
// Проверьте переходы на:
// facebook
// google
// appleid

/*Молодец!
1) по последнему тесту у cypress имеет ограничение по навигации кросс линок,
там нужно попробовать в конфигурацию добавить experiment. in cypress.config
experimentalSessionAndOrigin: true,
*/

describe ('Multiplex' , () => {  
    beforeEach (() => {
        cy.visit('https://friends.multiplex.ua/login').viewport('ipad-mini');
        Cypress.on('uncaught:exception', (err) => {
            return false;
             });
    }); 
    it('Fb', () => {
        cy.get('a[href*="fb"]').click();
        //cy.get('[href="https://www.facebook.com/"]'); 
        cy.location('hostname').should('equal', 'www.facebook.com');
        //cy.location().should((newUrl) => {
        //expect(newUrl.host).to.eq('www.facebook.com')
        //})
        }); 

    it('Apple', () => {
        cy.get('[href*="aplogin"]').click();
        cy.location('hostname').should('equal', 'appleid.apple.com');     
   }); 

//     it('Google', () => {   //не смогла разобраться почему с google не работает 
//         cy.get('[href*="galogin"]').click();
//         cy.wait(7000);
//         //cy.get('[src*="accounts.google"]');
//         cy.location('hostname').should('equal', 'accounts.google.com');     
//    }); 
    
  });
