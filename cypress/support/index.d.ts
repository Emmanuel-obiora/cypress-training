/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    randomClick(
      selector: string,
      baseX: number,
      baseY: number,
      options?: { direction?: 'up' | 'down' | 'left' | 'right'; range?: number }
    ): Chainable<JQuery<HTMLElement>>;
  }
}