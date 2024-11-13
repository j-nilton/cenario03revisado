import { Pagamento } from "../model/pagamento";
import { RegistroEntradaSaida } from "../model/registroEntradaSaida";
import { Veiculo } from "../model/veiculo";

// Criando um veículo
const veiculo1 = new Veiculo("ABC1234", "Fusca", "Azul");

// Registrando a entrada
const registro1 = new RegistroEntradaSaida(veiculo1);
registro1.registrarEntrada(veiculo1);

// Registrando a saída
registro1.registrarSaida();

// Calculando o pagamento
const pagamento = new Pagamento();
const valorAPagar = pagamento.calcularValor(registro1.tempoPermanencia);
pagamento.registrarPagamento();
