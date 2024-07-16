///<reference types="cypress"/>

describe('OrangeHRM Suite', () => {
    it('Login Test1', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get("input[name='username']").type('Admin')
        cy.get("input[type='password']").type('admin123')
        cy.get('.orangehrm-login-button').type('login')
        
    });

    it('facebook Login', () => {

        cy.visit('https://www.facebook.com/')

        cy.get('input#email').type('sharmilasaren10@gmail.com')

        cy.get('#pass').type('@3sgsudk')

        cy.get('button[name="login"]').click()

    
        
    });

    it.only('using xpath test', () => {

        cy.visit('https://the-internet.herokuapp.com/login');

        cy.xpath('//input[@id="username"]').type('sgavjkm');

        cy.xpath('//input[@id="password"]').type('23ghjh');

        cy.xpath('//button[@class="radius"]').click();
        
    });
        
    });
