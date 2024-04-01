import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto, ProdutoService } from '../produto.service';

@Component({
  selector: 'app-tabela-produtos',
  standalone: true,
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css'],
  imports: [CommonModule]
})

export class TabelaProdutosComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produtos = this.produtoService.obterProdutos();
  }
}
