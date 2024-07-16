describe('datepicker', () => {
    it('test1', () => {

        cy.visit('https://jqueryui.com/datepicker/');
        //Select
        cy.frameLoaded('.demo-frame');
        cy.iframe().xpath('//input[@id="datepicker"]').type('07/07/2024{enter}')
      
        
    });
});