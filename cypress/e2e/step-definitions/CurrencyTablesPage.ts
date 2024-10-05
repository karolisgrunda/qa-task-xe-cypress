import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on a currency tables page", () => {
    cy.visit("https://www.xe.com/currencytables/");
})

Given("Introduction text is visible", () => {
    cy.get("h1").should("be.visible").should("contain", "Historical rate tables");
    cy.get("p").should("be.visible").should("contain", "Build historic rate tables with your chosen base currency with XE Currency Tables. For commercial purposes, get an automated currency feed through the XE Currency Data API.");
})