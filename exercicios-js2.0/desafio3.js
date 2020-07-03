// # Desafio 01-3. Funções e estruturas de repetição

// Desafios para fortalecer os conhecimentos obtidos até aqui.

// ## Usuários e tecnologias

// Crie um programa que armazena um array de usuários (objetos), cada usuário tem um `nome` e suas `tecnologias` (novo array), por exemplo:

// js
const usuarios = [
  { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
  { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },
  { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }
]
// ```

// Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:

// // ```
// Carlos trabalha com HTML, CSS
// Jarmine trabalha com JavaScript, CSS
// Tuane trabalha com HTML, Node.js



const empregados = [ 
    {
        nome: "Clerton" , 
        tecnologias: [" HTML" , "CSS"]
    },
    {
        nome: "Raryssa ", 
        tecnologias: ["Javascript" , "CSS"]
    },
    {
        nome: "Carlos" , 
        tecnologias: ["HTML" , "Node.js"]
    }
]

// function imprimirTela (usuarios){
//     for(let usuario of usuarios){
//          console.log(`${usuario.nome} trabalha com ${usuario.tecnologia}`);
//      }
// }

// imprimirTela(empregados);

function checaSeUsuarioUsaCSS(usuario) {
   for(let tecnologia of usuario.tecnologias ){
       if(tecnologia == "CSS"){
           return true;
       }
   }
   return false ;

}

function imprimirNaTela(usuarios){
for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])

  if(usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
  }
}
}


imprimirNaTela(empregados)

const usuarios = [
    {
      nome: 'Salvio',
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: 'Marcio',
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: 'Lucia',
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ]

    function calculaSaldo(receitas, despesas) {
        const receitasN = somaNumeros(receitas);
        const despesasN = somaNumeros(despesas);
        
        return receitasN - despesasN;
}

    function somaNumeros(numeros) {
    // Soma todos números dentro do array "numeros"
        let soma = 0;
            for(let numero of numeros){
                soma = soma + numero;
            }
            return soma;
  }


  for (let usuario of usuarios) {
    const saldo = calculaSaldo(usuario.receitas, usuario.despesas)

    if (saldo > 0) {
        console.log(`${usuario.nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`)
    } else {
        console.log(`${usuario.nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`)
    }
}