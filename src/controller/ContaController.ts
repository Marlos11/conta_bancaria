import { Conta } from "../Model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

export class ContaController implements ContaRepository {

  private listarContas: Array<Conta> = new Array<Conta>();
  numero: number = 0;

  procurarPorNumero(numero: number): void {
    throw new Error("Method not implemented.");
  }
  listarTodos(): void {
    throw new Error("Method not implemented.");
  }
  cadastrar(conta: Conta): void {
    this.listarContas.push(conta);
    console.log(`\nA Conta Número: ${conta.numero} foi criada com sucesso!`)
  }
  atualizar(conta: Conta): void {
    throw new Error("Method not implemented.");
  }
  deletar(numero: number): void {
    throw new Error("Method not implemented.");
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
}