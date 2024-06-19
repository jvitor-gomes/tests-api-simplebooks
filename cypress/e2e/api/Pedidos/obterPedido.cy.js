import { criarPedido, obterPedido } from '../../../utils/pedidos';

describe('Obter pedido - API Tests', () => {
    before(() => {
        cy.cliente();
    });

    it('Obter detalhes de um pedido específico', () => {
        criarPedido(3, 'John Gil').then((response) => {
            const orderId = response.body.orderId;
            obterPedido(orderId).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('id', orderId);
            });
        });
    });

    it('Tentar obter um pedido com ID inválido', () => {
        obterPedido('invalid_id').then((response) => {
            expect(response.status).to.eq(404);
        });
    });
});
