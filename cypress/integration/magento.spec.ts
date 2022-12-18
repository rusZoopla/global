describe("Magento", ()=> {
  it("searches for and adds items to cart", ()=> {

    // navigate to the homepage of the app
    cy.visit("/");

    /// search for the tee
    cy.get("#search")
      .clear()
      .type("Gwyn Endurance Tee" + "{enter}");

    // click on the tee link in the search results
    cy.contains(".product-item-link", "Gwyn Endurance Tee")
      .scrollIntoView()
      .click();

    // assert the tee page URL path
    cy.location("pathname")
      .should("eq", "/gwyn-endurance-tee.html");

    // click on the M button for medium size
    cy.get("[aria-label='M']")
      .should("have.attr", "aria-checked", "false")
      .click();

    // assert the M button is now clicked / checked
    cy.get("[aria-label='M']")
      .should("have.attr", "aria-checked", "true");

    // click on the Green colour button
    cy.get("[aria-label='Green']")
      .should("have.attr", "aria-checked", "false")
      .click();

    // assert Green button is clicked / checked
    cy.get("[aria-label='Green']")
      .should("have.attr", "aria-checked", "true");

    // enter 4 for quantity
    cy.get("input#qty")
      .clear()
      .type("4");

    // click Add to cart CTA
    cy.contains("button", "Add to Cart")
      .click();

    // assert the CTA label changed to Added
    cy.get("button#product-addtocart-button")
      .should("contain", "Added");

    // assert the added to cart message
    cy.get("div.messages")
      .should("contain", "You added Gwyn Endurance Tee to your shopping cart.");

    // click on the cart icon in the top right
    cy.get("a.action.showcart")
      .should("be.visible")
      .click();

    // once the dropdown cart snapshot appears, click on the "View and Edit Cart" link
    cy.contains("a.action.viewcart", "View and Edit Cart")
      .click();

    // assert shopping cart page heading
    cy.get("span.base")
      .should("contain", "Shopping Cart");

    // click on the "Estimate Shipping and Tax" section dropdown in the aside summary element
    cy.contains("[id='block-shipping-heading']", "Estimate Shipping and Tax")
      .click();

    // assert the "Estimate Shipping and Tax" section is displayed
    cy.get("div#block-summary.content")
      .should("have.attr", "style", "display: block;");

    // select United Kigdom from the dropdown
    cy.get("select[name='country_id']")
      .select("United Kingdom")
    
    // assert GB is selected
    cy.get("select[name='country_id']")
      .invoke("val")
      .should("eq", "GB");

    // assert cart total is $92.00
    cy.get("[data-th='Order Total'] span")
      .should("have.text", "$92.00");

    // change the number of tees from 4 to 3
    cy.get("input.input-text.qty")
      .clear()
      .type("3");

    // save the page using an alias
    cy.intercept("/checkout/cart/").as("cartPage");

    // click on the update shopping cart button
    cy.get("[class='action update']")
      .click();

    // once the update button is clicked the page reloads, so we wait for that to complete
    cy.wait("@cartPage");

    // click on the tee product link in the cart summary
    cy.get("td [class='product-item-name'] a")
      .click();

    // click on the S button for small size
    cy.get("[aria-label='S']")
      .should("have.attr", "aria-checked", "false")
      .click();

    // assert the S button is now clicked / checked
    cy.get("[aria-label='S']")
      .should("have.attr", "aria-checked", "true");

    // click on the Yellow colour button
    cy.get("[aria-label='Yellow']")
      .should("have.attr", "aria-checked", "false")
      .click();

    // assert Yellow button is clicked / checked
    cy.get("[aria-label='Yellow']")
      .should("have.attr", "aria-checked", "true");

    // click Add to cart CTA
    cy.contains("button", "Add to Cart")
      .click();

    // assert the CTA label changed to Added
    cy.get("button#product-addtocart-button")
      .should("contain", "Added");

    // assert the added to cart message
    cy.get("div.messages")
      .should("contain", "You added Gwyn Endurance Tee to your shopping cart.");

    /// search for the band
    cy.get("#search")
      .clear()
      .type("Quest Lumaflex™ Band" + "{enter}");

    // click on the band link in the search results
    cy.contains("a.product-item-link", "Quest Lumaflex™ Band")
      .click();

    // assert the band page URL path
    cy.location("pathname")
      .should("eq", "/quest-lumaflex-trade-band.html");
    
    // click Add to cart CTA
    cy.contains("button", "Add to Cart")
      .click();

    // assert the CTA label changed to Added
    cy.get("button#product-addtocart-button")
      .should("contain", "Added");

    // assert the added to cart message
    cy.get("div.messages")
      .should("contain", "You added Quest Lumaflex™ Band to your shopping cart.");

    // click on the cart icon in the top right
    cy.get("a.action.showcart")
      .should("be.visible")
      .click();

    // once the dropdown cart snapshot appears, click on the "View and Edit Cart" link    
    cy.contains("a.action.viewcart", "View and Edit Cart")
      .click();

    // assert shopping cart page heading
    cy.get("span.base")
      .should("contain", "Shopping Cart");

    // assert the "Estimate Shipping and Tax" section is visible
    cy.get("div#block-summary.content")
      .should("be.visible");

    // assert cart total is $140.00
    cy.get("[data-th='Order Total'] span")
      .scrollIntoView()
      .should("have.text", "$140.00");
  })
})