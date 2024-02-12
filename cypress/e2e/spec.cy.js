describe("Hacker News App", () => {
  //avant chaque test, d'abord loader la page
  beforeEach(() => {
    cy.visit("https://latest-hacker-news.vercel.app/");
  });

  it('should load 10 more stories when "Load More" button is clicked', () => {
    cy.get(".story").should("have.length", 10);

    cy.contains("Load More").click();

    cy.get(".story").should("have.length", 20);
  });

  it("should verify if redirection is ok when a story-title is clicked", () => {
    cy.get(".story-title").first().click();
  });
});
