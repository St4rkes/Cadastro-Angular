import { TestBed } from '@angular/core/testing';
import { PedidoService } from './pedido.service';

describe('PedidoService', () => {
  let service: PedidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a pedido to the list of pedidos', () => {
    const pedido = {
      cpfCliente: '12345678900',
      codigoProduto: 'PROD001',
      dataPedido: '2024-04-02',
      quantidade: 2
    };

    service.adicionarPedido(pedido);

    const pedidos = service.obterPedidos();
    expect(pedidos.length).toBe(1);
    expect(pedidos[0]).toEqual({
      ...pedido,
      numero: 1 // O primeiro pedido deve ter número 1
    });
  });
});
