/// <reference types="cypress"/>

class signature{
  private baseUrl:string = 'https://www.docusign.com/';
  openSig(){
    cy.visit(this.baseUrl); 
  };

  navigateToSigInterface(){
    cy.get("[data-cy='mobilenavhamburgermenu'] svg").click();
    cy.get("li:nth-of-type(1) > [data-cy='mobilenavlink']").click();
    cy.get("[data-cy='mobilenav'] div.css-xlbqg1 > div > div:nth-of-type(2) li:nth-of-type(1) span.css-llpyjt").click();
    cy.location("href").should("eq", "https://www.docusign.com/products/electronic-signature");
    cy.get("#\\32 T95y4pXIEofiwRXIMiAM5").click();
    cy.location("href").should("eq", "https://www.docusign.com/signature-generator");
    // cy.get("div.css-1ehugat canvas").click();
    // cy.get("div.css-1ehugat canvas").click();
  };

  drawSig(){
    cy.randomClick('canvas', 50, 50, { range: 3 });
     // Click slightly biased down
    cy.randomClick('canvas', 100, 100, { direction: 'down', range: 4 });

    // Click slightly biased right
    cy.randomClick('canvas', 150, 80, { direction: 'right', range: 2 });

    // cy.get('div.css-1ehugat canvas')
    //   .trigger('mousedown', { which: 1, clientX: 100, clientY: 100 })
    //   .trigger('mousemove', { which: 1, clientX: 150, clientY: 120 })
    //   .trigger('mousemove', { which: 1, clientX: 200, clientY: 140 })
    //   .trigger('mouseup');
  };

};

export default new signature;