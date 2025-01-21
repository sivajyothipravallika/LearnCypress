// practice test to select two items, add to cart and checkout
describe('ECommerce Test Suite', function(){
    it('Add to Cart Test', function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()
        cy.get('@productLocator').find('.product').each(($e1, indexedDB, $list) => {
            const textVeg = $e1.find('h4.product-name').text()
            if(textVeg.includes('Cashews')){
                cy.wrap($e1).find('button').click()
                // $e1.find('button').trigger('click')
            }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    })
})