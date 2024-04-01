import { Routes } from '@angular/router';
import { PaginaClienteComponent } from './pagina-cliente/pagina-cliente.component';
import { PaginaProdutoComponent } from './pagina-produto/pagina-produto.component';
export const routes: Routes = [
  {
    path: 'clientes',
    component: PaginaClienteComponent,
    title: 'Cadastro de Clientes'
  },
  {
    path: 'produtos',
    component: PaginaProdutoComponent,
    title: 'Cadastro de Produtos'
  },
];
