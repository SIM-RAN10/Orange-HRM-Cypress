

describe('rahul', () => {
    it('frame test', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        //Step 1 - locator gor iframe
        cy.frameLoaded('#courses-iframe');
        //to interact with elements inside the frame use iframe()
        cy.iframe().contains('Blog').click();

        
    });
});