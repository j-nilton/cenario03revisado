export class Pagamento {
    valor: number = 0;
    dataPagamento: Date;

    constructor() {
        this.dataPagamento = new Date();
    }

    calcularValor(tempoPermanencia: number): number {
        const tarifaPorMinuto = 0.05; // Exemplo de tarifa: 0.05 por minuto
        this.valor = tempoPermanencia * tarifaPorMinuto;
        return this.valor;
    }

    registrarPagamento(): void {
        console.log(`Pagamento de R$ ${this.valor.toFixed(2)} registrado em ${this.dataPagamento}`);
    }
}
