// ***********************************************
// For more examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
export {}
declare global {
  namespace Cypress {
    interface Chainable {
      /**
      * Get a DOM element based on element locator value
      * @param elementLocator element locator string value
      * @param label element label string value
      * @example
      * // this command
      * cy.clickElementByLabel('button', 'Add to Cart')
      * // will click on this element
      * <button label="Add to Cart" />
      */
      clickElementByLabel(elementLocator: string, label: string):
      Chainable<any>
    }
  }
}

Cypress.Commands.add('clickElementByLabel', (elementLocator, label) => {

  Cypress.log({
    displayName: 'clickELementByLabel',
    message: {
      elementLocator,
      label
    },
    consoleProps() {
      return {
        'Click element by label': {
          elementLocator,
          label
        }
      }
    }
  });

  cy.contains(elementLocator, label, { log: false })
    .click({ log: false });
});

