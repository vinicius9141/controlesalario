import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public valorHora: number = 0;
  public quantidaDeHoras: number = 0;
  public valorImpostos: number = 0;
  public aluguel: number = 0;
  public agua: number = 0;
  public luz: number = 0;
  public internet: number = 0;
  public resultado: number = 0;
  public valorFinalContas: number = 0;
  public totalLiquido: number = 0;

  constructor() {}

  public calculoValorSalario(): void {
    this.resultado = this.valorHora * this.quantidaDeHoras - this.valorImpostos;
    localStorage.setItem('valorHora', this.valorHora.toString());
    localStorage.setItem('quantidaDeHoras', this.quantidaDeHoras.toString());
  }

  public calculoValorContas(): void {
    this.valorFinalContas =
      Number(this.aluguel) +
      Number(this.agua) +
      Number(this.luz) +
      Number(this.internet);
  }

  public calculoValorLiquido(): any {
    this.calculoValorSalario();
    this.calculoValorContas();
    this.totalLiquido = this.resultado - this.valorFinalContas;
  }
}
