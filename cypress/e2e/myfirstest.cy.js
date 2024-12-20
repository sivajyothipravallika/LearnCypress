// my first test cases
// test cases are called as spec in js
describe('My First Test Suite', function(){

    it('My First Test Case', function(){
        // test step
        // cy is the global command which will help you to invoke any cypress commands.
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');
        
    })
})