// my first test cases
// test cases are called as spec in js

/// <reference types="Cypress"/>

describe('My First Test Suite', function(){

    it('My First Test Case', function(){
        // test step
        // cy is the global command which will help you to invoke any cypress commands.
        // below is the test case which will go to rahulshettyacademy and type ca on the search bar and filter the items
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        // selenium get hit url in browser, cypress get acts like findElement of selenium
        // getting only the visible elements using JQuery selector
       // cy.get('.product:visible').should('have.length', 4)
        // parent child chaining
        cy.get('.products').as('productLocator')
        // find - gets the descendant DOM elements
        cy.get('@productLocator').find('.product').should('have.length', 4)
        // click on the button for single product (second product in particular)
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
            console.log('sf')
        })

        // I need to add the item based on its name
        cy.get('@productLocator').find('.product')
        .each(($el, index, $list) => {
           const productName =  $el.find('h4.product-name').text()
           if(productName.includes('Cashews')){
            cy.wrap($el).find('button').click()
           // $el.find('button').trigger('click')
           }
        })
        // assert if logo text is correctly displayed
        cy.get('.brand').should('have.text', 'GREENKART')
       // this is to print in logs
       cy.get('.brand').then(function(logoelement){
        cy.log(logoelement.text())
       })
    })
})