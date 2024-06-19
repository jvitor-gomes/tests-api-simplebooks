Cypress.Commands.add('cliente', () => {
  const baseUrl = Cypress.env('BASE_URL');
  const authToken = Cypress.env('AUTH_TOKEN');
  if (!authToken) {
      cy.request('POST', `${baseUrl}/api-clients/`, {
          clientName: 'CypressTestCliente',
          clientEmail: `cypress_test_${Date.now()}@exemplo.com`
      }).then((response) => {
          Cypress.env('AUTH_TOKEN', response.body.accessToken);
      });
  }
});