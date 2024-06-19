import { criarPedido, excluirPedido } from '../../../utils/pedidos';

describe('Excluir pedido - API Tests', () => {
    before(() => {
        cy.cliente();
    });

    it('Excluir um pedido', () => {
        criarPedido(1, 'Aubrey Andersen').then((response) => {
            const orderId = response.body.orderId;
            excluirPedido(orderId).then((response) => {
                expect(response.status).to.eq(204);
            });
        });
    });

    it('Tentar excluir um pedido inexistente', () => {
        excluirPedido('pedido_inexistente_id').then((response) => {
            expect(response.status).to.eq(404);
        });
    });
});
