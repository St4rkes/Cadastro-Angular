import { Component } from '@angular/core';
import { CadastroClienteComponent } from '../cadastro-cliente/cadastro-cliente.component';
import { TabelaClientesComponent } from '../tabela-clientes/tabela-clientes.component';
import { CadastroPedidoComponent } from '../cadastro-pedido/cadastro-pedido.component';

@Component({
  selector: 'app-pagina-cliente',
  standalone: true,
  imports: [CadastroClienteComponent, TabelaClientesComponent, CadastroPedidoComponent],
  templateUrl: './pagina-cliente.component.html',
  styleUrl: './pagina-cliente.component.css'
})
export class PaginaClienteComponent {

}
