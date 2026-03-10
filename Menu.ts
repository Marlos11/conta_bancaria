import readlineSync from "readline-sync"
import { Conta } from "./src/Model/Conta"
export function main() {
  let opcao: number

  const conta: Conta = new Conta(1, 123, 1, "Adriana", 10000);
  conta.visualizar();
  conta.sacar(10500);
  conta.visualizar();
  conta.depositar(5000);
  conta.visualizar();

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
        console.log("\n\nCriar conta\n\n")
        break
      case 2:
        console.log("\n\nListar todas as Contas\n\n")
        break
      case 3:
        console.log("\n\nConsultar dados da Conta - por Número\n\n")
        break
      case 4:
        console.log("\n\nAtualizar dados da Conta\n\n")
        break
      case 5:
        console.log("\n\nApagar uma Conta\n\n")
        break
      case 6:
        console.log("\n\nSaque")
        break
      case 7:
        console.log("\n\nDepósito\n\n")
        break
      case 8:
        console.log("\n\nTransferência entre contas\n\n")
        break
      default:
        console.log("\nOpção Inválida\n")
        break
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
