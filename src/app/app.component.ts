import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { PaginaClienteComponent } from './pagina-cliente/pagina-cliente.component';
import { PaginaProdutoComponent } from './pagina-produto/pagina-produto.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    PaginaClienteComponent,
    PaginaProdutoComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rotas-cadastro';
}
