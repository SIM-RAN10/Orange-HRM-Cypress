class Link_po{
//method to click on any link in the webpage
//parameter is passed, the text in the parameter
linkclick(link){

    cy.contains(link).click(); // this will click on any link with the text being passed from my test cases.
} 


}
export default Link_po;