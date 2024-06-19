import { criarPedido, atualizarPedido, obterPedido } from '../../../utils/pedidos';

describe('Atualizar pedido - API Tests', () => {
    before(() => {
        cy.cliente();
    });

    it('Atualizar um pedido', () => {
        criarPedido(4, 'Silas Winters').then((response) => {
            const orderId = response.body.orderId;
            atualizarPedido(orderId, 'Gus').then((response) => {
                expect(response.status).to.eq(204);
                obterPedido(orderId).then((response) => {
                    expect(response.status).to.eq(200);
                    expect(response.body).to.have.property('customerName', 'Gus');
                });
            });
        });
    });

    it('Tentar atualizar um pedido com ID inválido', () => {
        const invalidOrderId = 'invalid_id';
        atualizarPedido(invalidOrderId, 'Bob Cenhs').then((response) => {
            expect(response.status).to.eq(404);
        });
    });
});
