describe('API Tests', () => {
    it('should fetch stories ids', () => {
      cy.request('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty')
        .should((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.length.above(0);
        });
    });

    it('should return a specific story', () => {
        cy.request('https://hacker-news.firebaseio.com/v0/item/39370217.json?print=pretty')
        .should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property

        });
    })
})