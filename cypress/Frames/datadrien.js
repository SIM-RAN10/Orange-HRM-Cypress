// Hooks in cypress
//before block will be executed before a describe block
before(() => {
    // I have to configure the example.json file for data
    cy.fixture('example').then((data)=>{
        globalThis.data= data;
    })

    
});
describe('Data driven testing', () => {
    it('orange HRM test', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.get("input[name='username']").type(data.username);
    cy.get("input[type='password']").type(data.password);
    cy.get('.orangehrm-login-button').click();
        
    });
});