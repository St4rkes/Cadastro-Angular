import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-cliente',
  standalone: true,
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css'],
  imports: [FormsModule]
})

export class CadastroClienteComponent {
  cpf = '';
  nome = '';
  email = '';

  constructor(private clienteService: ClienteService) { }

  adicionarCliente() {
    this.clienteService.adicionarCliente({ cpf: this.cpf, nome: this.nome, email: this.email });
    this.cpf = '';
    this.nome = '';
    this.email = '';
  }
}
