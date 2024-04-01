import { Component } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { CadastroClienteComponent } from '../cadastro-cliente/cadastro-cliente.component';
import { TabelaClientesComponent } from '../tabela-clientes/tabela-clientes.component';
import { CadastroPedidoComponent } from '../cadastro-pedido/cadastro-pedido.component';

@Component({
  selector: 'app-pagina-pedido',
  templateUrl: './pagina-pedido.component.html',
  styleUrls: ['./pagina-pedido.component.css'],
  standalone: true,
  imports: [CadastroClienteComponent, TabelaClientesComponent, CadastroPedidoComponent],

})
export class PaginaPedidoComponent {
  pedidos: any[] = [];

  constructor(private pedidoService: PedidoService) {
    this.pedidos = this.pedidoService.obterPedidos();
  }
}
