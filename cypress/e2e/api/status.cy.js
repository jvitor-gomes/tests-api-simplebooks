describe('Status API Test', () => {
    const baseUrl = Cypress.env('BASE_URL');
    it('Verificar o status da API', () => {
      cy.request(`${baseUrl}/status`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('status', 'OK');
      });
    });
  });
  