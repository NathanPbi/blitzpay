/// <reference types="cypress" />

Cypress.Commands.add("login", () => {
  cy.visit("/");
  cy.get(".navbar-brand > .img-fluid").should("be.visible");

  cy.scrollTo("bottom").wait(1000);
  cy.scrollTo("top").wait(1000);
  cy.get("#section-2-title").click().wait(1000);
  cy.get("#section-4-title").click().wait(1000);
  cy.get("#section-5-title").click().wait(1000);
  cy.get("#section-10-title").click().wait(1000);
  cy.scrollTo("top");
  cy.visit("/");
  cy.get(".d-none > .btn-primary").click();
  cy.get("#email").type("natan.blitzpay@gmail.com", { delay: 100 });
  cy.get("#password").type("123456", { delay: 100 });

  cy.get(".icon-eye").click().wait(10000);

  cy.get(".btn").click();
});
