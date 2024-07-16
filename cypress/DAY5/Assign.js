describe('The internet Suite', () => {
    it('test1', () => {

        cy.visit('https://the-internet.herokuapp.com/dynamic_loading/1');
        cy.xpath("//*[.='Start']").click();
        cy.wait(2000);
        // cy.contains('Hello World!').should('be.visible')
        
    });
    it('table test1', () => {

        cy.visit('https://the-internet.herokuapp.com/tables');
        cy.xpath('(//table)[1]/tbody/tr[3]/td[4]').should('include.text','$100.00');
        
    });
    it('table test2', () => {

        cy.visit('https://the-internet.herokuapp.com/tables');
        cy.xpath('(//table)[2]/tbody/tr[4]/td[2]').should('include.text','Tim');
   
    });
    it('window test', () => {

        cy.visit('https://the-internet.herokuapp.com/windows');

        cy.get("a[href='/windows/new']").invoke('removeAttr','target').click();

        // cy.origin('https://the-internet.herokuapp.com/windows/new',()=>{
        //     cy.visit('');
        //     cy.contains('New Window').click();
        // })
      
    });
    it('Alert test1', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get('button[onclick="jsAlert()"]').click();
        cy.on('window:alert',(alertmsg)=>{
            expect(alertmsg).to.equal('I am a JS Alert')

            return true;
        })
        cy.get('#result').should('have.text','You successfully clicked an alert')
           
    });
    it.only('Alert test2', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get('button[onclick="jsConfirm()"]').click();
        cy.on('window:confirm',(confirmmsg)=>{
            expect(confirmmsg).to.contains('I am a JS Confirm')
            return true;
        })
          
    });


});