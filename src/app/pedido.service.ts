import { Injectable } from '@angular/core';

export interface Pedido {
  numero?: number;
  cpfCliente: string;
  codigoProduto: string;
  dataPedido: string;
  quantidade: number;
}

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  private pedidos: Pedido[] = [];
  private numeroPedido = 1;

  constructor() { }

  adicionarPedido(pedido: Pedido) {
    pedido.numero = this.numeroPedido++;
    this.pedidos.push(pedido);
  }

  obterPedidos(): Pedido[] {
    return this.pedidos;
  }
}

