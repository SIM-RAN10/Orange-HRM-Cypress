describe('windows and tabs', () => {
    it('tab test', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.xpath("//*[.='Open Tab']").invoke('removeAttr','target').click();

        cy.origin('https://www.qaclickacademy.com/',()=>{

            cy.contains("Access all our Courses").click();
        })
        
    });
    it.only('window test', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get("#openwindow").invoke('removeAttr','target').click();

        cy.origin('https://www.qaclickacademy.com/',()=>{
            cy.visit('')
            cy.contains("Access all our Courses").click();
        })



        
    });
});