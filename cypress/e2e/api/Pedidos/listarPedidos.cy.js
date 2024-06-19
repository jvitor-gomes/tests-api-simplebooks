import { listarPedidos } from '../../../utils/pedidos';

describe('Listar pedidos - API Test', () => {
    before(() => {
        cy.cliente();
    });

    it('Listar todos os pedidos', () => {
        cy.cliente();
        listarPedidos().then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');

        });
    });
});
