import { Veiculo } from "./veiculo";

export class RegistroEntradaSaida {
    veiculo: Veiculo;
    dataHoraEntrada: Date;
    dataHoraSaida: Date | null = null;
    tempoPermanencia: number = 0;

    constructor(veiculo: Veiculo) {
        this.veiculo = veiculo;
        this.dataHoraEntrada = new Date();
    }

    registrarEntrada(veiculo: Veiculo): void {
        this.veiculo = veiculo;
        this.dataHoraEntrada = new Date();
        console.log(`Veículo ${veiculo.modelo} entrou no estacionamento às ${this.dataHoraEntrada}`);
    }

    registrarSaida(): void {
        if (this.dataHoraSaida) {
            console.log("Veículo já saiu.");
            return;
        }

        this.dataHoraSaida = new Date();
        this.tempoPermanencia = this.calcularTempoPermanencia();
        console.log(`Veículo ${this.veiculo.modelo} saiu do estacionamento às ${this.dataHoraSaida}`);
    }

    calcularTempoPermanencia(): number {
        if (!this.dataHoraSaida) {
            throw new Error("Saída ainda não registrada.");
        }

        const tempo = (this.dataHoraSaida.getTime() - this.dataHoraEntrada.getTime()) / (1000 * 60); // tempo em minutos
        return tempo;
    }
}
