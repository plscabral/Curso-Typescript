"use strict";
// string 
var nome = 'João';
console.log(nome);
// nome = 28
// numbers
var idade = 27;
// idade = 'Ana
idade = 27.5;
console.log(idade);
// boolean
var possuiHobbies = false;
// possuiHobbies = 1;
console.log(possuiHobbies);
// tipos explícitos
var minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = 'idade é 27';
// array
var hobbies = ['Cozinhar', "Praticar esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
// hobbies = 100;
console.log(hobbies);
// tuplas
var endereco = ['Av Principal', 99, ''];
console.log(endereco);
endereco = ['Rua Importante', 1260, 'Bloco C'];
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
// any
var carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2020 };
console.log(carro);
// funções
function retornaMeuNome() {
    return nome;
    // return minhaIdade;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('Oi');
    //return minhaIdade
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
// console.log(multiplicar(2, 'Bia'))
console.log(multiplicar(10, 4));
// tipo função
var calculo;
/*
 1. Estou definindo os tipos que viram como parâmetro e o tipo que vai ser retornado!
 2. A ordem importa !!!
*/
// calculo = digaOi;
// calculo();
calculo = multiplicar;
console.log(calculo(5, 6));
// objetos
var usuario = {
    nome: 'João',
    idade: 27,
};
console.log(usuario);
// usuario = {};
// usuario == {
//     name = 'Maria',
//     age: 31
// }
usuario = {
    idade: 21,
    nome: 'Maria',
};
console.log(usuario);
var funcionario = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto: function (horario) {
        if (horario <= 8)
            return 'Ponto Normal';
        return 'Fora do horário';
    }
};
var funcionario2 = {
    supervisores: ['Bia', 'Carlos'],
    baterPonto: function (horario) {
        if (horario <= 8)
            return 'Ponto Normal';
        return 'Fora do horário';
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(10));
// Union Types -> Com ele podemos usar mais de um tipo sem perder a questão da checagem!
var nota = 10;
console.log("Minha nota \u00E9 " + nota); // Template string
nota = '10';
console.log("Minha nota \u00E9 " + nota);
// nota = true;
// console.log(`Minha nota é ${nota}`);
// Checando tipos
var valor = 30;
if (typeof valor === "number")
    console.log("É um valor number!");
else
    console.log(typeof valor);
// never 
function falha(msg) {
    throw new Error(msg);
}
// const produto = {
//     nome: 'Sabão',
//     preco: 4,
//     validarProduto() {
//         if(this.nome || this.nome.trim().length == 0){
//             falha('Precisa ter um nome')
//         }
//         if(this.preco <= 0) {
//             falha('Preco inválido!')
//         }
//     }
// }
// produto.validarProduto()
var altura = 12;
// altura = null
var alturaOpcional = 12;
alturaOpcional = null;
var contato1 = {
    nome: 'Fulano',
    tel1: '98748752',
    tel2: null
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
var podeSerNulo = null; // any
// podeSerNulo = 12
console.log(podeSerNulo);
// podeSerNulo = 'abc'
console.log(podeSerNulo);
var contaBancaria = {
    saldo: 3600,
    depositar: function (valor) {
        this.saldo += valor;
    }
};
var correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['234567890', '987654321']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
