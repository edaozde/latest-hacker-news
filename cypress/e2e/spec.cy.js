//tester l'url

describe("My First Test", () => {
  it("Visits hacker-news", () => {
    cy.visit("https://latest-hacker-news.vercel.app/");
  });
});
