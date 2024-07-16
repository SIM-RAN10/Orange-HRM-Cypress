describe('Inclass suite', () => {
    it('Test1', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');

        cy.get('.input--focus').type('j');
        //Iterate over all the options
        cy.get('.oxd-autocomplete-option').each(($option)=>{
            if ($option.text()=='Joseph  Evans') {
                cy.wrap($option).click();
            }
        })
        
    });
});