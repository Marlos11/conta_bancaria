import { Conta } from "../Model/Conta";

export interface ContaRepository {
  //CRUD da Conta
  procurarPorNumero(numero: number): void;
  listarTodos(): void;
  cadastrar(conta: Conta): void;
  atualizar(conta: Conta): void;
  deletar(numero: number): void;

  //Métodos Bancarios
  sacar(numero: number, valor: number): void;
  depositar(numero: number, valor: number): void;
  transferir(numeroOrigem: number, numeroDestino: number, valor: number): void;
}