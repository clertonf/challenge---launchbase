// Criar um programa que calcula a media
//das notas entre os alunos e envia
// mensagem do cálculo da media


//se a media for maior que 5, parabenizar a turma.

// const aluno01 = {
//     nome: "Clerton",
//     nota: 9.8
// }

// const aluno02 = {
//     nome: "Farias",
//     nota: 8.2
// }

// const aluno03 = {
//     nome: "Raryssa" , 
//     nota: 10
// }

const alunosDaTurmaA = [
    {
        nome: "Clerton", 
        nota: 9.8
    },
    
    {
        nome: "Raryssa",
        nota: 8.2
    },

    {
        nome: "Fulano",
        nota: 2
    }
]
const alunosDaTurmaB = [
    {
        nome: "Bruno", 
        nota: 1.8
    },
    
    {
        nome: "Betinha",
        nota: 2.2
    },

    {
        nome: "Joaba",
        nota: 4
    }
]


//const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota);

function calculaMedia(alunos){
    return ((alunos[0].nota + alunos[1].nota + alunos[2].nota)/3) .toFixed(1);
     //toFixed(2) para diminuir a quantidade de números quebrados
    
}
   
   const media1 = calculaMedia(alunosDaTurmaA);
   const media2 = calculaMedia(alunosDaTurmaB);

   function imprimiResultado(media){
       if(media > 5){
           console.log(`Parabéns,você passou!! Sua media é ${media}`);
       } else{
           console.log(`Reprovado :( _ _ _  com media ${media}`);
       }
   }
   

   imprimiResultado(media1 , "turma A");
   imprimiResultado(media2 , "turma B");
   
   
   
   
   
   
   
   
    //console.log(media);

    // const nomeAlunos = ["Clerton" , "Raryssa" , "Fulano"];
    // console.log(nomeAlunos);

  //  console.log(`${alunos[0].nome} e sua nota =  ${alunos[0].nota} `) // acessei o vetor de objetos e

    // imprimi o nome de alunos e sua nota


// const media = (aluno01.nota + aluno02.nota + aluno03.nota)/3;
// console.log(aluno01)

// typeOf serve para mostrar qual é o tipo: Objeto, função

// if(media > 5){
//     // console.log("Parabéns turma!!");
//     console.log(`A nota foi ${media}, parabéns turma!!`);
// } else{
//     // console.log("Reprovados :(");
//     console.log(`A nota foi ${media}, reprovados :( ...`)
// }


// const nome3 = `Raryssa e  ${nome}`

// console.log(nome3); imprime Raryssa e Clerton

