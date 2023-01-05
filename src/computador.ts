export enum TipoComputador {
    Gamer = "Gamer",
    Office = "Office",
}

export class Computador {
    marca: string;
    valor: number;
    tipo: TipoComputador;
    memoriaRam?: MemoriaRam;

    constructor(marca: string, valor: number, tipo: TipoComputador) {
        this.marca = marca;
        this.valor = valor;
        this.tipo = tipo;
    }

    public mostrarValor() {
        console.log(
            `A marca é ${this.marca}! E seu computador é ${this.tipo}.`
        );
    }
}

export class AcerGamer extends Computador {
    tipoComputador!: TipoComputador;

    constructor(valor: number, tipoComputador: TipoComputador) {
        super("Acer", valor, TipoComputador.Gamer);
    }

    public mostrarValor() {
        console.log(
            `O seu computador é da marca ${this.marca}! Ideal para o público ${this.tipo}.`
        );
    }
}

export class MemoriaRam {
    public memoria: number | string;

    constructor(memoria: number | string) {
        this.memoria = memoria;
    }
}
