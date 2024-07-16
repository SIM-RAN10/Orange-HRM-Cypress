describe('ebay Suite', () => {
    it('xpath using text function', () => {

        cy.visit('https://www.ebay.com/');
        //xpath for Signin
        cy.xpath('//a[.="Sign in"]').click;
        //xpath for username
        cy.xpath('//input[@id="userid"]').type('sharmilabnkwb@gmail.com');
        //xpath for continue button
        cy.xpath('//button[@id="signin-continue-btn"]').click();
        
        
        
    });
});