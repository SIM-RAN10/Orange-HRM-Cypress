describe('Practice tests', () => {
    it('test1 - URL assertions', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.url().should('include','AutomationPractice');

        cy.title().should('include','Practice Page');

        cy.get('[name="show-hide"]').should('be.visible');

        cy.get('#hide-textbox').click();

        cy.get('[name="show-hide"]').should('not.be.visible');

        cy.get('.ui-autocomplete-input').type('Wednesday').should('have.value','Wednesday');

        cy.xpath("//*[@id='checkBoxOption1']").check().should('be.checked');

        cy.xpath("//*[@id='checkBoxOption1']").unckeck().should('not.be.checked');

        
    });
});