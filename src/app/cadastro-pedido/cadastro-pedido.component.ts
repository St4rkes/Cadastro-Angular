import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-cadastro-pedido',
  templateUrl: './cadastro-pedido.component.html',
  styleUrls: ['./cadastro-pedido.component.css'],
  imports: [FormsModule],
  standalone: true,
})
export class CadastroPedidoComponent implements OnInit {
  cpfCliente = '';
  codigoProduto = '';
  dataPedido = '';
  quantidade = 0;
  pedidos: any[] = [];

  constructor(private pedidoService: PedidoService) { }

  ngOnInit() {
    this.pedidos = this.pedidoService.obterPedidos();
  }

  adicionarPedido() {
    this.pedidoService.adicionarPedido({
      cpfCliente: this.cpfCliente,
      codigoProduto: this.codigoProduto,
      dataPedido: this.dataPedido,
      quantidade: this.quantidade
    });

    // Atualiza a lista de pedidos após cadastrar um novo pedido
    this.pedidos = this.pedidoService.obterPedidos();

    // Limpa os campos do formulário
    this.cpfCliente = '';
    this.codigoProduto = '';
    this.dataPedido = '';
    this.quantidade = 0;
  }
}