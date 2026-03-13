import readlineSync from "readline-sync"
import { Conta } from "./src/Model/Conta"
import { ContaCorrente } from "./src/Model/ContaCorrente";
import { ContaPoupanca } from "./src/Model/ContaPoupanca";
import { ContaController } from "./src/controller/ContaController";
export function main() {

  //Instâcia da classe contaController
  let contas: ContaController = new ContaController();
  //Variáveis Auxiliares
  let opcao, numero, agencia, tipo, saldo, limite, aniversario: number;
  let titular: string;
  const tiposContas = ["Conta Corrente", "Conta Poupanca"]




  console.log("\nCriar Contas\n");

  let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "João da Silva", 1000, 100.0);
  contas.cadastrar(cc1);

  let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria da Silva", 2000, 100.0);
  contas.cadastrar(cc2);

  let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Mariana dos Santos", 4000, 12);
  contas.cadastrar(cp1);

  let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Juliana Ramos", 8000, 15);
  contas.cadastrar(cp2);

  contas.listarTodas();
  while (true) {

    console.log("****************************************************************************")
    console.log("                                                                            ")
    console.log("                        Banco do BRAZIL COM Z                               ")
    console.log("                                                                            ")
    console.log("****************************************************************************")
    console.log("                                                                            ")
    console.log("                        1 - Criar conta                                     ")
    console.log("                        2 - Listar todas as Contas                          ")
    console.log("                        3 - Buscar Conta por Numero                         ")
    console.log("                        4 - Atualizar Dados da Conta                        ")
    console.log("                        5 - Apagar conta                                    ")
    console.log("                        6 - Sacar                                           ")
    console.log("                        7 - Depositar                                       ")
    console.log("                        8 - Transferir valores entre contas                 ")
    console.log("                        9 - Sair                                            ")
    console.log("                                                                            ")
    console.log("****************************************************************************")


    console.log("ENTRE COM A OPÇÃO DESEJADA: ")
    opcao = readlineSync.questionInt("")

    if (opcao == 9) {
      console.log("\nBanco do Brazil com Z - O seu Futuro começa aqui!");
      sobre();
      process.exit(0);
    }
    switch (opcao) {
      case 1:
        console.log("\n\nCriar conta\n\n");

        console.log("Digite o Número da agência: ");
        agencia = readlineSync.questionInt("");

        console.log("Digite o nomedo do titular da conta: ");
        titular = readlineSync.question("");

        console.log("\nDigite o tipo da Conta: ")
        tipo = readlineSync.keyInSelect(tiposContas, "", { cancel: false }) + 1;

        console.log("\nDigite o Saldo da conta(R$): ");
        saldo = readlineSync.questionFloat("");

        switch (tipo) {
          case 1:
            console.log("Digite o limite da conta (R$): ");
            limite = readlineSync.questionFloat("");
            contas.cadastrar(
              new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite));
            break;
          case 2:
            console.log("Digite o dia do aniversário da Conta poupança: ");
            aniversario = readlineSync.questionInt("");
            contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
            break;
        }
        break;
      case 2:
        console.log("\n\nListar todas as Contas\n\n");
        contas.listarTodas();
        break;
      case 3:
        console.log("\n\nConsultar dados da Conta - por Número\n\n");
        console.log("Digite o número da conta: ");
        numero = readlineSync.questionInt("");
        contas.procurarPorNumero(numero);
        break;
      case 4:
        console.log("\n\nAtualizar dados da Conta\n\n");
        console.log("Digite o número da Conta: ");
        numero = readlineSync.questionInt("");

        let conta = contas.buscarNoArray(numero);

        if (conta != null) {

          console.log("Digite o Número da agência: ");
          agencia = readlineSync.questionInt("");

          console.log("Digite o Nome do Titular da conta: ");
          titular = readlineSync.question("");

          tipo = conta.tipo;

          console.log("\nDigite o Saldo da conta (R$): ");
          saldo = readlineSync.questionFloat("");

          switch (tipo) {
            case 1:
              console.log("Digite o Limite da Conta (R$): ");
              limite = readlineSync.questionFloat("");
              contas.atualizar(
                new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
              break;
            case 2:
              console.log("Digite o Dia do aniversário da Conta Poupança: ");
              aniversario = readlineSync.questionInt("");
              contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo,
                aniversario));
              break;
          }

        } else {
          console.log("\nA Conta numero: " + numero +
            " não foi encontrada!",);
        }



        break;
      case 5:
        console.log("\n\nApagar uma Conta\n\n");
        console.log("digite o núnero da conta: ");
        numero = readlineSync.questionInt("");
        contas.deletar(numero);

        break;
      case 6:
        console.log("\n\nSaque");
        break;
      case 7:
        console.log("\n\nDepósito\n\n");
        break;
      case 8:
        console.log("\n\nTransferência entre contas\n\n");
        break;
      default:
        console.log("\nOpção Inválida\n");
        break;
    }
  }
}
export function sobre(): void {
  console.log("\n*****************************************************");
  console.log("Projeto Desenvolvido por:Marlos Franklin ");
  console.log("Marlos Franklin - marlos-gama@hotmail.com");
  console.log("https://github.com/Marlos11");
  console.log("*****************************************************");
}

main()
