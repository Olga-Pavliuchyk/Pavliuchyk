/// <reference types = 'Cypress'/>
import toolBar from '../base/toolBar'


describe('Toolbar', () => {
 
    beforeEach(() => {
      cy.visit('http://autopract.com');
      cy.viewport(1600, 900).wait(2000);
      cy.clickOnElement('[aria-label="Close"]');
     }); 

    it('open page in Home', () => {
      toolBar.openPageOnSectionHome('beauty');
    });

    it('open page in Shop', () => {
      toolBar.openPageOnSectionShop('right');
    });

    it('open page in Products', () => {
      toolBar.openPageOnSectionProducts('image outside');
    });

    it('open page in Features', () => {
      toolBar.openPageOnSectionFeatures('order success');
    });

    it('open page in Pages', () => {
      toolBar.openPageOnSectionPages('typography');
    });

    it('open page in Blogs', () => {
      toolBar.openPageOnSectionBlogs(' blog details ');
    });

  });