// Home work:
// Напишите тест на фреймы по ссылке ниже https://demoqa.com/frames 
// (проверку напишите на ваше усмотрение, к примеру введите текст и проверьте его)

Cypress.on('uncaught:exception', (err) => {
    return false;
     });

describe ('frame' , () => {   
    it ('', () => {
      cy.visit('https://demoqa.com/frames');
      cy.get('iframe[id="frame1"]').then(($iframe) => {
        const $body = $iframe.contents().find('body');
          cy.wrap($body).find('#sampleHeading').then((vr) => {
          expect(vr.text()).to.be.equal('This is a sample page');
          })
      })
    })
})


// (https://demoqa.com/nestedframes) Напишите тест на переключение между фреймами

describe ('nestedFrames' , () => {   
  it ('', () => {
    cy.visit('https://demoqa.com/nestedframes');
    cy.get('#frame1').then($firstIframe => {
      const $secondIframe = $firstIframe.contents().find('iframe[srcdoc*="Child"]');
      cy.wrap($secondIframe).as('secondIframe');
      cy.get('@secondIframe').then($second => {      
        const $bodyOfSecond = $second.contents().find('body');
        cy.wrap($bodyOfSecond).invoke('text').should('eq', 'Child Iframe');
      })
    })
  });
});


