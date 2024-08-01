class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    detalhes() {
        return `${this.ano} ${this.marca} ${this.modelo}`;
    }

    tipo() {
        return "Veículo";
    }
}


class Carro extends Veiculo {
    constructor(marca, modelo, ano, numPortas) {
        super(marca, modelo, ano);
        this.numPortas = numPortas;
    }

    tipo() {
        return "Carro";
    }

    detalhes() {
        return `${super.detalhes()} com ${this.numPortas} portas`;
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, ano, cilindradas) {
        super(marca, modelo, ano);
        this.cilindradas = cilindradas;
    }

    tipo() {
        return "Moto";
    }

    detalhes() {
        return `${super.detalhes()} com ${this.cilindradas}cc`;
    }
}

// Instâncias de Carro
const carro1 = new Carro("Toyota", "Corolla", 2020, 4);
const carro2 = new Carro("Ford", "Mustang", 2018, 2);

// Instância de Moto
const moto1 = new Moto("Yamaha", "MT-07", 2021, 689);

// Imprimindo detalhes dos veículos
console.log(carro1.detalhes());  // Output: 2020 Toyota Corolla com 4 portas
console.log(carro2.detalhes());  // Output: 2018 Ford Mustang com 2 portas
console.log(moto1.detalhes());   // Output: 2021 Yamaha MT-07 com 689cc

// Verificando os tipos
console.log(carro1.tipo());  // Output: Carro
console.log(moto1.tipo());   // Output: Moto
