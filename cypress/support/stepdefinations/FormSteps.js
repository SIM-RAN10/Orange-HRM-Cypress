import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps"

Given('user opens the Simple form url',()=>{
    cy.visit('https://v1.training-support.net/selenium/simple-form');

})
When('user enters firstname, lastname, email, message',()=>{
    cy.get('#firstName').type('Sharmila');
    cy.get('#lastName').type('saren');
    cy.get('#email').type('sharmilasaren10@gmail.com');
    cy.get('#number').type('7862236665');
    cy.xpath('//textarea').type('Hello')
    

})
And('clicks on submit',()=>{
    cy.xpath('//input[@value="submit"]').click();

})
Then('An alert saying successful message has to be displayed.',()=>{
    cy.on('window:confirm',(alertmsg)=>{
        expect(alertmsg).to.equal('Thank You for reaching out to us, Sharmila saren');
        return true;
    })

})