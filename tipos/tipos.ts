// string 
let nome: string = 'João';
console.log(nome);
// nome = 28

// numbers
let idade: number = 27;
// idade = 'Ana
idade = 27.5;
console.log(idade);

// boolean
let possuiHobbies: boolean = false;
// possuiHobbies = 1;
console.log(possuiHobbies);

// tipos explícitos
let minhaIdade: number;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = 'idade é 27';

// array
let hobbies: any[] = ['Cozinhar', "Praticar esportes"]
console.log(hobbies[0]);
console.log(typeof hobbies);

hobbies = [100, 200, 300];
// hobbies = 100;
console.log(hobbies);

// tuplas
let endereco: [string, number, string] = ['Av Principal', 99, ''];
console.log(endereco);
endereco = ['Rua Importante', 1260, 'Bloco C']

// enums
enum Cor {
    Cinza, //0
    Verde = 100, //1
    Azul = 10, //2
    Laranja,
    Amarelo,
    Vermelho = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor);

console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);

// any
let carro: any = 'BMW';
console.log(carro);
carro = {marca: 'BMW', ano: 2020 };
console.log(carro);

// funções
function retornaMeuNome(): string {
    return nome;
    // return minhaIdade;
}

console.log(retornaMeuNome());

function digaOi(): void {
    console.log('Oi')
    //return minhaIdade
}

digaOi();

function multiplicar(numA: number, numB: number): number {
    return numA * numB;
}

// console.log(multiplicar(2, 'Bia'))
console.log(multiplicar(10, 4));

// tipo função
let calculo: (numeroA: number, numeriB: number) => number; 
/* 
 1. Estou definindo os tipos que viram como parâmetro e o tipo que vai ser retornado! 
 2. A ordem importa !!!
*/

// calculo = digaOi;
// calculo();

calculo = multiplicar;
console.log(calculo(5, 6));

// objetos
let usuario: {nome: string, idade: number }= {
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

// Desafio
/* 
    Criar um objeto funcionário com: 
    - Array de strings com os nomes dos supervisores
    - Função de bater ponto que recebe a hora e retorna uma string 
        -> Ponto normal (<= 8 );
        -> Fora do horário ( > 8 )
*/


// Alias -> É um nome ou apelido que damos a um determinado tipo que possa ser reutiilizado em locais diferentes!
type Funcionario =  {
    supervisores: string[],
    baterPonto: (horario: number) => string
}


let funcionario: Funcionario = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto(horario: number): string {
        if(horario <= 8)
            return 'Ponto Normal'

        return 'Fora do horário';
    }
}

let funcionario2: Funcionario = {
    supervisores: ['Bia', 'Carlos'],
    baterPonto(horario: number): string {
        if(horario <= 8)
            return 'Ponto Normal'

        return 'Fora do horário';
    }
}

console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(10));


// Union Types -> Com ele podemos usar mais de um tipo sem perder a questão da checagem!
let nota: number | string = 10;
console.log(`Minha nota é ${nota}`); // Template string
nota = '10';
console.log(`Minha nota é ${nota}`);
// nota = true;
// console.log(`Minha nota é ${nota}`);


// Checando tipos
let valor = 30;

if(typeof valor === "number") 
    console.log("É um valor number!");
else
    console.log(typeof valor);

// never 
function falha(msg: string): never {
    throw new Error(msg)
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

let altura = 12;
// altura = null

let alturaOpcional: null | number = 12;
alturaOpcional = null;

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
};

const contato1: Contato = {
    nome: 'Fulano',
    tel1: '98748752',
    tel2: null
};

console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);

let podeSerNulo = null // any
// podeSerNulo = 12
console.log(podeSerNulo);
// podeSerNulo = 'abc'
console.log(podeSerNulo);

// Desafio 2

type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}

let contaBancaria: ContaBancaria = {
    saldo: 3600,
    depositar(valor: number) {
        this.saldo += valor;
    }
}

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}

let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['234567890', '987654321']
}

correntista.contaBancaria.depositar(3000);
console.log(correntista);