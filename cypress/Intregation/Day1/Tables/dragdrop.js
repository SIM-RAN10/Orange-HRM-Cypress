

describe('drag and drop', () => {
    it('test1', () => {

        cy.visit('https://v1.training-support.net/selenium/drag-drop');
        //trigger - mouse operations
        cy.get('#draggable').trigger('mousedown',{which : 1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup',{force:true})
        
    });
    it('test2', () => {

        cy.visit('https://v1.training-support.net/selenium/drag-drop');
        //trigger - mouse operations
        cy.get('#draggable').trigger('mousedown',{which : 3})
        cy.get('#dropzone2').trigger('mousemove').trigger('mouseup',{force:true})
        
        
    });
});