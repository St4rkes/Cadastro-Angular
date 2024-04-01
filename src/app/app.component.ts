import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { PaginaClienteComponent } from './pagina-cliente/pagina-cliente.component';
import { PaginaProdutoComponent } from './pagina-produto/pagina-produto.component';
import { PaginaPedidoComponent } from './pagina-pedido/pagina-pedido.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    PaginaClienteComponent,
    PaginaProdutoComponent,
    PaginaPedidoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rotas-cadastro';
}
