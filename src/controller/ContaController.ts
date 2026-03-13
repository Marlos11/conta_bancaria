import { Conta } from "../Model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {

  private listarContas: Array<Conta> = new Array<Conta>();
  numero: number = 0;

  procurarPorNumero(numero: number): void {
    let buscaConta = this.buscarNoArray(numero);

    if (buscaConta != null) {
      buscaConta.visualizar();
    } else {
      console.log(`\nA conta número: ${numero} não foi encontrada!`)
    }
  }
  listarTodos(): void {
    throw new Error("Method not implemented.");
  }
  cadastrar(conta: Conta): void {
    this.listarContas.push(conta);
    console.log(`\nA Conta Número: ${conta.numero} foi criada com sucesso!`)
  }
  atualizar(conta: Conta): void {
    let buscaConta = this.buscarNoArray(conta.numero);

    if (buscaConta != null) {
      this.listarContas[this.listarContas.indexOf(buscaConta)] = conta;
      console.log(`\nA Conta numero: ${conta.numero} foia tualizada com sucesso!!`)
    } else {
      console.log(`\nA conta numero: ${conta.numero} nao foi encontrada!`)
    }
  }
  deletar(numero: number): void {
    let buscaConta = this.buscarNoArray(numero);

    if (buscaConta != null) {
      this.listarContas.splice(this.listarContas.indexOf(buscaConta), 1);
      console.log(`\nA conta numero: ${numero} foi apagada com sucesso!`)
    } else {
      console.log(`\nA conta numero: ${numero} não foi encontrada`)
    }
  }
  sacar(numero: number, valor: number): void {
    throw new Error("Method not implemented.");
  }
  depositar(numero: number, valor: number): void {
    throw new Error("Method not implemented.");
  }
  transferir(numeroOrigem: number, numeroDestino: NumberConstructor, valor: number): void {
    throw new Error("Method not implemented.");
  }

  listarTodas(): void {
    for (let conta of this.listarContas) {
      conta.visualizar();
    }
  }

  public gerarNumero(): number {
    return ++this.numero;
  }
  /* Checa se uma conta existe */

  public buscarNoArray(numero: number): Conta | null {
    for (let conta of this.listarContas) {
      if (conta.numero === numero)
        return conta;
    }
    return null;
  }
}