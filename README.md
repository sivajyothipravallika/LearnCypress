# LearnCypress
Learning Cypress By Building


# Cypress ASynchronous nature and its promise handling
synchronous => executes step by step  
async => executes all at once

It is very important to understand that cypress commands don't do anything at the moment they are invoked, but rather enqueue themselves to be run later. This is what we mean when we say cypress commands are asynchronous.

### Take a look at the example below
```
it('changes the URL when "awesome" is clicked', function(){
    cy.visit('/my/resource/path') // nothing happens yet
    cy.get('.awesome-selector').click()   // still nothing happening
    cy.url().should('include', '/my/resource/path#awesomeness') //nada.
})


// ok, the test function has finished executing...
// We've queued all of these commands and now
// cypress will begin running them in order!

```

Cypress doesn't kick off the browser automation magic until the test function exits.  
Every asynchronous step will return a promise which has the states such as rejection, resolved and pending.  

***.then()*** is used to check if the promise is resolved.  

### Noisy Promise Demonstration. Not valid code
```
it('changes the URL when "awesome" is clicked', function() {
    // THIS IS NOT A VALID CODE
    // THIS IS JUST FOR DEMONSTRATION
    return cy.visit('/my/resource/path')
    .then(() => {
        return cy.get('.awesome-selector')
    })
    .then(($element) => {
        // not analogous
        return cy.click($element)
    })
    .then(() => {
        return cy.url()
    })
    .then((url) => {
        expect(url).to.eq('/my/resource/path#awesomeness')
    })
})
```
### How cypress really looks, Promises wrapped up and hidden from us.
```
it('changes the URL when "awesome" is clicked', function() {
    cy.visit('/my/resource/path')
    cy.get('.awesome-selector').click()
    cy.url().should('include', '/my/resource/path#awesomeness')
    })
```

# Understanding the difference between JQUery methods and cypress commands  
text() is not a cypress command so the promises doesn't resolve.  
cypress supports JQuery methods and text() is one of them.  
Non Cypress commands cannot resolve promises by themselves. we need to manually resolve it by **.then()**.  

***we can use aliasing to reuse locators.***  

## Handling web controls UI using Cypress  
### verify and automate checkboxes using cypress  

