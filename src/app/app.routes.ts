import { Routes } from '@angular/router';
import { PaginaClienteComponent } from './pagina-cliente/pagina-cliente.component';
import { PaginaProdutoComponent } from './pagina-produto/pagina-produto.component';
import { PaginaPedidoComponent } from './pagina-pedido/pagina-pedido.component';

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
  {
  path: 'pedidos',
    component: PaginaPedidoComponent,
    title: 'Cadastro de Pedidos'
  },
];
