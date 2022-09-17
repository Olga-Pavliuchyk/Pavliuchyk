/* Напишите тест на окно Авторизации https://www.beaxy.com/ */

describe ('Авторизация' , () => {
    before (() => {
        cy.visit('https://www.beaxy.com/').viewport(1199,900);  /* кнопка login появляется в разрешении от 1199 */
    });
    it('Login', () => {
        cy.wait(5000); /* при неявном ожидании в строке клика на кнопку login тест выдавал ошибку, поэтому здесь и далее использовала явное (у меня сейчас общ. wifi в поездке, стабильность и скорость под вопросом) */
        cy.get('[class*=header-buttons] [data-tomodal=login]').click();  
        cy.get('#popUp-login-email').type('fortestonly@mail.com');
        cy.get('#popUp-login-password').type('Qwerty123*');
        cy.get('#login-checkbox').click();
        cy.get('[class*=form-login] button').click();
        cy.get('[data-at=info-container_name]', {timeout : 6000}).invoke('text').should('eq', 'fortestonly@mail.com');
    });
});

/* Напишите тест на страницу careers https://www.beaxy.com/careers/ , где будут проверены все заголовки h1/h2/h3 на странице */

describe ('Careers' , () => {   /* проверила что в верстке моб и деск версии приложения h1/h2/h3 те же самые, viewport не указывала */
    before (() => {
        cy.visit('https://www.beaxy.com/careers/');
    });
    it('Заголовки', () => { 
        cy.get('[class*=header] h1').invoke('text').should('eq', ' Join a global team working on the future of finance');
        cy.get('[class="body-container"] h2').invoke('text').should('eq', ' Why join Beaxy?');
        cy.get('[class="footer-header"] h2').invoke('text').should('eq', ' Want to be part of our team?');
        cy.xpath('//div[@class="body-content__item"][1]/h3').invoke('text').should('eq', ' Bridge gaps'); 
        cy.xpath('//div[@class="body-content__item"][2]/h3').invoke('text').should('eq', ' Connect globally'); 
        cy.xpath('//div[@class="body-content__item"][3]/h3').invoke('text').should('eq', ' Build powerfully'); 
        cy.xpath('//div[@class="body-content__item"][4]/h3').invoke('text').should('eq', ' Value driven'); 
        cy.xpath('//div[@class="body-content__item"][5]/h3').invoke('text').should('eq', ' Opportunities for everyone');
        cy.xpath('//div[@class="body-content__item"][6]/h3').invoke('text').should('eq', ' Empowering freedom');  /* селекторы можно было короче/проще, но руководствовалась тем что по селектору видно h1/h2/h3 */
    });
});

/* Напишите тест на страницу блог https://www.beaxy.com/blog/ , где необходимо проверить первый пост. (наличие картинки и названия поста) */

describe ('Blog' , () => {   
    before (() => {
        cy.visit('https://www.beaxy.com/blog');
    
    });
    it('Первый пост', () => {
        cy.wait(8000); 
        cy.get('button[class="show_all_pagi"]').click();
        cy.xpath('//div[@class="all_pagi active"]//a[@class="page-numbers"][last()]', {timeout : 8000}).click();
        cy.xpath('//div[@class="blog-item"][last()]//img').should('exist').should('be.visible'); 
        cy.xpath('(//a[@class= "item-body__title"])[last()]').should('exist').should('be.visible');
    });
});