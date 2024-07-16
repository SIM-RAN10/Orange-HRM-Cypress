
describe('Orange tests', () => {
    it('test1', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        cy.get('[name="username"]').then(($username)=>{

            expect($username).to.have.attr('placeholder','Username')

            cy.wrap($username).type('Admin')

        })
        cy.get('[name="password"]').then(($password)=>{

            expect($password).to.have.attr('placeholder','Password')

            cy.wrap($password).type('admin123');
        })
        cy.get('.orangehrm-login-button').then(($login_btn)=>{

            expect($login_btn).to.have.attr(' Login ')

            cy.wrap($login_btn).click()
        })
        cy.get('.oxd-dropdown-menu').click();

        cy.get('.oxd-dropdown-menu').find('.oxd-userdropdown-link').each(($dropdown_ele)=>{

            if ($dropdown_ele.text()=='Logout'){

                cy.wrap($dropdown_ele).click();
            }
        })
        
    });
});