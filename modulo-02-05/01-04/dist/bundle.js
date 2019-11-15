// OBJECT SHORT SINTAXE
// const nome = "Leandro";
// const idade = 18;
// const usuario = {
//   nome,
//   idade,
//   empresa: "SMARAPD"
// };
// console.log(usuario);
// TEMPLATE LITERALS
// const nome = "Leandro";
// const idade = 18;
// console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);
// Operadores rest e spread
// REST - Pegar o resto das propriedades
// const usuario = {
//   nome: "Leandro",
//   idade: 18,
//   empresa: "SMARAPD"
// };
// const { nome, ...resto } = usuario;
// console.log(nome);
// console.log(resto);
// const array = [1, 2, 3, 4];
// const [a, b, ...c] = array;
// console.log(c);
// function soma(...params) {
//   return params.reduce((total, next) => total + next);
// }
// console.log(soma(1, 3453, 35145, 14513463, 4757568));
// // SPREAD - Repassar/Propagar as propriedades de array
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const arrayTotal = [...array1, ...array2];
// console.log(arrayTotal);
// const usuario1 = {
//   nome: "Leandro",
//   idade: 18,
//   empresa: "Makoni"
// };
// const usuario2 = {
//   ...usuario1,
//   empresa: "SMARAPD"
// };
// console.log(usuario1);
// console.log(usuario2);
// -----------------------------------------------------------------------------------------------------------------------------
// // Desestruturação
// const usuario = {
//   nome: "Leandro",
//   idade: 18,
//   endereco: {
//     tipo: "Avenida",
//     logradouro: "Bem-Te-Vis",
//     numero: 454,
//     cidade: "Batatais",
//     bairro: "Jardim Virgínia",
//     estado: "São Paulo",
//     complemento: "Nenhum"
//   }
// };
// // Desestruturação
// const { logradouro, cidade, numero } = usuario.endereco;
// console.log(cidade);
// function nomeUsuario({ nome }) {
//   console.log(nome);
// }
// nomeUsuario(usuario);
// -----------------------------------------------------------------------------------------------------------------------------
// // Arrow Function
// const array = [1, 3, 5, 8, 3, 66, 33];
// // Funções anônimas podem ser convertidas para funções arrow
// const result = array.map(item => item * 2);
// console.log(result);
// const teste = (nome, sobrenome = "") => `Olá ${nome} ${sobrenome}. Bom Dia!`;
// const teste2 = (nome, idade) => ({ nome: nome, idade: idade });
// console.log(teste2("Leandro", "Dias"));
// -----------------------------------------------------------------------------------------------------------------------------
// // Operações em Arrays
// const array = [1, 3, 5, 8, 3, 66, 33];
// // Percore o vetor e executa ação
// const newArray = array.map(function(item, index) {
//   return item * index;
// });
// console.log(newArray);
// // Reduce percorre o vetor e transforma em uma unica informação
// const sum = array.reduce(function(total, next) {
//   return total + next;
// });
// console.log(sum);
// // Filter filtra um array
// const filter = array.filter(function(item) {
//   return item % 2 === 0;
// });
// console.log(filter);
// // Find verificar se existe a informação dentro do array
// const find = array.find(function(item) {
//   return item === 66;
// });
// console.log(find);
// -----------------------------------------------------------------------------------------------------------------------------
// // Constantes e variáveis de escopo
// // Não pode ter seu valor reatribuido, mas podemos mutar uma variável não reatribuir
// const a = {
//   nome: "Diego"
// };
// // Isso é uma mutação
// a.nome = "Ferdinando";
// console.log(a);
// function teste(x) {
//   let y = 2;
//   if (x > 5) {
//     // Com o let você pode reatribuir valor a variável
//     let y = 4;
//     console.log(x, y);
//   }
// }
// teste(20);
// -----------------------------------------------------------------------------------------------------------------------------
// class TodoList {
//   constructor() {
//     this.todos = [];
//   }
//   // Quando a gente define um método estático ele não enxerga o restante da classe
//   // A gente só passa uma informação e ele retorna o resultado independente do restante da classe
//   static addTodo() {
//     this.todos.push("Novo todo");
//     console.log(this.todos);
//   }
// }
// TodoList.addTodo();
// O melhor seria
// class Matematica {
//   static soma(a, b) {
//     return a + b;
//   }
// }
// var result = Matematica.soma(5, 5);
// console.log(result);
// class List {
//   constructor() {
//     this.data = [];
//   }
//   add(data) {
//     this.data.push(data);
//     console.log(this.data);
//   }
// }
// class TodoList extends List {
//   constructor() {
//     // Chamar o constructor da classe pai
//     super();
//     this.user = "Leandro Dias";
//   }
//   mostrarUsuario() {
//     console.log(this.user);
//   }
// }
// var MinhaLista = new TodoList();
// document.getElementById("novotodo").onclick = function() {
//   MinhaLista.add("novo todo.");
// };
// MinhaLista.mostrarUsuario();
"use strict";
