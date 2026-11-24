/// <reference types="cypress" />

class openGoogle{
private name: string = '';
public score: number = 20;

openPage(){
  cy.visit('https://www.google.com');
  cy.get('#L2AGLb > .QS5gu').click();
}

  
}

export default new openGoogle();