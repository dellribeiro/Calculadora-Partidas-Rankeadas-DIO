export class Heroi {
    constructor(nome, vitorias, derrotas) {
        this.nome = nome;
        this.vitorias = vitorias;
        this.derrotas = derrotas;
        this.saldoVitorias = this.calcularSaldo();
        this.nivel = this.determinarNivel();
    }

    calcularSaldo() {
        return this.vitorias - this.derrotas;
    }

    determinarNivel() {
        switch (true) {
            case this.vitorias < 10:
                return "Ferro";
            case this.vitorias >= 11 && this.vitorias <= 20:
                return "Bronze";
            case this.vitorias >= 21 && this.vitorias <= 50:
                return "Prata";
            case this.vitorias >= 51 && this.vitorias <= 80:
                return "Ouro";
            case this.vitorias >= 81 && this.vitorias <= 90:
                return "Diamante";
            case this.vitorias >= 91 && this.vitorias <= 100:
                return "Lendário";
            default:
                return "Imortal";
        }
    }

    exibirMensagem() {
        console.log(`O Herói tem um saldo de ${this.saldoVitorias} e está no nível ${this.nivel}`);
    }

}