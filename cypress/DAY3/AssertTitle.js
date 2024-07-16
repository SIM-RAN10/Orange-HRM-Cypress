cy.visit('https://the-internet.herokuapp.com/');
cy.title().should('include','The Internet');

cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1');
cy.get('[id="finish"]').click({force:true});

cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
cy.get('')