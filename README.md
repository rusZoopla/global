**What to install**

This test suite is developed using Cypress 9.7.0. So you will need to install this specific version by running the following command:

`npm install cypress@9.7.0`

Ideally, you need to ensure you have got TypeScript installed. If not, run the following command:

`npm install --save-dev typescript`

**How to run the test**

To run the test please check `package.json` file's `scripts` section for various commands. If you want to run any of those, you need to prefix them with `npm run`, e.g. for runnning the test headed in Chrome, type `npm run cy:headed:chrome`.

**Observations**

1. While writing this test I have come across two application errors, e.g. `Uncaught exceptions`, so had to add lines 19-21 in `./cypress/support/index.ts`. See two exception screenshot examples in the root folder.
2. The final total is not $116.00, but $140.00 in the final step for United Kingdom. So I've written the assertion accordingly.

**Recording**

There is a video recording of a successfull test run in `./cypress/videos/magento.spec.ts.mp4`.

**Further improvements**

1. Initialise all element locators and save them into variables, e.g

```
const SEARCH_BAR = "#search"
```

This can be further refactored by extracting all variables into a separate json file in the `fixtures` folder, e.g.

```
ADD_TO_CART_LABEL = "Add to Cart"
GWYN_EDNURANCE_TEE_PATH = "/gwyn-endurance-tee.html"
```

2. DRY the code down by extracting repeating actions into separate functions, e.g.

```
export const searchForItem = (itemToSearchFor: string) => {
  cy.get(SEARCH_BAR)
    .clear()
    .type(itemToSearchFor + "{enter}");
}
```

These functions can also be extracted into Cypress Custom Commands in `./cypress/support/commands.ts` file, e.g.

```
EXAMPLE CUSTOM COMMAND
```

3. Another way of abstracting the implementation could use of Page Object Model (POM) or even Component Object Model (COM). COM being different from POM in that instead of creating a file (or class) for each page we would create one for each significant component on a page, e.g. Header. But POM/COM adds an extra layer of complexity, therefore could be debatable whether it's needed or not. Same can be said about the use of Cucumber. Cypress Custom Commands usually do the job fine if no business folks need to read and understand the test scenarios. Engineers are usually OK with reading and understanding the code without those additional layers.

4.
