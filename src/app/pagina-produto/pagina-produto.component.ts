import { Component } from '@angular/core';
import { CadastroProdutoComponent } from '../cadastro-produto/cadastro-produto.component';
import { TabelaProdutosComponent } from '../tabela-produtos/tabela-produtos.component';
import { CadastroClienteComponent } from '../cadastro-cliente/cadastro-cliente.component';
@Component({
  selector: 'app-pagina-produto',
  standalone: true,
  imports: [CadastroProdutoComponent, TabelaProdutosComponent, CadastroClienteComponent],
  templateUrl: './pagina-produto.component.html',
  styleUrl: './pagina-produto.component.css'
})
export class PaginaProdutoComponent {

}
