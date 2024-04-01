import { Injectable } from '@angular/core';

export interface Produto {
  codigo: string;
  nome: string;
  preco: number;
}

@Injectable({
  providedIn: 'root',
})

export class ProdutoService {
  private produtos: Produto[] = [];

  constructor() { }

  adicionarProduto(produto: Produto) {
    this.produtos.push(produto);
  }

  obterProdutos(): Produto[] {
    return this.produtos;
  }
}
