import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {
  valor!: number;
  destino!: number;

  constructor() {}

  ngOnInit(): void {}

  transferir() {
    console.log(
      `Nova transferência. Valor: R$ ${this.valor} , Destino: ${this.destino}`
    );
  }
}
