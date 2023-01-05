import {
    AcerGamer,
    Computador,
    MemoriaRam,
    TipoComputador,
} from "./computador";

let computador = new Computador("Apple", 3000, TipoComputador.Office);
let computadorGamer = new AcerGamer(5000, TipoComputador.Gamer);

console.log(computador);
console.log(computadorGamer);
const memoriaRam = new MemoriaRam(16 + "GB");
computadorGamer.memoriaRam = memoriaRam;
console.log(computadorGamer);

computadorGamer.mostrarValor();
computador.mostrarValor();
