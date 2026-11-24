/**
 * Click at a coordinate with small random offsets.
 * @param selector - The element to click
 * @param baseX - base x-coordinate relative to the element
 * @param baseY - base y-coordinate relative to the element
 * @param options - optional object to bias the click: {direction, range}
 */
Cypress.Commands.add(
  'randomClick',
  (
    selector: string,
    baseX: number,
    baseY: number,
    options?: { direction?: 'up' | 'down' | 'left' | 'right'; range?: number }
  ) => {
    const range = options?.range ?? 5; // maximum pixels to vary click
    cy.get(selector).then(($el: JQuery<HTMLElement>) => {
      const rect = $el[0].getBoundingClientRect();

      // generate random offset within range
      let offsetX = Math.floor(Math.random() * range * 2) - range; // -range to +range
      let offsetY = Math.floor(Math.random() * range * 2) - range;

      // apply directional bias if any
      if (options?.direction) {
        switch (options.direction) {
          case 'up':
            offsetY = -Math.abs(offsetY);
            break;
          case 'down':
            offsetY = Math.abs(offsetY);
            break;
          case 'left':
            offsetX = -Math.abs(offsetX);
            break;
          case 'right':
            offsetX = Math.abs(offsetX);
            break;
        }
      }

      const clickX = rect.left + baseX + offsetX;
      const clickY = rect.top + baseY + offsetY;

      cy.wrap($el).click(clickX, clickY, {multiple: true, force:true});
    });
  }
);