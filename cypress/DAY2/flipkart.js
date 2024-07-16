describe('flipkart Suite', () => {
    it('using CSS Selectors test', () => {

        cy.visit('https://www.flipkart.com/');
        cy.get('.a[title="Account"]').click();
        
    });
});