describe('redBus Suite', () => {
    it('using xpath test', () => {

        cy.visit('https://www.redbus.com/');
        //xpath for Login
        cy.xpath('//div[@class="rdc-login"]').click();
        //xpath for Sign In
        cy.xpath('//li[@id="signInLink"]').click();
        cy.wait(2000)
        //xpath for Sign in with Google button
        // cy.xpath('//span[@id="button-label"]').click()
        //xpath for Manage Booking
        cy.xpath('//div[@class="manageHeaderLbl"]').click();
        //xpath for cancel
        cy.xpath('//li[@data-label="Cancel"]').click();
        //xpath for enter ticket no.
        cy.xpath('//input[@placeholder="Enter Ticket No"]').type('6000522');
        //xpath for Email
        cy.xpath('//input[@placeholder="Enter Email"]').type('sharmilabnkwb@gmail.com');
        //xpath for select passengers
        cy.xpath('//div[@class="button-comp-lbl bg-color-d84e55"]').click();

       


        
    });
});