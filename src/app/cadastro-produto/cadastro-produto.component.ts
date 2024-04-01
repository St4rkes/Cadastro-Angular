import { Component } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-produto',
  standalone: true,
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css'],
  imports: [FormsModule]
})
export class CadastroProdutoComponent {
  codigo = '';
  nome = '';
  preco = 0;

  constructor(private produtoService: ProdutoService) { }

  adicionarProduto() {
    this.produtoService.adicionarProduto({ codigo: this.codigo, nome: this.nome, preco: this.preco });
    this.codigo = '';
    this.nome = '';
    this.preco = 0;
  }
}
