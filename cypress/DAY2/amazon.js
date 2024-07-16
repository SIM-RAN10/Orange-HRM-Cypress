describe('amazon Suite', () => {
    it('xpath using index function', () => {

        cy.visit('https://www.amazon.com/');
        //xpath for create a list
        cy.xpath('(//span[@class="nav-text"])[1]').click;
        //xpath for find a list or registry
        cy.xpath('(//span[@class="nav-text"])[2]').click;
        //xpath for Account
        cy.xpath('(//span[@class="nav-text"])[3]').click;
        //xpath for Today's Deal
        cy.xpath('(//a[@class="nav-a  "])[1]').click;
        //xpath for Customer service
        cy.xpath('(//a[@class="nav-a  "])[2]').click();
        
    });
});