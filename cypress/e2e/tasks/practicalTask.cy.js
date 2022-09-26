// describe ('frame' , () => {   
//     it('new', () => { 
//         cy.viewport(1600,1024);
//         cy.visit('http://the-internet.herokuapp.com/iframe');
//         cy.wait(3000);
//         cy.get('iframe').then(function($iFrame){
//             const iframe = $iFrame.contents().find('body');
//             cy.wrap(iframe).clear().type('Hello')
//         })
//         }); 
//   });

describe ('frame' , () => {   
    xit('new2', () => { 
        cy.viewport(1600,1600);
        cy.visit('https://elfsight.com/ru/instagram-feed-instashow/create/');
        cy.wait(3000);
        cy.get('iframe').then(function($iFrame){
            const iframe = $iFrame.contents().find('body');
            cy.wrap(iframe).find('.ea-editor-templates-header').then((el) =>{
                expect(el.text()).to.be.equal('Select a template to start with');
            })
        })
    }); 


    it ('Test 3 - First icon title check', () => {
    cy.visit('https://elfsight.com/ru/instagram-feed-instashow/create/');
    cy.viewport(1300,768);
    cy.wait(5000);
    cy.get('iframe').then(function($iframe){
        const iframe = $iframe.contents().find('body');
        cy.wrap(iframe).find('[title="Slider"] span').then((el) => {
            expect(el.text()).to.contains('Slider');
        });
    });
    });

    it ('Test 4 - Button click', () => {
        cy.visit('https://elfsight.com/ru/instagram-feed-instashow/create/');
        cy.viewport(1300,768);
        cy.wait(5000);
        cy.get('iframe').then(function($iframe){
            const iframe = $iframe.contents().find('body');
            cy.wrap(iframe).find('[class*="actions-customize"]').click();
                });
            })

    it.only('new',()=>{
    cy.viewport(1600,1080);
                    cy.visit('https://yevheniiahlovatska.editorx.io/web-practice/product-page/croc-clutch');
                    cy.wait(5000);
                    cy.get('[data-hook="add-to-cart"]').click();
                    cy.wait(30000);
                    cy.get('iframe').then(function($iframe){
                      const iframe = $iframe.contents().find('body');
                      cy.wrap(iframe).find('[class="item-name"]').then((tt)=>{
                        expect(tt.text()).to.contains(' Croc Clutch ');
                      })
                    })
                  });
                


})

