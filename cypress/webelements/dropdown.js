describe('Dropdown tests', () => {
    it('test1', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        //Handling dropdown using value attribute
        cy.get('#dropdown-class-example').select('option2').should('have.value','option2');
        //option3
        cy.get('#dropdown-class-example').select('option3').should('have.value','option3');
        //option1
        cy.get('#dropdown-class-example').select('option1').should('have.value','option1');
        //select
        cy.get('#dropdown-class-example').select('').should('have.value','')
        
    });
    it('Select by text', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        //Handling dropdown using text/value attribute
        cy.get('#dropdown-class-example').select('option1').should('have.value','option1');
        //option3
        cy.get('#dropdown-class-example').select('option2').should('have.value','option2');
        //option1
        cy.get('#dropdown-class-example').select('option3').should('have.value','option3');
        //select
        cy.get('#dropdown-class-example').select('').should('have.value','')
   
    });
    it('Select by index', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        //Handling dropdown using index attribute
        cy.get('#dropdown-class-example').select(1).should('have.value','option1');
        //option3
        cy.get('#dropdown-class-example').select(2).should('have.value','option2');
        //option1
        cy.get('#dropdown-class-example').select(3).should('have.value','option3');
        //select
        cy.get('#dropdown-class-example').select('').should('have.value','')

        
        
    });
});