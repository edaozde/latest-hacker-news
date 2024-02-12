describe('Hacker News App', () => {
  beforeEach(() => {
    cy.visit('https://latest-hacker-news.vercel.app/');
  });

  it('should load 10 more stories when "Load More" button is clicked', () => {
    cy.get('.story').should('have.length', 10);

    cy.contains('Load More').click();

    cy.get('.story').should('have.length', 20);


  });
});

