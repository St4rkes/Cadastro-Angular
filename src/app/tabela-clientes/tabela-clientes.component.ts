import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cliente, ClienteService } from '../cliente.service';

@Component({
  selector: 'app-tabela-clientes',
  standalone: true,
  templateUrl: './tabela-clientes.component.html',
  styleUrls: ['./tabela-clientes.component.css'],
  imports: [CommonModule]
})

export class TabelaClientesComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.clientes = this.clienteService.obterClientes();
  }
}
