describe('makemytrip Suite', () => {
    it('using xpath test', () => {

        cy.visit('https://www.makemytrip.com/');
        //xpath for Personal Account
        cy.xpath('//li[@class="active" and @data-acctype="personal" and @data-cy="personalLogin"]').click();
        //xpath for Mobile Number
        cy.xpath('//input[@type="text" and @class="font14 fullWidth" and @placeholder="Enter Mobile Number"]').type('7557001514');
        //xpath for continue button
        cy.xpath('//button[@type="button" and @class="capText font16" and @data-cy="continueBtn"]').click();
        
    });
});