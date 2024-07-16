describe('dynamic dropdown examples', () => {
    it('test1', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('.ui-autocomplete-input').type('in');
        //Iterate over all the options
        cy.get('.ui-menu-item').each(($option)=>{
            if ($option.text()=='Saint Lucia') {
                cy.wrap($option).click();
            }
        })
        
    });
    it('dynamic - approach 2', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('#autocomplete').type('an');
        cy.get('.ui-menu-item').contains('Poland').click();

        
        
    });
});