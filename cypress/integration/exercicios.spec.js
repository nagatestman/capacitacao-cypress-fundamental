/// <reference types="cypress" />

//Todo teste começa com o it

describe('Primeira ETAPA', () => {
    
    it('Exercício 1', () => {
        cy.visit('http://zero.webappsecurity.com/');
        cy.get('#signin_button').click();
    })
    
    it('Exercício 2', () => {
        cy.visit('http://zero.webappsecurity.com/');
        cy.get('#signin_button').click();
        cy.get('h3').should('have.text', 'Log in to ZeroBank');
        cy.get('#user_login').type('emailteste123@hotmail.com');
        cy.get('#user_password').type('qwe123!');
        cy.get('#user_remember_me').click();
        cy.get('.offset3 > a').should('be.exist').and('be.visible');
        cy.get('.btn').click();
        cy.get('.alert').contains('Login and/or ')
    })
})

describe('Segundo ETAPA', () => {

    it('Exercicio 3', () => {
        cy.visit('http://zero.webappsecurity.com/');
        cy.get('#feedback > div > strong').click();
        cy.get('#feedback-title').should('have.text', 'Feedback');
        cy.get('#description > p').contains('Frequently Asked Questions');
        cy.get('#name').type('Renato');
        cy.get('#email').type('renato@gmail.com');
        cy.get('#subject').type('Perda de dinheiro na conta corrente');
        cy.get('#comment').type('Gostaria qual o telefone do SAC');
        cy.get('.btn-signin').click();
        cy.get('.offset3').contains('Thank you for your comments')
    })

    it('Exercicio 4', () => {
        cy.visit('http://zero.webappsecurity.com/');
        cy.get('#feedback > div > strong').click();
        cy.get('#feedback-title').should('have.text', 'Feedback');
        cy.get('#description > p').contains('Frequently Asked Questions');
        cy.get('#name').type('Renato');
        cy.get('#email').type('renato@gmail.com');
        cy.get('#subject').type('Perda de dinheiro na conta corrente');
        cy.get('#comment').type('Gostaria qual o telefone do SAC');
        cy.get('[type="reset"]').click();
        cy.get('#name').should('have.value', '');
        cy.get('#email').should('have.value', '');
        cy.get('#subject').should('have.value', '');
        cy.get('#comment').should('have.value', '');
    })
})

describe('ETAPA FINAL', () => {

    it.only('Exercicio 5', () => {
        cy.visit('https://youtube.com');
        cy.get('#search-input > #search').type('REM{enter}');
        cy.get(':nth-child(3) > :nth-child(1) > #dismissable > .text-wrapper > #meta > #title-wrapper > .title-and-badge > #video-title > yt-formatted-string.style-scope').click();
        cy.get('.ytp-ad-skip-button').click();
        cy.get('.ytd-watch-flexy > :nth-child(1) > .title > .style-scope').should('have.text', 'R.E.M. - Losing My Religion (Official Music Video)');
        cy.screenshot();
    })
})
