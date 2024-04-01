import { Injectable } from '@angular/core';

export interface Cliente {
  cpf: string;
  nome: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})

export class ClienteService {
  private clientes: Cliente[] = [];

  constructor() { }

  adicionarCliente(cliente: Cliente) {
    this.clientes.push(cliente);
  }

  obterClientes(): Cliente[] {
    return this.clientes;
  }
}
