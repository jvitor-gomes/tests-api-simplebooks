describe('Registro de Cliente - API Test', () => {
    it('Registrar um cliente', () => {
        cy.cliente().then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('accessToken');
        });
    });
});
