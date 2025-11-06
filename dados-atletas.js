class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
        
        this.categoria = this.calculaCategoria();
        this.imc = this.calculaIMC();
        this.mediaValida = this.calculaMediaValida();
    }

    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil";
        } else if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil";
        } else if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediário";
        } else if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto";
        } else {
            return "Sem categoria";
        }
    }

    calculaIMC() {
        if (this.altura > 0) {
            return this.peso / (this.altura * this.altura);
        }
        return 0;
    }

    calculaMediaValida() {
        if (this.notas.length < 3) {
            return this.notas.reduce((soma, nota) => soma + nota, 0) / (this.notas.length || 1);
        }

        const notasOrdenadas = [...this.notas].sort((a, b) => a - b);

        const notasValidas = notasOrdenadas.slice(1, -1);

        const somaNotasValidas = notasValidas.reduce((soma, nota) => soma + nota, 0);

        return somaNotasValidas / notasValidas.length;
    }

    obtemNomeAtleta() {
        return this.nome;
    }

    obtemIdadeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    }

    obtemAlturaAtleta() {
        return this.altura;
    }

    obtemNotasAtleta() {
        return this.notas;
    }

    obtemCategoria() {
        return this.categoria;
    }

    obtemIMC() {
        return this.imc;
    }

    obtemMediaValida() {
        return this.mediaValida;
    }
}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
console.log(`Idade: ${atleta.obtemIdadeAtleta()}`);
console.log(`Peso: ${atleta.obtemPesoAtleta()}`);
console.log(`Altura: ${atleta.obtemAlturaAtleta()}`);
console.log(`Notas: ${atleta.obtemNotasAtleta().join(",")}`);
console.log(`Categoria: ${atleta.obtemCategoria()}`);

console.log(`IMC: ${atleta.obtemIMC()}`);

const mediaFormatada = atleta.obtemMediaValida().toFixed(8).replace('.', ',');
console.log(`Média válida: ${mediaFormatada}`);
